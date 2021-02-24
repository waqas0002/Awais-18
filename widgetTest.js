// ajax();
// function ajax(){
//
//     let myDiv = document.querySelector('.widgets');
//     let affId = myDiv.dataset.affiliateid
//
//     let xhttp = new XMLHttpRequest();
//
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             document.onload = loadWidget();
//         }
//     };
//
//
//     xhttp.open("GET", 'http://www.g1gdev.com/verify-affiliate-id/'+affId, true);
//     xhttp.setRequestHeader('X-PINGOTHER', 'pingpong');
//     xhttp.setRequestHeader('Content-Type', 'application/xml');
//
//     xhttp.send();
// }

loadWidget();
function loadWidget(){

    loadStylesheet();
    const Widget = Object.create({
        create(affiliateId) {
            console.log(affiliateId);
            const wdg = document.createElement("div");
            wdg.classList.add("widgets");
            wdg.innerHTML = `

                    <!--html-->
<div class="mainDiv" id="mainDiv">
<h3>Search Plan</h3>

<div class="container">
  <form>
    <label for="fname">Traveler 1 Age</label>
    <input type="text" name="adults[]" placeholder="Age" class="inputFields formVal">

        <label for="fname">Traveler 2 Age</label>
    <input type="text" name="adults[]" placeholder="Age" class="inputFields formVal">

        <label for="fname">Travel Start Date</label>
    <input type="text" name="tripStart" value="10/30/2020" class="inputFields formVal">

        <label for="fname">Travel End Date</label>
    <input type="text" name="tripEnd" value="11/31/2020" class="inputFields formVal">

    <label for="country">Destination</label>
    <select name="destination" class="inputFields formVal">
        <option value="214">USA</option>
    </select>

    <label for="country">Deductible</label>
    <select name="deductible" class="inputFields formVal">
        <option value="0">$0</option>
        <option value="100">$100</option>
        <option value="250">$250</option>
    </select>

        <label for="country">Coverage</label>
    <select name="coverage" class="inputFields formVal">
        <option value="50000">$50000</option>
        <option value="100000">$100000</option>
        <option value="250000">$250000</option>
    </select>

            <label for="fname">Trip Cost</label>
    <input type="text" name="totalTripCost" value="0" class="inputFields formVal">

            <label for="country">State of Residents</label>
    <select name="state" class="inputFields formVal">
      <option value="australia">Australia</option>
            <option value="">Select State</option>
            <option value="AL">ALABAMA</option>
            <option value="AK">ALASKA</option>
            <option value="AZ">ARIZONA</option>
            <option value="AR">ARKANSAS</option>
    </select>

                <label for="country">AD&D Upgrade</label>
    <select name="upgrades[]" class="inputFields formVal">
        <option value="AD">$50K AD&D</option>
        <option value="KR">$100K Cries Response</option>
        <option value="PL">$100K Personal Liability</option>
    </select>

    <button type="button"  onclick="fetchProducts()" class="submitButton" > button </button>
  </form>
</div>
</div>
                    `;
            return wdg;
        }
    });

    Array.prototype.forEach.call(document.querySelectorAll("#my-div"), ele => {
        const myWidgetInstance = Widget.create(ele.dataset.affiliateid);
        ele.appendChild(myWidgetInstance);

    });
}


function fetchProducts()
{
    let myDiv = document.querySelector('.widgets');
    let affId = myDiv.dataset.affiliateid

    let xhttp = new XMLHttpRequest();

    var elements = document.getElementsByClassName("formVal");
    var formData = new FormData();
    for(var i=0; i<elements.length; i++)
    {
        formData.append(elements[i].name, elements[i].value);
    }


    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // alert(xhttp.responseText);

            // document.getElementById('test').innerHTML="<h2>Changed using innerHTML!!</h2> <p id='testing'>this is a paragraph</p>";

// alert(JSON.parse(xhttp.responseText));


            var prods = JSON.parse(xhttp.responseText);
            // alert(arr[0][1]);
displayProducts(prods);



        }
    };




    xhttp.open("POST", 'http://localhost/display-products/', true);

    xhttp.setRequestHeader("Origin", 'maximum.blog');

    xhttp.send(formData);
}



function displayProducts(prods){

let card = '';
    card += `<div class="card-container">`;
    let b=0;
    prods.forEach( product => {

         card += `<div class="card">
    <img src="https://lh3.googleusercontent.com/sZl-o9TGNYXucrPNHesxaMLXajhcPYqw43zojzHJ-y1yYYeQaNtJMrPUQImKgak3paKOMbEm0Av0e5bKG8_z31m1xVGN8J3x-EIAfgeETIhrLxwsw7xWEGstIuwyKYuHjOLFPCcvqIBY944PWFHBhgSEsVERXJljVEwPTD1xpJHhi5gHieiZcjl-rJ734bFiDxG1GzTxkX5nRc9lkRhtNHMdHDOSswMU-dgp8itMF8lTdEztOYz_bE_8H2FxN5NtCBmeOvxTi7f31wM2zrAE7oOzzeVy1_hYLFAWuXJ0CNqDfc-J-Ui9HY1RILj9Z1nYvEKGGDSTiT3tzysWHO9Vn6rXDFKE9TUGNE1_Z9_EaQ7B_HIU_z7oq2Hmmikl1Ap5t7N_pEI44ZhUGbIVirHKJyvc2LgtJgczCeNEgH7SnvvYBCM-OMWX5MnB949rXYn678iZyz7Q16wjPMevr1IQU4zfdOE2xoJQi8x3FhpD2-3moUoilZRBR5OQi-KII4hRYrEaRFnAiGqYeFz3Rqwx_Yw97kROwh2AnfhT03700AHkFqmYobTXjq0Q3IQpjcYQZ3vbtw=w800-h400-c" alt="Person" class="card__image">
    <p class="card__name">${product["name"]}</p>
    <div class="grid-container">

      <div class="grid-child-posts">
        Price: <span id="${b}">${product["price"]}</span>
      </div>

      <div class="grid-child-followers">

      </div>

    </div>
<form name="myForm" id="myForm${b}">

  <input id="priceVal${b}" name="price" value="${product["price"]}" type="hidden">
  Coverage: <select>
  <option value="50k">50k</option>
  <option value="75k">75k</option>
  <option value="100k">100k</option>
</select>

Deductible: <select id="mySelect${b}" class="formVa" name="deductible" onchange="revisePrice(\`${b}\`)">
  <option value="0">$0</option>
  <option value="100">$100</option>
  <option value="250">$250</option>
</select>



</form>
    <button type="button" class="btn draw-border" onclick="selectPlan(\`${product["name"]}\`, \`${product["price"]}\`, \`${b}\`)">Select</button>

  </div>`

        b = b+1;
    })
    card += `</div>`;
    document.getElementById("mainDiv").innerHTML = card
}



function selectPlan(name, price, b){


    // // pre-fill FormData from the form
    // let formData = new FormData(document.forms.person);
    //
    // // add one more field
    // formData.append("middle", name);


    let myForm = document.getElementById('myForm'+b);
    let formData = new FormData(myForm);



    let xhttp = new XMLHttpRequest();

    // var data = {name:'yogesh',salary: 35000,email: 'yogesh@makitweb.com'};

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // alert(xhttp.responseText);
            let price = JSON.parse(xhttp.response).price;
            displayPaymentForm(price);
        }
    };

    xhttp.open("POST", 'http://localhost/select-plan/', true);

    xhttp.send(formData);


}


function revisePrice(b){

    var price = document.getElementById("mySelect"+b).value;




    var formData = new FormData();

    formData.append("deductible", price);
    let xhttp = new XMLHttpRequest();

    // var data = {name:'yogesh',salary: 35000,email: 'yogesh@makitweb.com'};

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

           let res = xhttp.response;
           let price = JSON.parse(res).price;

            // alert(Object.keys(obj));
            document.getElementById(b).innerHTML = price;
            document.getElementById("priceVal"+b).value = price;
        }
    };

    xhttp.open("POST", 'http://localhost/revise-price/', true);

    xhttp.send(formData);

}


function displayPaymentForm(price){

    let myDiv = document.querySelector('.widgets'); // fetch affiliate id
    let affId = myDiv.dataset.affiliateid


    const form = `<div class="body-div">
<div class="body-text">Write your name in the right fields. Also write your imaginary card number. By clicking CCV field card will turn.</div>
  <form id="checkout">
    <div class="form-container">
      <div class="personal-information">
        <h1>Payment Information</h1>
      </div> <!-- end of personal-information -->

          <input id="column-left" type="text" name="first-name" placeholder="First Name"/>
          <input id="column-right" type="text" name="last-name" placeholder="Surname"/>
          <input id="input-field" type="text" name="number" placeholder="Card Number"/>
          <input id="column-left" type="text" name="expiry" placeholder="MM / YY"/>
          <input id="column-right" type="text" name="cvc" placeholder="CCV"/>

          <div class="card-wrapper"></div>

          <input id="input-field" type="text" name="streetaddress" placeholder="Streed Address"/>
          <input id="column-left" type="text" name="city" placeholder="City"/>
          <input id="column-right" type="text" name="zipcode" placeholder="ZIP code"/>
          <input id="input-field" type="email" name="email" placeholder="Email"/>
          <input type="hidden" name="price" value="${price}" />
          <input type="hidden" name="affiliateId" value="${affId}" />
          <input id="input-button" type="submit" value="Submit" />
          <button id="input-button" type="button" onclick="submitPaymentForm()">Select</button>
          <h4>Total: ${price} USD</h4>

    </form>
  </div>
</div>`;

    document.getElementById("mainDiv").innerHTML = form;
}


function submitPaymentForm(){

    let myForm = document.getElementById('checkout');
    let formData = new FormData(myForm);



    let xhttp = new XMLHttpRequest();

    // var data = {name:'yogesh',salary: 35000,email: 'yogesh@makitweb.com'};

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // alert(xhttp.responseText);

        }
    };

    xhttp.open("POST", 'http://localhost/submit-payment-form/', true);

    xhttp.send(formData);
}





// CSS
function loadStylesheet() {
    var link = document.createElement('link');

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githack.com/waqas0002/Awais-18/main/style.css';

    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(link, entry);
}

