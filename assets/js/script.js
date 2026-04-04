(function ($) {
  "use strict";
  // Hero slider
  $(".js-hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 800,
  });

  // $(document).ready(function () {
  //   setTimeout(function () {
  //     $("body").addClass("loaded");
  //     document.getElementById("loader").style.visibility = "hidden";
  //   }, 3000);
  // });

  $(document).ready(function () {
    $("html, body").css({
      overflow: "hidden",
      height: "100%",
    });
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $("#buttonmusic").fadeIn("fast");
    } else {
      $("#buttonmusic").fadeOut("fast");
    }
  });

  /* COUNTDOWN*/
  var $countdown = $(".js-counter");
  var $date = $countdown.attr("data-date");

  $countdown.countdown($date, function (event) {
    $(".js-counter-days").html(event.strftime("%D"));
    $(".js-counter-hours").html(event.strftime("%H"));
    $(".js-counter-minutes").html(event.strftime("%M"));
    $(".js-counter-seconds").html(event.strftime("%S"));
  });

  /* ANIMASI */
  AOS.init({
    disable: false,
    easing: "ease",
    once: false,
    mirror: true,
    duration: 900,
  });

  /* MASONRY GRID */
  var $grid = $(".grid").masonry({
    itemSelector: ".grid-item",
    //columnWidth: '.grid-sizer',
    gutter: ".gutter-sizer",
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });

  jQuery(".story-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(document).ready(function () {
    $(document).bind("contextmenu", function (e) {
      return false;
    });
  });

  var buttonmodal = document.getElementById("btn-open");
  var button = document.getElementById("buttonmusic");
  var audio = document.getElementById("player");
  var videos = document.querySelectorAll("video"); // semua video

  audio.loop = true;

  // flag untuk simpan apakah user sengaja mematikan musik
  var isMusicManuallyPaused = false;

  // fungsi untuk cek apakah ada video yang masih play
  function anyVideoPlaying() {
    return Array.from(videos).some((v) => !v.paused && !v.ended);
  }

  button.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      button.innerHTML = "<ion-icon name='volume-high-outline'></ion-icon>";
      isMusicManuallyPaused = false; // user nyalakan musik
    } else {
      audio.pause();
      button.innerHTML = "<ion-icon name='volume-mute-outline'></ion-icon>";
      isMusicManuallyPaused = true; // user matikan musik
    }
  });

  buttonmodal.addEventListener("click", function () {
    $("html, body").css({
      overflow: "auto",
      height: "auto",
    });

    if (audio.paused && !isMusicManuallyPaused) {
      audio.play();
      button.innerHTML = "<ion-icon name='volume-high-outline'></ion-icon>";
    }
  });

  // kasih event ke semua video
  videos.forEach(function (vid) {
    vid.addEventListener("play", function () {
      audio.pause();
      button.innerHTML = "<ion-icon name='volume-mute-outline'></ion-icon>";
    });

    vid.addEventListener("pause", function () {
      // kalau tidak ada video lain yg masih play & user belum mute manual → musik play lagi
      if (!anyVideoPlaying() && !isMusicManuallyPaused) {
        audio.play();
        button.innerHTML = "<ion-icon name='volume-high-outline'></ion-icon>";
      }
    });
  });
})(jQuery);
