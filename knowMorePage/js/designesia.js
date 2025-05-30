jQuery(document).ready(function () {
  "use strict";
  var de_header_style = 1,
    de_header_layout = 1,
    de_header_color = 1,
    de_header_sticky = 1,
    de_header_mobile_sticky = 2,
    de_menu_separator = 1,
    de_color_style = 1,
    de_font_style = 1,
    mobile_menu_show = 0,
    grid_size = 10,
    col = 4,
    tmp_col = col,
    sr = 466 / 700,
    $container = jQuery("#gallery"),
    v_count = "0";
  2 == de_color_style && $("body").addClass("de_light"),
    2 == de_font_style &&
      $("head").append(
        '<link rel="stylesheet" href="css/font-style-2.css" type="text/css" />'
      ),
    2 == de_header_style && $("header").addClass("transparent"),
    1 == de_menu_separator
      ? $("#mainmenu").addClass("dotted-separator")
      : 2 == de_menu_separator
      ? $("#mainmenu").addClass("line-separator")
      : 3 == de_menu_separator
      ? $("#mainmenu").addClass("circle-separator")
      : 4 == de_menu_separator
      ? $("#mainmenu").addClass("square-separator")
      : 5 == de_menu_separator
      ? $("#mainmenu").addClass("plus-separator")
      : 6 == de_menu_separator
      ? $("#mainmenu").addClass("strip-separator")
      : 0 == de_menu_separator && $("#mainmenu").addClass("no-separator"),
    2 == de_header_layout &&
      ($("header").addClass("de_header_2"), $("header .info").show()),
    2 == de_header_color && $("header").addClass("header-light"),
    2 == de_header_sticky && $("header").addClass("header-scroll"),
    1 == de_header_mobile_sticky &&
      $("header").addClass("header-mobile-sticky");
  var startWindowScroll = 0;
  function custom_bg() {
    $("div,section").css("background-color", function () {
      return jQuery(this).data("bgcolor");
    }),
      $("div,section").css("background", function () {
        return jQuery(this).data("bgimage");
      }),
      $("div,section").css("background-size", function () {
        return "cover";
      });
  }
  function de_progress() {
    jQuery(".de-progress").each(function () {
      var e = jQuery(this).offset().top,
        t = jQuery(this).find(".progress-bar").attr("data-value");
      e < jQuery(window).scrollTop() + 550 &&
        jQuery(this).find(".progress-bar").animate({ width: t }, "slow"),
        jQuery(this)
          .find(".value")
          .text(jQuery(this).find(".progress-bar").attr("data-value"));
    });
  }
  function init_de() {
    var e = jQuery(window);
    jQuery('section[data-type="background"]').each(function () {
      var t = jQuery(this);
      jQuery(window).scroll(function () {
        enquire.register("screen and (min-width: 993px)", {
          match: function () {
            var i = "50% " + -e.scrollTop() / t.data("speed") + "px";
            t.css({ backgroundPosition: i });
          },
        });
      }),
        document.createElement("article"),
        document.createElement("section");
    }),
      jQuery(".overlay").fadeTo(1, 0),
      jQuery(".item .picframe")
        .on("mouseenter", function () {
          var e = jQuery(this).find("img").css("width"),
            t = jQuery(this).find("img").css("height");
          jQuery(this).parent().find(".overlay").width(e),
            jQuery(this).parent().find(".overlay").height(t),
            jQuery(this).parent().find(".overlay").stop(!0).fadeTo(300, 0.9);
          var i,
            a = jQuery(this).find("img").css("height");
          (i = a.substring(0, a.length - 2) / 2 - 10),
            jQuery(this)
              .parent()
              .find(".pf_text")
              .stop(!0)
              .animate({ "margin-top": i }, 300, "easeOutCubic");
        })
        .on("mouseleave", function () {
          var e,
            t = jQuery(this).find("img").css("height");
          (e = t.substring(0, t.length - 2) / 2 - 10),
            jQuery(this)
              .parent()
              .find(".pf_text")
              .stop(!0)
              .animate({ "margin-top": e - 30 }, 300, "easeOutCubic"),
            jQuery(this).parent().find(".overlay").stop(!0).fadeTo(300, 0);
        }),
      jQuery(".grid.border").css("padding-top", grid_size),
      jQuery(".grid.border").css("padding-left", grid_size),
      jQuery(".overlay").fadeTo(1, 0);
  }
  function grid_gallery() {
    jQuery(".grid-item").each(function () {
      var this_col = Number(jQuery(this).parent().attr("data-col")),
        this_gridspace = Number(jQuery(this).parent().attr("data-gridspace")),
        this_ratio = eval($(this).parent().attr("data-ratio"));
      jQuery(this).parent().css("padding-left", this_gridspace);
      var w =
          ($(document).width() - (this_gridspace * this_col + 1)) / this_col -
          this_gridspace / this_col,
        gi = $(this),
        h = w * this_ratio;
      gi.css("width", w),
        gi.css("height", h),
        gi.find(".pf_title").css("margin-top", h / 2 - 10),
        gi.css("margin-right", this_gridspace),
        gi.css("margin-bottom", this_gridspace),
        gi.hasClass("large") &&
          ($(this).css("width", 2 * w + this_gridspace),
          $(this).css("height", 2 * h + this_gridspace)),
        gi.hasClass("large-width") &&
          ($(this).css("width", 2 * w + this_gridspace),
          $(this).css("height", h)),
        gi.hasClass("large-height") &&
          ($(this).css("height", 2 * h + this_gridspace),
          gi.find(".pf_title").css("margin-top", h - 20));
    });
  }
  function splashRotator() {
    var e = jQuery("#jSplash").children(".selected"),
      t = jQuery(e).next();
    0 != jQuery(t).length
      ? jQuery(t).addClass("selected")
      : (jQuery("#jSplash")
          .children("section:first-child")
          .addClass("selected"),
        (t = jQuery("#jSplash").children("section:first-child"))),
      jQuery(e)
        .removeClass("selected")
        .fadeOut(100, function () {
          jQuery(t).fadeIn(100);
        });
  }
  function video_autosize() {
    jQuery(".de-video-container").each(function () {
      var e = jQuery(this).css("height"),
        t = jQuery(this).find(".de-video-content").css("height"),
        i = (e.substring(0, e.length - 2) - t.substring(0, t.length - 2)) / 2;
      jQuery(this).find(".de-video-overlay").css("height", e),
        jQuery(this)
          .find(".de-video-content")
          .animate({ "margin-top": i }, "fast");
    });
  }
  function init() {
    var e = jQuery("#de-sidebar").css("height"),
      t = jQuery(window).innerHeight(),
      i = parseInt(e) - parseInt(t),
      a = parseInt(jQuery("header").height(), 10),
      r = parseInt(jQuery(window).height(), 10) - a,
      s = window.matchMedia("(min-width: 993px)");
    window.matchMedia("(min-width: 768px)");
    window.addEventListener("scroll", function (a) {
      if (s.matches) {
        var r = window.pageYOffset || document.documentElement.scrollTop,
          o = document.querySelector("header");
        r > 100
          ? classie.add(o, "smaller")
          : classie.has(o, "smaller") && classie.remove(o, "smaller");
      }
      if (s.matches) {
        jQuery("header").addClass("clone", 1e3, "easeOutBounce");
        var n = $(document),
          l = 0;
        n.scrollTop() >= 50 && 0 == l
          ? (jQuery("header.autoshow").removeClass("scrollOff"),
            jQuery("header.autoshow").addClass("scrollOn"),
            (l = 1))
          : (jQuery("header.autoshow").removeClass("scrollOn"),
            jQuery("header.autoshow").addClass("scrollOff"),
            (l = 0));
        var u = parseInt(jQuery("header").height(), 10),
          c = parseInt(jQuery(window).height(), 10) - u,
          d = c / 2;
        n.scrollTop() >= c
          ? (jQuery(".header-bottom").css("position", "fixed"),
            jQuery(".header-bottom").css("top", "0"))
          : n.scrollTop() <= c &&
            (jQuery(".header-bottom").css("position", "absolute"),
            jQuery(".header-bottom").css("top", c)),
          n.scrollTop() >= d
            ? (jQuery(".header-center").css("position", "fixed"),
              jQuery(".header-center").css("top", "0"))
            : n.scrollTop() <= d &&
              (jQuery(".header-center").css("position", "absolute"),
              jQuery(".header-center").css("top", d)),
          jQuery("header").hasClass("side-header") &&
            (jQuery(document).scrollTop() >= i
              ? (jQuery("#de-sidebar").css("position", "fixed"),
                parseInt(e) > parseInt(t) &&
                  jQuery("#de-sidebar").css("top", -i),
                jQuery("#main").addClass("col-md-offset-3"))
              : (jQuery("#de-sidebar").css("position", "absolute "),
                parseInt(e) > parseInt(t) &&
                  jQuery("#de-sidebar").css("top", 0),
                jQuery("#main").removeClass("col-md-offset-3")));
      }
    }),
      s.matches &&
        (jQuery(".header-bottom,.header-center").css("position", "absolute"),
        jQuery(".header-bottom,.header-center").css("top", r));
  }
  function centery() {
    var e = jQuery(window).innerHeight();
    jQuery("#homepage #content.content-overlay").css("margin-top", e),
      jQuery(".full-height").css("height", e);
    var t = jQuery(".center-y").css("height");
    (t = parseInt(t, 10)),
      jQuery(".center-y").css("margin-top", (e - t) / 2 - 90),
      jQuery(".full-height .de-video-container").css("height", e);
  }
  function sequence() {
    var e = jQuery(".sequence .sq-item .picframe"),
      t = e.length;
    e.addClass("zoomIn");
    for (var i = 0; i <= t; i++) {
      jQuery(".sequence > .sq-item:eq(" + i + ") .picframe").attr(
        "data-wow-delay",
        i / 15 + "s"
      );
    }
  }
  function demo() {
    $("#switcher").css("display", "block"),
      jQuery(".bg1").click(function () {
        jQuery("#colors").attr("href", "css/colors/aqua.css");
      }),
      jQuery(".bg2").click(function () {
        jQuery("#colors").attr("href", "css/colors/blue.css");
      }),
      jQuery(".bg3").click(function () {
        jQuery("#colors").attr("href", "css/colors/green.css");
      }),
      jQuery(".bg4").click(function () {
        jQuery("#colors").attr("href", "css/colors/grey.css");
      }),
      jQuery(".bg5").click(function () {
        jQuery("#colors").attr("href", "css/colors/orange.css");
      }),
      jQuery(".bg6").click(function () {
        jQuery("#colors").attr("href", "css/colors/pink.css");
      }),
      jQuery(".bg7").click(function () {
        jQuery("#colors").attr("href", "css/colors/purple.css");
      }),
      jQuery(".bg8").click(function () {
        jQuery("#colors").attr("href", "css/colors/red.css");
      }),
      jQuery(".bg9").click(function () {
        jQuery("#colors").attr("href", "css/colors/yellow.css");
      }),
      jQuery(".bg10").click(function () {
        jQuery("#colors").attr("href", "css/colors/lime.css");
      }),
      jQuery(".custom-show").hide(),
      jQuery(".custom-close").click(function () {
        jQuery(this).hide(),
          jQuery(".custom-show").show(),
          jQuery("#switcher").animate({ left: "+=120px" }, "medium");
      }),
      jQuery(".custom-show").click(function () {
        jQuery(this).hide(),
          jQuery(".custom-close").show(),
          jQuery(this).parent().animate({ left: "-=120px" }, "medium");
      }),
      jQuery("#de-header-style").on("change", function () {
        var e = this.value;
        "opt-1" == e
          ? $("header").removeClass("transparent")
          : "opt-2" == e && $("header").addClass("transparent");
      }),
      jQuery("#de-header-color").on("change", function () {
        var e = this.value;
        "opt-1" == e
          ? $("header").removeClass("header-light")
          : "opt-2" == e && $("header").addClass("header-light");
      }),
      jQuery("#de-header-layout").on("change", function () {
        var e = this.value;
        "opt-1" == e
          ? ($("header").removeClass("de_header_2"), $("header .info").hide())
          : "opt-2" == e &&
            ($("header").addClass("de_header_2"), $("header .info").show());
      }),
      jQuery("#de-menu").on("change", function () {
        $("#mainmenu").removeClass("no-separator"),
          $("#mainmenu").removeClass("line-separator"),
          $("#mainmenu").removeClass("circle-separator"),
          $("#mainmenu").removeClass("square-separator"),
          $("#mainmenu").removeClass("plus-separator"),
          $("#mainmenu").removeClass("strip-separator");
        var e = this.value;
        "opt-1" == e
          ? ($("#mainmenu").removeClass("no-separator"),
            $("#mainmenu").removeClass("line-separator"))
          : "opt-2" == e
          ? $("#mainmenu").addClass("line-separator")
          : "opt-3" == e
          ? $("#mainmenu").addClass("circle-separator")
          : "opt-4" == e
          ? $("#mainmenu").addClass("square-separator")
          : "opt-5" == e
          ? $("#mainmenu").addClass("plus-separator")
          : "opt-6" == e
          ? $("#mainmenu").addClass("strip-separator")
          : "opt-0" == e && $("#mainmenu").addClass("no-separator");
      });
  }
  if (
    (jQuery(".simple-ajax-popup-align-top").magnificPopup({
      type: "ajax",
      fixedContentPos: !0,
      fixedBgPos: !0,
      overflowY: "auto",
      callbacks: {
        beforeOpen: function () {
          startWindowScroll = $(window).scrollTop();
        },
        open: function () {
          $(".mfp-content").height() < $(window).height() &&
            $("body").on("touchmove", function (e) {
              e.preventDefault();
            });
        },
        close: function () {
          $(window).scrollTop(startWindowScroll), $("body").off("touchmove");
        },
      },
    }),
    jQuery(".simple-ajax-popup").magnificPopup({ type: "ajax" }),
    jQuery(".zoom-gallery").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: !1,
      closeBtnInside: !1,
      mainClass: "mfp-with-zoom mfp-img-mobile",
      image: {
        verticalFit: !0,
        titleSrc: function (e) {
          return e.el.attr("title");
        },
      },
      gallery: { enabled: !0 },
      zoom: {
        enabled: !0,
        duration: 300,
        opener: function (e) {
          return e.find("img");
        },
      },
    }),
    jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    }),
    $(".image-popup-vertical-fit").magnificPopup({
      type: "image",
      closeOnContentClick: !0,
      mainClass: "mfp-img-mobile",
      image: { verticalFit: !0 },
    }),
    $(".image-popup-fit-width").magnificPopup({
      type: "image",
      closeOnContentClick: !0,
      image: { verticalFit: !1 },
    }),
    $(".image-popup-no-margins").magnificPopup({
      type: "image",
      closeOnContentClick: !0,
      closeBtnInside: !1,
      fixedContentPos: !0,
      mainClass: "mfp-no-margins mfp-with-zoom",
      image: { verticalFit: !0 },
      zoom: { enabled: !0, duration: 300 },
    }),
    $(window).scroll(function () {
      $(window).width() > 768 && $(this).scrollTop() > 300
        ? $(".pricelistdiv12").slideUp(500)
        : $(".pricelistdiv12").slideDown(500);
    }),
    $(".top_form h2").click(function () {
      $(".pricelistdiv12").slideToggle(),
        $(".mybtn").toggleClass("fa-plus-circle"),
        $(".mybtn").toggleClass("fa-minus-circle");
    }),
    $(".image-popup-gallery").magnificPopup({
      type: "image",
      closeOnContentClick: !1,
      closeBtnInside: !1,
      mainClass: "mfp-with-zoom mfp-img-mobile",
      image: {
        verticalFit: !0,
        titleSrc: function (e) {
          return e.el.attr("title");
        },
      },
      gallery: { enabled: !0 },
    }),
    new WOW().init(),
    init_de(),
    de_progress(),
    grid_gallery(),
    jQuery("body").jpreLoader(
      {
        splashID: "#jSplash",
        splashFunction: function () {
          jQuery("#jSplash").children("section").not(".selected").hide(),
            jQuery("#jSplash").hide().fadeIn(800),
            init_de();
          setInterval(function () {
            splashRotator();
          }, 1500);
        },
      },
      function () {
        clearInterval(),
          jQuery(function () {
            var e = document.URL;
            if (-1 != e.indexOf("#")) {
              var t = e.substring(e.indexOf("#") + 1);
              return (
                jQuery("html, body").animate(
                  { scrollTop: jQuery("#" + t).offset().top - 70 },
                  200
                ),
                !1
              );
            }
          });
      }
    ),
    (window.onresize = function (e) {
      enquire.register("screen and (min-width: 993px)", {
        match: function () {
          jQuery("#mainmenu").show(),
            jQuery("header").removeClass("height-auto"),
            (mobile_menu_show = 1),
            (col = tmp_col);
        },
        unmatch: function () {
          jQuery("#mainmenu").hide(),
            (mobile_menu_show = 1),
            jQuery("#menu-btn").show(),
            (col = 2);
        },
      }),
        window.matchMedia("(max-width: 993px)").matches &&
          (jQuery(".header-bottom,.header-center").css("display", "block"),
          jQuery(".header-bottom,.header-center").css("top", "0")),
        init(),
        video_autosize(),
        centery(),
        $("header").removeClass("smaller"),
        $("header").removeClass("logo-smaller"),
        $("header").removeClass("clone"),
        jQuery("#menu-btn").removeClass("clicked"),
        jQuery("#menu-btn").addClass("unclick"),
        grid_gallery();
    }),
    (window.onload = init()),
    jQuery("#gallery-carousel-2").owlCarousel({
      center: !1,
      items: 2,
      loop: !0,
      dots: !1,
      margin: 0,
      responsive: { 1000: { items: 2 }, 600: { items: 2 }, 0: { items: 1 } },
    }),
    jQuery("#gallery-carousel-3").owlCarousel({
      center: !1,
      items: 3,
      loop: !0,
      dots: !1,
      margin: 0,
      responsive: { 1000: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } },
    }),
    jQuery("#change1").owlCarousel({
      items: 4,
      loop: !0,
      dots: !1,
      margin: 30,
      autoplay: !0,
      autoplayTimeout: 3e3,
      responsive: { 1000: { items: 4 }, 600: { items: 2 }, 0: { items: 1 } },
    }),
    jQuery("#gallery-carousel-4").owlCarousel({
      center: !1,
      items: 4,
      loop: !0,
      dots: !1,
      margin: 0,
      responsive: { 1000: { items: 4 }, 600: { items: 2 }, 0: { items: 1 } },
    }),
    jQuery(".carousel-gallery").owlCarousel({
      items: 4,
      navigation: !1,
      pagination: !1,
    }),
    jQuery("#blog-carousel").owlCarousel({
      center: !1,
      items: 2,
      loop: !0,
      dots: !0,
      margin: 30,
      responsive: { 1000: { items: 2 }, 600: { items: 1 }, 0: { items: 1 } },
    }),
    jQuery(".carousel-4-center-dots").owlCarousel({
      center: !0,
      items: 4,
      loop: !0,
      dots: !0,
      margin: 30,
      responsive: { 1000: { items: 4 }, 600: { items: 2 }, 0: { items: 1 } },
    }),
    jQuery("#testimonial-carousel").owlCarousel({
      center: !1,
      items: 3,
      loop: !0,
      dots: !0,
      margin: 30,
      autoplay: !0,
      autoplayTimeout: 3e3,
      responsive: { 1000: { items: 3 }, 600: { items: 1 }, 0: { items: 1 } },
    }),
    jQuery("#sliderGallery").owlCarousel({
      center: !1,
      items: 3,
      loop: !0,
      dots: !0,
      margin: 30,
      autoplay: !0,
      autoplayTimeout: 3e3,
      responsive: { 1000: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } },
    }),
    jQuery("#property-1").owlCarousel({
      center: !1,
      items: 3,
      loop: !0,
      dots: !0,
      margin: 30,
      responsive: { 1000: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } },
    }),
    jQuery("#propertyNew").owlCarousel({
      center: !1,
      items: 6,
      loop: !0,
      dots: !0,
      margin: 30,
      responsive: { 1000: { items: 6 }, 600: { items: 3 }, 0: { items: 2 } },
    }),
    jQuery("#galleryNew").owlCarousel({
      center: !1,
      items: 4,
      loop: !0,
      dots: !0,
      margin: 30,
      autoPlay: !0,
      responsive: { 1000: { items: 4 }, 600: { items: 2 }, 0: { items: 1 } },
    }),
    jQuery("#partners").owlCarousel({
      center: !1,
      items: 7,
      loop: !0,
      dots: !0,
      margin: 30,
      autoPlay: !0,
      responsive: { 1000: { items: 7 }, 600: { items: 4 }, 0: { items: 2 } },
    }),
    jQuery("#testimonial-carousel-single").owlCarousel({
      items: 1,
      autoplay: !0,
      autoplayTimeout: 6e3,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      loop: !0,
      dots: !0,
      mouseDrag: !1,
      touchDrag: !1,
      margin: 0,
    }),
    jQuery("#logo-carousel").owlCarousel({
      items: 6,
      loop: !0,
      dots: !1,
      autoPlay: !0,
    }),
    jQuery("#contact-carousel").owlCarousel({
      items: 1,
      singleItem: !0,
      navigation: !1,
      pagination: !1,
      autoPlay: !0,
    }),
    jQuery("#text-carousel").owlCarousel({
      items: 1,
      autoplay: !0,
      autoplayTimeout: 4e3,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      loop: !0,
      dots: !1,
      mouseDrag: !1,
      touchDrag: !1,
      margin: 0,
    }),
    jQuery("#single-carousel").owlCarousel({
      items: 1,
      autoplay: !0,
      autoplayTimeout: 4e3,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      loop: !0,
      dots: !1,
      mouseDrag: !1,
      touchDrag: !1,
      margin: 0,
    }),
    jQuery(".carousel-single-navi").owlCarousel({
      items: 1,
      singleItem: !0,
      navigation: !0,
      pagination: !1,
      mouseDrag: !1,
      touchDrag: !1,
      transitionStyle: "fade",
    }),
    jQuery(".blog-slide").owlCarousel({
      items: 1,
      singleItem: !0,
      navigation: !1,
      pagination: !1,
      autoPlay: !1,
    }),
    $(".next").on("click", function () {
      $(this).parent().parent().find(".blog-slide").trigger("owl.next");
    }),
    $(".prev").on("click", function () {
      $(this).parent().parent().find(".blog-slide").trigger("owl.prev");
    }),
    jQuery(".owl-custom-nav").each(function () {
      var e = $(".owl-custom-nav").next(),
        t = parseInt(e.css("height"), 10);
      $(this).css("margin-top", t / 2 - 10),
        e.owlCarousel(),
        $(".btn-next").on("click", function () {
          e.trigger("next.owl.carousel");
        }),
        $(".btn-prev").on("click", function () {
          e.trigger("prev.owl.carousel");
        });
    }),
    centery(),
    jQuery(".blog-list")
      .on("mouseenter", function () {
        var e, t;
        if (void 0 !== e) {
          (e = jQuery(this).find(".blog-slide").css("height")),
            (t = jQuery(this).find(".blog-slide").css("width"));
          var i = e.substring(0, e.length - 2) / 2 - 40;
          jQuery(this).find(".owl-arrow").css("margin-top", i),
            jQuery(this).find(".owl-arrow").css("width", t),
            jQuery(this).find(".owl-arrow").fadeTo(150, 1);
        }
      })
      .on("mouseleave", function () {
        jQuery(this).find(".owl-arrow").fadeTo(150, 0);
      }),
    jQuery("#logo-carousel img")
      .on("mouseenter", function () {
        jQuery(this).fadeTo(150, 0.5);
      })
      .on("mouseleave", function () {
        jQuery(this).fadeTo(150, 1);
      }),
    sequence(),
    jQuery(window).load(function () {
      video_autosize(),
        grid_gallery(),
        custom_bg(),
        jQuery(".timer").each(function () {
          var e = jQuery(this).offset().top,
            t = jQuery(window).scrollTop();
          e < t + 500 &&
            "0" == v_count &&
            jQuery(function (e) {
              jQuery(".timer").each(function (t) {
                v_count = "1";
                var i = jQuery(this);
                (t = e.extend({}, t || {}, i.data("countToOptions") || {})),
                  i.countTo(t);
              });
            });
        }),
        demo(),
        $container.isotope({ itemSelector: ".item", filter: "*" }),
        jQuery("#filters a").on("click", function () {
          var e = jQuery(this);
          if (e.hasClass("selected")) return !1;
          e.parents().find(".selected").removeClass("selected"),
            e.addClass("selected");
          var t = jQuery(this).attr("data-filter");
          return $container.isotope({ filter: t }), !1;
        }),
        $(".grid").isotope({ itemSelector: ".grid-item" }),
        jQuery("#revolution-slider").revolution({
          delay: 5e3,
          startwidth: 1120,
          startheight: 500,
          hideThumbs: 10,
          fullWidth: "on",
          fullScreen: "on",
          fullScreenOffsetContainer: "",
          touchenabled: "on",
          navigationType: "none",
          dottedOverlay: "",
        }),
        jQuery(".de_tab").find(".de_tab_content > div").hide(),
        jQuery(".de_tab").find(".de_tab_content > div:first").show(),
        jQuery("li").find(".v-border").fadeTo(150, 0),
        jQuery("li.active").find(".v-border").fadeTo(150, 1),
        jQuery(".de_nav li").click(function () {
          jQuery(this).parent().find("li").removeClass("active"),
            jQuery(this).addClass("active"),
            jQuery(this).parent().parent().find(".v-border").fadeTo(150, 0),
            jQuery(this).parent().parent().find(".de_tab_content > div").hide();
          var e = jQuery(this).index();
          jQuery(this)
            .parent()
            .parent()
            .find(".de_tab_content > div:eq(" + e + ")")
            .fadeIn(),
            jQuery(this).find(".v-border").fadeTo(150, 1);
        });
      jQuery("#request_form .btn-right").click(function () {
        var e = $("#rq_name").val(),
          t = $("#rq_email").val(),
          i = $("#rq_phone").val();
        0 == e.length
          ? $("#rq_name").addClass("error_input")
          : $("#rq_name").removeClass("error_input"),
          0 == t.length
            ? $("#rq_email").addClass("error_input")
            : $("#rq_email").removeClass("error_input"),
          0 == i.length
            ? $("#rq_phone").addClass("error_input")
            : $("#rq_phone").removeClass("error_input"),
          0 != e.length &&
            0 != t.length &&
            0 != i.length &&
            (jQuery("#rq_step_1").hide(), jQuery("#rq_step_2").fadeIn());
      }),
        jQuery(".de_review").find(".de_tab_content > div").hide(),
        jQuery(".de_review").find(".de_tab_content > div:first").show(),
        jQuery(".de_review").find(".de_nav li:first").fadeTo(150, 1),
        jQuery(".de_nav li").click(function () {
          jQuery(this).parent().find("li").removeClass("active"),
            jQuery(this).addClass("active"),
            jQuery(this).fadeTo(150, 1),
            jQuery(this).parent().parent().find(".de_tab_content > div").hide();
          var e = jQuery(this).index();
          jQuery(this)
            .parent()
            .parent()
            .find(".de_tab_content > div:eq(" + e + ")")
            .show();
        }),
        jQuery(".toggle-list h2").addClass("acc_active"),
        jQuery(".toggle-list h2").toggle(
          function () {
            jQuery(this).addClass("acc_noactive"),
              jQuery(this).next(".ac-content").slideToggle(200);
          },
          function () {
            jQuery(this).removeClass("acc_noactive").addClass("acc_active"),
              jQuery(this).next(".ac-content").slideToggle(200);
          }
        ),
        jQuery("#menu-btn").on("click", function () {
          console.log()
          0 == mobile_menu_show
            ? (jQuery("#mainmenu").slideDown(),
              jQuery("header").addClass("height-auto"),
              (mobile_menu_show = 1),
              jQuery(this).removeClass("unclick"),
              jQuery(this).addClass("clicked"))
            : ($("#mainmenu").slideUp("fast", function () {
                jQuery("header").removeClass("height-auto"),
                  (mobile_menu_show = 0);
              }),
              jQuery(this).removeClass("clicked"),
              jQuery(this).addClass("unclick"));
        }),
        jQuery(".scroll-to").click(function (e) {
          -1 != this.href.indexOf("#") &&
            (e.preventDefault(),
            jQuery("html,body").scrollTo(this.hash, this.hash));
        }),
        jQuery("a.btn").click(function (e) {
          -1 != this.href.indexOf("#") &&
            (e.preventDefault(),
            jQuery("html,body").scrollTo(this.hash, this.hash));
        }),
        jQuery(".pop-search-click").on("click", function () {
          var e = $(this).data("iteration") || 1;
          switch (e) {
            case 1:
              jQuery(this).addClass("click"),
                jQuery(".pop-search .form-default").fadeTo(300, 1),
                jQuery(".pop-search .form-default input").focus();
              break;
            case 2:
              jQuery(this).removeClass("click"),
                jQuery(".pop-search .form-default").hide();
          }
          ++e > 2 && (e = 1), $(this).data("iteration", e);
        }),
        jQuery(".de-gallery .item .icon-info").on("click", function () {
          jQuery(".page-overlay").show(),
            (url = jQuery(this).attr("data-value")),
            jQuery("#loader-area .project-load").load(url, function () {
              jQuery("#loader-area").slideDown(500, function () {
                jQuery(".page-overlay").hide(),
                  jQuery("html, body").animate(
                    { scrollTop: jQuery("#loader-area").offset().top - 70 },
                    500,
                    "easeOutCubic"
                  ),
                  jQuery(".image-slider").owlCarousel({
                    items: 1,
                    singleItem: !0,
                    navigation: !1,
                    pagination: !0,
                    autoPlay: !1,
                  }),
                  jQuery(".container").fitVids(),
                  jQuery("#btn-close-x").on("click", function () {
                    return (
                      jQuery("#loader-area").slideUp(500, function () {
                        jQuery("html, body").animate(
                          {
                            scrollTop:
                              jQuery("#section-portfolio").offset().top - 70,
                          },
                          500,
                          "easeOutCirc"
                        );
                      }),
                      !1
                    );
                  });
              });
            });
        }),
        jQuery(".side-bg").each(function () {
          jQuery(this)
            .find(".image-container")
            .css(
              "height",
              jQuery(this).find(".image-container").parent().css("height")
            );
        });
      $(".center-y").outerHeight();
      jQuery(".animated").fadeTo(0, 0),
        jQuery(".animated").each(function () {
          var e = jQuery(this).offset().top;
          jQuery(this).attr("data-delay");
          if (e < jQuery(window).scrollTop() + 300) {
            jQuery(this).fadeTo(1, 500);
            jQuery(this).attr("data-animation");
          }
        }),
        jQuery(".arrow-up").on("click", function () {
          jQuery(".coming-soon .coming-soon-content").fadeOut(
            "medium",
            function () {
              jQuery("#hide-content").fadeIn(600, function () {
                jQuery(".arrow-up").animate({ bottom: "-40px" }, "slow"),
                  jQuery(".arrow-down").animate({ top: "0" }, "slow");
              });
            }
          );
        }),
        jQuery(".arrow-down").on("click", function () {
          jQuery("#hide-content").fadeOut("slow", function () {
            jQuery(".coming-soon .coming-soon-content").fadeIn(
              800,
              function () {
                jQuery(".arrow-up").animate({ bottom: "0px" }, "slow"),
                  jQuery(".arrow-down").animate({ top: "-40" }, "slow");
              }
            );
          });
        }),
        $.stellar({ horizontalScrolling: !1, verticalOffset: 0 });
    }),
    jQuery("#mainmenu li a").each(function () {
      $(this).next("ul").length > 0 && $("<span></span>").insertAfter($(this));
    }),
    jQuery("#mainmenu > li > span").on("click", function () {
      var e = $(this).data("iteration") || 1;
      switch (e) {
        case 1:
          $(this).addClass("active"),
            $(this).parent().find("ul:first").css("height", "auto");
          var t = $(this).parent().find("ul:first").height();
          $(this).parent().find("ul:first").css("height", "0"),
            $(this)
              .parent()
              .find("ul:first")
              .animate({ height: t }, 400, "easeInOutQuint");
          break;
        case 2:
          $(this).removeClass("active"),
            $(this)
              .parent()
              .find("ul:first")
              .animate({ height: "0" }, 400, "easeInOutQuint");
      }
      ++e > 2 && (e = 1), $(this).data("iteration", e);
    }),
    jQuery("#mainmenu > li > ul > li > span").on("click", function () {
      var e = $(this).data("iteration") || 1;
      switch (e) {
        case 1:
          $(this).addClass("active"),
            $(this).parent().find("ul:first").css("height", "auto"),
            $(this)
              .parent()
              .parent()
              .parent()
              .find("ul:first")
              .css("height", "auto");
          var t = $(this).parent().find("ul:first").height();
          $(this).parent().find("ul:first").css("height", "0"),
            $(this)
              .parent()
              .find("ul:first")
              .animate({ height: t }, 400, "easeInOutQuint");
          break;
        case 2:
          $(this).removeClass("active"),
            $(this)
              .parent()
              .find("ul:first")
              .animate({ height: "0" }, 400, "easeInOutQuint");
      }
      ++e > 2 && (e = 1), $(this).data("iteration", e);
    }),
    jQuery("#mainmenu > li > ul > li > ul > li span").on("click", function () {
      var e = $(this).data("iteration") || 1;
      switch (e) {
        case 1:
          $(this).addClass("active"),
            $(this).parent().find("ul:first").css("height", "auto"),
            $(this)
              .parent()
              .parent()
              .parent()
              .find("ul:first")
              .css("height", "auto");
          var t = $(this).parent().find("ul:first").height();
          $(this).parent().find("ul:first").css("height", "0"),
            $(this)
              .parent()
              .find("ul:first")
              .animate({ height: t }, 400, "easeInOutQuint");
          break;
        case 2:
          $(this).removeClass("active"),
            $(this)
              .parent()
              .find("ul:first")
              .animate({ height: "0" }, 400, "easeInOutQuint");
      }
      ++e > 2 && (e = 1), $(this).data("iteration", e);
    }),
    $("#back-to-top").length)
  ) {
    var scrollTrigger = 500,
      backToTop = function () {
        $(window).scrollTop() > scrollTrigger
          ? $("#back-to-top").addClass("show")
          : $("#back-to-top").removeClass("show");
      };
    backToTop(),
      $(window).on("scroll", function () {
        backToTop();
      }),
      $("#back-to-top").on("click", function (e) {
        e.preventDefault(), $("html,body").animate({ scrollTop: 0 }, 700);
      }),
      $("section,div").css("background-color", function () {
        return jQuery(this).data("bgcolor");
      }),
      $("div").css("background-image", function () {
        return jQuery(this).data("bgimage");
      });
  }
  $(function () {
    var e = 0;
    setInterval(function () {
      (e -= 1), $(".bg-loop").css("background-position", e + "px 0");
    }, 50);
  }),
    jQuery(".expand").each(function () {
      $(this)
        .find("h4")
        .on("click", function () {
          var e = $(this).data("iteration") || 1;
          switch (e) {
            case 1:
              $(this).next(".hidden-content").slideDown(300),
                $(this).addClass("active");
              break;
            case 2:
              $(this).next(".hidden-content").slideUp(300),
                $(this).removeClass("active");
          }
          ++e > 2 && (e = 1), $(this).data("iteration", e);
        });
    }),
    jQuery(function (e) {
      var t,
        i = 0,
        a = 0,
        r = e("<a id='darkbox_prev'/><a id='darkbox_next'/>").on(
          "touchstart mousedown",
          function (e) {
            e.preventDefault(), e.stopPropagation();
            var t = "darkbox_next" === this.id;
            (a = t ? ++a : --a), l();
          }
        ),
        s = e("<div/>", { id: "darkbox", append: r, appendTo: "body" }),
        o =
          (e("<a/>", {
            id: "darkbox_close",
            appendTo: s,
            on: {
              "touchstart mousedown": function (e) {
                e.preventDefault(), s.removeClass("show");
              },
            },
          }),
          e("<div/>", { id: "darkbox_description", appendTo: s })),
        n = e("<div/>", { id: "darkbox_stats", appendTo: s });
      function l() {
        a = a < 0 ? i - 1 : a % i;
        var r = document.documentElement,
          l = Math.max(r.clientWidth, window.innerWidth || 0),
          u = Math.max(r.clientHeight, window.innerHeight || 0),
          c = t.eq(a),
          d = c.data("darkbox-description"),
          h = c.data("darkbox");
        s.addClass("show spinner"),
          o.html(d),
          n.html(i < 2 ? "" : a + 1 + "/" + i),
          e("<img/>")
            .on("load", function () {
              var e = this.width > l || this.height > u;
              s.removeClass("spinner").css({
                backgroundImage: "url('" + this.src + "')",
                backgroundSize: e ? "contain" : "auto",
              });
            })
            .attr("src", h);
      }
      e(document).on(
        "click",
        "[data-darkbox],[data-darkbox-group]",
        function (o) {
          var n = !e(this).data("darkbox"),
            u = e(this).data("darkbox-group");
          (t = u
            ? e('[data-darkbox-group="' + u + '"]').filter("[data-darkbox]")
            : e(this)),
            (i = t.length),
            (a = n ? 0 : t.index(this)),
            r.toggle(i > 1),
            s.css({ backgroundImage: "none" }),
            l();
        }
      ),
        e(document).on("keyup", function (e) {
          var t = e.which;
          27 === t && s.removeClass("show"),
            37 === t && (--a, l()),
            39 === t && (++a, l());
        });
    });
});
