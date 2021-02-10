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
                    <div class="login-box">
                      <h2>Search Plans</h2>
                      <form action="http://localhost/quote" method="get">

                        <div class="user-box">
                          <input type="text" name="adults[]" required="" value="40">
                          <label>Traveler 1 Age</label>
                        </div>

                        <div class="user-box">
                          <input type="text" name="adults[]" value="20">
                          <label>Traveler 2 Age</label>
                        </div>

                        <div class="user-box">
                          <input type="text" name="tripStart" required="" value="10/30/2021">
                          <label>Travel Start Date</label>
                        </div>

                        <div class="user-box">
                          <input type="text" name="tripEnd" required="" value="11/30/2021">
                          <label>Travel End Date</label>
                        </div>

                        <div class="user-box">
                          <input type="text" name="destination" required="" value="214" placeholder="USA">
                          <label>Destination</label>
                        </div>

                        <div class="user-box">
                          <input type="text" name="deductible" value="0">
                          <label>Deductible</label>
                        </div>

                        <div class="user-box">
                          <input type="text" name="coverage" value="50000">
                          <label>Coverage</label>
                        </div>

                        <div class="user-box">
                          <input type="text" name="totalTripCost" value="0">
                          <label>Total Trip Cost</label>
                        </div>

                        <div class="user-box">
                          <input type="text" name="state" value="NY">
                          <input type="hidden" name="affiliateID" value="${ affiliateId }">
                          <label>State of Residents</label>
                        </div>

                        <div class="user-box">
                           <select name="upgrades[]"  multiple="multiple">
                                <option value="AD">$50K AD&D</option>
                                <option value="KR">$100K Cries Response</option>
                                <option value="PL">$100K Personal Liability</option>
                            </select>
                        </div>

                        <a href="#">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Submit
                        </a>
                        <br><br>
                        <input type="submit" value="Search">
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


// CSS
function loadStylesheet() {
    var link = document.createElement('link');

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githack.com/waqas0002/Awais-18/main/style.css';

    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(link, entry);
}

