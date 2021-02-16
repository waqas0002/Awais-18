ajax();
function ajax(){

    let myDiv = document.querySelector('.widgets');
    let affId = myDiv.dataset.affiliateid

    let xhttp = new XMLHttpRequest();




    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.onload = loadWidget();
        }
    };




    xhttp.open("GET", 'http://www.g1gdev.com/verify-affiliate-id/'+affId, true);

    xhttp.send();
}


function loadWidget(){

    loadStylesheet();
    const Widget = Object.create({
        create(affiliateId) {
            console.log(affiliateId);
            const wdg = document.createElement("div");
            wdg.classList.add("widgets");
            wdg.innerHTML = `

                    <!--html-->

                    <div class="login-box">
                      <h2>Search Plans</h2>
                 <form  id="register_form">
  <input class='formVal' type="text" name="age" placeholder="Age">
  <input class='formVal' type="text" name="tripStart" placeholder="Trip Start">
  <input class='formVal' type="text" name="tripEnd" placeholder="Trip End">

  <button type="button"  onclick="myFunction()"> button </button>
</form>
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


function myFunction()
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
products(prods);



        }
    };




    xhttp.open("POST", 'http://www.g1gdev.com/abc/', true);

    xhttp.setRequestHeader("Origin", 'http://www.g1gdev.com/abc');

    xhttp.send(formData);
}



function products(prods){

    // document.getElementById("test").innerHTML += index + ":" + item + "<br>";

    // document.getElementById('test').innerHTML="<h2> item </h2><br>";

    // for(var key in arr)
    // {
    //     var value = arr[key];
    //     // document.write(key + " = " + value + '<br>');
    //     document.getElementById("test").innerHTML += key["1"] + ":" + value + "<br>";
    // }

    /////////////////////////////////////////////   if array
    // arr.forEach(function each(item) {
    //     if (Array.isArray(item)) {
    //
    //         alert(item["1"]);
    //         document.getElementById("test").innerHTML = item["1"]  +  "<br>";
    //
    //     } else {
    //         console.log(item);
    //     }
    // });

    prods.forEach( product => {

        const card = `<div class="center">
  <div class="property-card">
    <a href="#">
      <div class="property-image">
        <div class="property-image-title">
          <!-- Optional <h5>Card Title</h5> If you want it, turn on the CSS also. -->
        </div>
      </div></a>
    <div class="property-description">
      <h5> ${product["name"]} </h5>
      <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
      <h4>Price: ${product["price"]}</h4><br>
    </div>

      <div class="property-social-icons">
        <!-- I would usually put multipe divs inside here set to flex. Some people might use Ul li. Multiple Solutions -->
        <button type="button"  onclick="selectPlan(\`${product["name"]}\`, \`${product["price"]}\`)"> Select </button>
      </div>
    </a>
  </div>
</div>`
        const ele = document.createElement('div');
        ele.innerHTML = card;

        document.querySelector('.login-box').appendChild(ele.firstChild);
    })

}



function selectPlan(name, price){
    alert(name+" "+price);

    let xhttp = new XMLHttpRequest();

    // var data = {name:'yogesh',salary: 35000,email: 'yogesh@makitweb.com'};

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            // alert(xhttp.responseText);

        }
    };

    xhttp.open("POST", 'http://localhost/select-plan/', true);

    xhttp.send();


}

// function myFunction()
// {
//     var elements = document.getElementsByClassName("formVal");
//     var formData = new FormData();
//     for(var i=0; i<elements.length; i++)
//     {
//         formData.append(elements[i].name, elements[i].value);
//     }
//     var xmlHttp = new XMLHttpRequest();
//
//     xmlHttp.onreadystatechange = function()
//     {
//         if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
//         {
//             alert(xmlHttp.responseText);
//         }
//     }
//     xmlHttp.open("get", "http://localhost/abc/");
//     xmlHttp.send(formData);
// }




// CSS
function loadStylesheet() {
    var link = document.createElement('link');

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githack.com/waqas0002/Awais-18/main/style.css';

    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(link, entry);
}

