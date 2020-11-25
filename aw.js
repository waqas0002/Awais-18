
// var html =
//     '<div>' +
//     '   <h3>Mikon E90 Digital SLR</h3>' +
//     '   <img src="http://camerastork.com/img/1337-small.jpg"/>'
// '   <p>$599.99</p>' +
// '   <p>4.3/5.0 &bull; 176 Reviews</p>' +
// '</div>';
// var div = document.createElement('div');
// div.innerHTML = html;
//
//
// var id="1234";
// // var appendTo = document.getElementById('stork-widget');
// // appendTo.parentNode.insertBefore(div, appendTo);
// function appendWidgetMarkup(id, html) {
//     console.log(id);
//     jQuery('script[data-stork-widget="' + id + '"]')
//         .removeAttr('data-stork-widget')
//         .before(html);
// }
// appendWidgetMarkup(id, html);


jQuery('[data-stork-product]').each(function() {
    var location = jQuery(this);
    var id = location.attr('data-stork-product');

    loadStylesheet();
    var html =
    '        <form  action="/contact-form" method="GET">\n' +
        '            <div class="form-group">\n' +
        '                <input type="text" name="name" class="form-control" placeholder="Enter Name" id="name">' +
    '                    <input type="hidden" name="id"  id="id" value="'+id+'">\n' +
        '            </div>\n' +
        '\n' +
        '\n' +
        '            <div class="form-group">\n' +
        '                <button class="btn btn-success" id="submit">Submit</button>\n' +
        '            </div>\n' +
        '        </form>' +
        '<h1 class="aw">jkjkhj</h1>';
    var div = document.createElement('div');
    div.innerHTML = html;



    appendWidgetMarkup(id, html);

});

function appendWidgetMarkup(id, html) {
    console.log(id);



    jQuery('script[data-stork-widget="' + id + '"]')
        .removeAttr('data-stork-widget')
        .before(html);
}

function loadStylesheet() {
    var link = document.createElement('link');

    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.src = 'js/style.css';
console.log("iii");
    var entry = document.getElementsByTagName('link')[0];
    entry.parentNode.insertBefore(link, entry);
}















$('#contactForm').on('submit',function(event){
    event.preventDefault();

    let name = $('#name').val();

    $.ajax({
        url: "/contact-form",
        type:"GET",
        data:{
            "_token": "{{ csrf_token() }}",
            name:name,
        },
        success:function(response){
            location.href = "https://www.g1g.com";
            // console.log(response);
        },
    });
});
