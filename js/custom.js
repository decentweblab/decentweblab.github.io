$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 50){
      $(".navbar").addClass("sticky-header");
    }else{
      $(".navbar").removeClass("sticky-header");
    }
  });
});


$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find("i:last-child")
    .toggleClass("fa-minus fa-plus");
});


$('#testimonilas').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:2
          }
      }

});
$('#team').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }

});
$('#recentblogs').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1,
              margin:10,
          },
          600:{
              items:2,
              margin:10,
          },
          1000:{
              items:3
          }
      }

});
$(".video-modal").click(function () {
  var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-video"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&showinfo=0&html5=1&autoplay=1";
  $(theModal + ' iframe').attr('src', videoSRCauto);
  $(theModal).on('hidden.bs.modal', function () {
    $(theModal + ' iframe').attr('src', videoSRC);
  });
});



$(document).ready(function() {
    $(document).ready(function () {
        //shared variable
        var max = 0,
            $els = $('.small_pic img');
        $els.each(function () {
            max = Math.max($(this).height('261px'), max); //use height method from jQuery
        });

        $els.height(max)
    });
  });

$(document).ready(function() {
    $(document).ready(function () {
        //shared variable
        var max = 0,
            $els = $('.big_pic img');
        $els.each(function () {
            max = Math.max($(this).height('389px'), max); //use height method from jQuery
        });

        $els.height(max)
    });
  });

$(document).on('click', '[data-toggle="lightbox"]', 
  function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$(document).ready(function(){
  $(".gallery_pic").slice(0, 6).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".gallery_pic:hidden").slice(0, 6).slideDown();
    if($(".gallery_pic:hidden").length == 0) {
      $("#loadMore").text("No Gallery Picture").addClass("noContent");
    }
  });
  
})


$(document).ready(function(){
  $(".moreBox").slice(0, 3).show();
  $("#loadMore1").on("click", function(e){
    e.preventDefault();
    $(".moreBox:hidden").slice(0, 6).slideDown();
    if($(".moreBox:hidden").length == 0) {
      $("#loadMore1").text("No Testimonials").addClass("noContent");
    }
  });
  
})

$(document).ready(function(){
  $(".Eventslist").slice(0, 9).show();
  $("#loadMore2").on("click", function(e){
    e.preventDefault();
    $(".Eventslist:hidden").slice(0, 3).slideDown();
    if($(".Eventslist:hidden").length == 0) {
      $("#loadMore2").text("No Events").addClass("noContent");
    }
  });
  
})

  $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});



//new WOW().init();

$('#testimonials').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }

});


