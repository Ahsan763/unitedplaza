$(document).ready(function () {
  $(".filter__select").select2();
  $(".Bedroomsinput").on("change", function () {
    const minSelected = $(".Bedroomsinput:eq(0)").val();
    const maxSelected = $(".Bedroomsinput:eq(1)").val();
    $(".filter__input--bedrooms").val(
      `Min: ${minSelected} - Max: ${maxSelected}`
    );
  });
  // Bedrooms end

  $(".priceRange").on("change", function () {
    const minSelected = $(".priceRange:eq(0)").val();
    const maxSelected = $(".priceRange:eq(1)").val();
    $(".filter__input--priceRange").val(
      `Min: ${minSelected} - Max: ${maxSelected}`
    );
  });
  // priceRange end

  $(".florArea").on("change", function () {
    const minSelected = $(".florArea:eq(0)").val();
    const maxSelected = $(".florArea:eq(1)").val();
    $(".filter__input--florArea").val(
      `Min: ${minSelected} - Max: ${maxSelected}`
    );
  });
  // priceRange end

  $(".filtBedroombox-btn").click(function (event) {
    $(".filtBedroombox-btn.active").removeClass("active");
    $(".filtBedroomboxAb.active").removeClass("active");
    $(this).addClass("active");
    $(this).parent().nextAll(".filtBedroomboxAb").eq(0).addClass("active");
    event.stopPropagation();
  });
  $("body").click(function () {
    $(".filtBedroombox-btn").removeClass("active");
    $(".filtBedroomboxAb").removeClass("active");
  });
  $(".filtBedroomboxAb").click(function (event) {
    event.stopPropagation();
  });

  // Function to animate the numbers
  function animateNumbers() {
    $(".featBoxC1-n").each(function () {
      var targetValue = parseInt($(this).text()); // Get the target value from the element
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: targetValue,
          },
          {
            duration: 2000, // Animation duration in milliseconds
            easing: "swing", // Easing function
            step: function (now) {
              $(this).text(Math.ceil(now)); // Update the element's text with the animated value
            },
            complete: function () {
              $(this).text(targetValue); // Set the final value after animation completion
            },
          }
        );
    });
  }

  // Function to check if the section is in the viewport
  function isSectionVisible(element) {
    var scrollPos = $(window).scrollTop();
    var sectionTop = $(element).offset().top;
    var sectionHeight = $(element).outerHeight();
    var sectionBottom = sectionTop + sectionHeight;

    return (
      sectionTop <= scrollPos + $(window).height() && sectionBottom >= scrollPos
    );
  }

  // Check if the section is visible on page load
  $(document).ready(function () {
    if (isSectionVisible(".features")) {
      animateNumbers();
    }
  });

  // Check if the section becomes visible while scrolling
  $(window).scroll(function () {
    if (isSectionVisible(".features")) {
      $(window).off("scroll"); // Unbind the scroll event after animating on page load
      animateNumbers();
    }
  });

  //
  $(".faq-box-tab").click(function () {
    $(".faq-box-tabcontent").css("visibility", "visible");
  });
  $(".commBox").slice(0, 2).addClass("d-flex");
  $(".commentsContBtn").click(function () {
    $(this).toggleClass("active");
    $(".commBox").slice(2, 1000).toggleClass("d-flex");
  });

  // agent details page tabs start
  $(".agntdet-btn--aboutme").click(function () {
    $(this).addClass("active");
    $(".agntdet-btn--myproper").removeClass("active");
    $(".agntAbtme").addClass("active");
    $(".agntmypro").removeClass("active");
  });
  $(".agntdet-btn--myproper").click(function () {
    $(this).addClass("active");
    $(".agntdet-btn--aboutme").removeClass("active");
    $(".agntmypro").addClass("active");
    $(".agntAbtme").removeClass("active");
  });
  // agent details page tabs ends

  // iamge and map view on property details page start
  $(".prpDetHdr-b2-inner-map").click(function () {
    $(this).addClass("active");
    $(".prpDetHdr-b2-inner-img").removeClass("active");
    $(".prpDet-mapbox").addClass("active");
    $(".prpDet-imgsec").removeClass("active");
  });
  $(".prpDetHdr-b2-inner-img").click(function () {
    $(this).addClass("active");
    $(".prpDetHdr-b2-inner-map").removeClass("active");
    $(".prpDet-mapbox").removeClass("active");
    $(".prpDet-imgsec").addClass("active");
  });

  // iamge and map view on property details page end

  // advaced search button dropdown start
  $(".advSerchBtn1").click(function () {
    $(".filtrDropDwn").slideToggle(300);
  });
  $("body").click(function () {
    $(".filtrDropDwn").slideUp(300);
  });
  $(".advSerchBtn1,.filtrDropDwn").click(function (event) {
    event.stopPropagation();
  });
  // advaced search button dropdown end

  // show list and grid view start
  $(".listbtn").click(function () {
    $(this).addClass("active");
    $(".gridbtn").removeClass("active");
    $(".side2-wrpr").addClass("list");
    localStorage.setItem("listview", "true");
  });
  $(".gridbtn").click(function () {
    $(this).addClass("active");
    $(".listbtn").removeClass("active");
    $(".side2-wrpr").removeClass("list");
    localStorage.removeItem("listview");
  });
  if (localStorage.listview == "true") {
    $(".listbtn").addClass("active");
    $(".gridbtn").removeClass("active");
    $(".side2-wrpr").addClass("list");
  }
  // show list and grid view end

  // home page tabes for showing property for rent and property for sale
  $('input[name="propertySlider"]').change(function () {
    var value = $(this).val();
    if (value == "first") {
      $(".rentalSlider1").show();
      $(".selSlider").hide();
      updateVal(value);
    } else {
      $(".rentalSlider1").hide();
      $(".selSlider").show();
      updateVal(value);
    }
  });
  function updateVal() {
    $('input[name="propertySlider"]').click(function () {
      var value = $(this).val();
    });
  }
  var count = 0;
  $("#select-all").click(function () {
    $(".checkbox").prop("checked", this.checked);
    updateCount();
  });
  $(".checkbox").click(function () {
    updateCount();
  });
  function updateCount() {
    var count = $("input.checkbox:checked").length;
    $("#count").text(count);
  }
  // home page tabes for showing property for rent and property for sale

  // mobile header navigation start
  $(".navBtn").click(function () {
    $(".hdrBtm-list").toggleClass("active");
  });
  $(".hdrBtmClose").click(function () {
    $(".hdrBtm-list").toggleClass("active");
  });
  $("body").click(function () {
    $(".hdrBtm-list").removeClass("active");
  });
  $(".navBtn,.hdrBtmClose,.hdrBtm-list").click(function (event) {
    event.stopPropagation(); // prevents executing the above event
  });
  // mobile header navigation end

  // on focus show text heading on the border of input feilds
  $(".form-control").focus(function () {
    $(this).nextAll(".form-input-sm-name").eq(0).show();
  });
  $(".form-control").focusout(function () {
    $(this).nextAll(".form-input-sm-name").eq(0).hide();
  });
  // on focus show text heading on the border of input feilds

  // dark and light theme start
  $(".dark-btn").click(function () {
    $("body").addClass("dark");
    localStorage.setItem("darkClass", "true");
  });
  $(".light-btn").click(function () {
    $("body").removeClass("dark");
    localStorage.removeItem("darkClass");
  });
  if (localStorage.getItem("darkClass") === "true") {
    $("body").addClass("dark");
  }
  // dark and light theme end

  // language toggle start
  if (document.dir == "ltr") {
    $(".language_toggle_en").addClass("d-none");
    $(".language_toggle_ar").addClass("d-flex");
  }
  if (document.dir == "rtl") {
    $(".language_toggle_ar").addClass("d-none");
    $(".language_toggle_en").addClass("d-flex");
  }
  $(".language_toggle_en").click(function () {
    $("html").attr("dir", "ltr");
    $("body").addClass("ltr");
    $("body").removeClass("rtl");
    $(".language_toggle_ar").removeClass("d-none");
    $(".language_toggle_en").addClass("d-none");
    localStorage.removeItem("rtl");
  });
  $(".language_toggle_ar").click(function () {
    $("html").attr("dir", "rtl");
    $("body").addClass("rtl");
    $("body").removeClass("ltr");
    $(".language_toggle_en").removeClass("d-none");
    $(".language_toggle_ar").addClass("d-none");
    localStorage.setItem("rtl", "true");
  });
  if (localStorage.getItem("rtl") === "true") {
    $(".language_toggle_ar").addClass("d-none");
    $(".language_toggle_en").removeClass("d-none");
    $("body").addClass("rtl");
    $("body").removeClass("ltr");
    $("html").attr("dir", "rtl");
  }
  // language toggle end

  // swiper slider inside full theme start
});

var swiper1 = new Swiper(".banSld", {
  slidesPerView: 5,
  autoplay: true,
  loop: true,
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 5,
    },
  },
});
var swiper2 = new Swiper(".rentalSlider1", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
var swiper3 = new Swiper(".selSlider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
var swiper4 = new Swiper(".citiesofcSl", {
  slidesPerView: 3,
  autoplay: true,
  spaceBetween: 50,
  centeredSlides: true,
  loop: true,
  navigation: true,
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});
var swiper5 = new Swiper(".team-slider", {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper7 = new Swiper(".explrSl", {
  slidesPerView: 4,
  // centeredSlides:true,
  loop: true,
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
var swiper8 = new Swiper(".news-slider", {
  slidesPerView: 2,
  spaceBetween: 50,
  // centeredSlides:true,
  loop: true,
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
var swiper9 = new Swiper(".rcnPrj-sl", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 2,
    },
  },
});
var swiper10 = new Swiper(".testiSlider", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Our Property Service slider to show on mobile start
var swiper11 = new Swiper(".propertySer-side-slider", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
});
// Our Property Service slider to show on mobile end
var swiper12 = new Swiper(".prpDet-imgsec-box1", {
  slidesPerView: 1,
  loop: true,
  navigation: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper13 = new Swiper(".newsSlider3", {
  slidesPerView: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 5,
    },
  },
});
var swiper14 = new Swiper(".servcsDetPgsl", {
  slidesPerView: 10,
  autoplay: true,
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,
    },
    1400: {
      slidesPerView: 10,
    },
  },
});

var swiper15 = new Swiper(".llpsecSl", {
  slidesPerView: 4,
  autoplay: true,
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    40: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
