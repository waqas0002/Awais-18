
(function() {

    loadStylesheet();

    const Widget = Object.create({
    create(affiliateId) {
    const wdg = document.createElement("div");
    wdg.classList.add("widgets");
    wdg.innerHTML = `

<!--html-->
<div class="login-box">
  <h2>Search Plans</h2>
  <form action="/search-product" method="get">
    <div class="user-box">
      <input type="text" name="tripStartDate" required="">
      <label>Trip Start Date</label>
    </div>
    <div class="user-box">
      <input type="text" name="tripEndDate" required="">
      <label>Trip End Date</label>
    </div>
    <div class="user-box">
      <input type="text" name="age" required="">
      <input type="hidden" name="affiliateID" value="${ affiliateId }">
      <label>Age</label>
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
    // Load your chat data into UI
    return wdg;
}
});
    const initWhenReady = () => {
    removeEventListener("DOMContentLoaded", initWhenReady);
    Array.prototype.forEach.call(document.querySelectorAll(".widgets"), ele => {
    const myWidgetInstance = Widget.create(ele.dataset.affiliateid);
    ele.appendChild(myWidgetInstance);
});
};
    addEventListener('DOMContentLoaded', initWhenReady);
})();



// CSS
function loadStylesheet() {
    var link = document.createElement('link');

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githack.com/waqas0002/Awais-18/main/style.css';

    var entry = document.getElementsByTagName('script')[0];
    entry.parentNode.insertBefore(link, entry);
}

