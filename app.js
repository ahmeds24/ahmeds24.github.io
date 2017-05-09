$(document).ready(function(){
  setBindings();
});

function setBindings() {
  $("nav a").click(function(e){
    e.preventDefault();
    var sectionID = e.currentTarget.id + "Section";

       $("html body").animate({
         scrollTop: $("#" + sectionID).offset().top

       }, 1000)
  })
}



$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.bioBox, .bioBox2, #title, .percentBox').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},2000);

            }

        });

    });

});



$(document).ready(function(){
  $('.demo-1').percentcircle({
    fillColor: '#E1220C',
  });

  $('.demo-2').percentcircle({
  animate : true,
  diameter : 100,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  percentSize: '18px',
  percentWeight: 'normal'
  });

  $('.demo-3').percentcircle({
  animate : true,
  diameter : 100,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  fillColor: '#528637',
  percentSize: '18px',
  percentWeight: 'normal'
  });

  $('.demo-4').percentcircle({
  animate : true,
  diameter : 100,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  fillColor: '#000000',
  percentSize: '18px',
  percentWeight: 'normal'
  });

  $('.demo-5').percentcircle({
  animate : true,
  diameter : 100,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  fillColor: '#0A2195',
  percentSize: '18px',
  percentWeight: '20px'
  });

  $('.demo-6').percentcircle({
  animate : true,
  diameter : 100,
  guage: 10,
  coverBg: '#fff',
  bgColor: '#efefef',
  fillColor: '#0A0454',
  percentSize: '18px',
  percentWeight: 'normal'
  });

  $('.demo-7').percentcircle({
    fillColor: '#FA4F00',
  });

  $('.demo-8').percentcircle({
    fillColor: '#000000',
  });

  $('.demo-9').percentcircle({
    fillColor: '#CB3C3C',
  });

  $('.demo-10').percentcircle({
    fillColor: '#0A0454',
  });

  $('.demo-11').percentcircle({
    fillColor: '#E1220C',
  });

  $('.demo-12').percentcircle({
    fillColor: '#E1220C',
  });

});


$(document).ready(function(){
     $(".skillBox").draggable({revert: true, revertDuration: 2000});
 });
