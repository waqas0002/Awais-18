<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;

class QuoteController extends Controller
{
    public function index()
    {
        return view('test');
    }

    public function quote(Request $request)
    {

        $quotePlans = $request->post();

        $travelDetails = [
            'Travellers'  => $quotePlans['adults'],
            'TripDetails' => [
                'TripStartDate' => $quotePlans['tripStart'],
                'TripEndDate'   => $quotePlans['tripEnd'],
                'Deductible'    => $quotePlans['deductible'],
                'Coverage'      => $quotePlans['coverage'],
                'TotalTripCost' => $quotePlans['totalTripCost'],
                'State'         => $quotePlans['state'],
                'AddOnUpgrades' => $quotePlans['upgrades'] ?? [],
            ]
        ];

        $quote = $this->generateQuote($travelDetails);


        dd($quote);

        // multiple travellers
        // group them by age group
        // Get product classes for each age group

        // Check if more than one travellers
        // =One
        // Get all plans for the relevant traveller
        // Generate quote for each class
        // >One
        // Group by age group?
        // Get quote for each traveller within each group
    }

    /**
     * Generate quote for each of the travellers
     *
     * @param array $travelDetails
     *
     * @return array
     *
     * @author Ali Shaikh
     */
    private function generateQuote(array $travelDetails): array
    {
        return [
            'Travellers'  => collect($travelDetails['Travellers'])->map(fn($traveller) => [
                'Age'   => $traveller,
                'Plans' =>
                    Plan::where('max_age', '>=', $traveller)
                        ->where('min_age', '<=', $traveller)
                        ->whereHas('product', function ($query) use ($traveller) {
                            $query->where('overall_max_age', '>=', $traveller)
                                  ->where('overall_min_age', '<=', $traveller);
                        })->with('product')
                        ->get()
                        ->keyBy('name')
                        ->map(fn($plan) => [
                            'Product Name'    => $plan->product->name,
                            'Administrator'   => $plan->product->administrator->name,
                            'Underwriter'     => $plan->product->underwriter->name,
                            'Product Segment' => $plan->product->productSegment->name,
                            'Plan Name'       => $plan->name,
                            'Class Name'      => $plan->class_name,
                            'Quote'           => (new $plan->class_name)->quote(
                                array($traveller),
                                $travelDetails['TripDetails']['TripStartDate'],
                                $travelDetails['TripDetails']['TripEndDate'],
                                $travelDetails['TripDetails']['Coverage'],
                                $travelDetails['TripDetails']['Deductible'],
                                $travelDetails['TripDetails']['AddOnUpgrades'],
                                $travelDetails['TripDetails']['TotalTripCost'],
                                $travelDetails['TripDetails']['State']
                            ),
                        ])
            ]),
            'TripDetails' => $travelDetails['TripDetails'],
        ];
    }

    public function verifyAffiliateId($affiliateId)
    {
        if($affiliateId == '1245'){
            return response()->json(array('Success' => 'Contact created successfully.'), 200);
        }

        return response()->json(array('Success' => 'Contact created successfully.'), 500);
    }



    public function displayProducts(Request $request)
    {

        ray($request->post());
       return  [["name"=>"Safe Travels", "price"=>"$82"], ["name"=>"visitor Secure", "price"=>"$105"], ["name"=>"Atlas Premium", "price"=>"$105"] ];

    }



    public function selectPlan(Request $request)
    {
        ray($request->post());
        return response()->json(array('price' => $_POST['price']), 200);
    }



    public function revisePrice(Request $request)
    {
        ray($request->post());
        if($_POST['deductible'] == '0'){
            return response()->json(array('price' => '$82'), 200);
        }
        elseif($_POST['deductible'] == '100'){
            return response()->json(array('price' => '$80'), 200);
        }
        return response()->json(array('price' => '$78'), 200);
    }



    public function submitPaymentForm(Request $request)
    {
        ray($request->post());
    }

}
