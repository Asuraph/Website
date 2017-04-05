
var  mn = $("#siteNavBar");
    mns = ".stickyScroll";
    hdr = $('#banner').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

function count_rabbits() {
    for(var i=1; i<=3; i++) {
        // operator + concatenates strings
        alert("Rabbit "+i+" out of the hat!")
    }
}

//window.addEventListener("hashchange", function() { scrollBy(0,-50) })
$(document).ready(function () {
        
     $("#sideBarNav a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 500, function(){
                window.location.hash = hash;
            });
         }
     });
});

$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
});

function myFunction(navButton){

}