sal();

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $(".topButton").addClass("buttonDisplay");
    } else {
      $(".topButton").removeClass("buttonDisplay");
    }

    if ($(this).scrollTop() > 250) {
      $(".navbar").addClass("solid");
      $(".navbar").css("background-color: #000;");
    } else {
      $(".navbar").removeClass("solid");
    }
  });
});

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(".owl-carousel").owlCarousel({
  dots: false,
  loop: true,
  nav: true,
  margin: 10,
  responsiveClass: true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

function dynamicDropdown(selected) {
  let domainSel = document.getElementById("domain");
  let domains = {
    comp: [
      "Data Science",
      "Internet Of Things",
      "Software Engineering",
      "Networking & Cloud Computing",
      "Artificial Intelligence & Machine Learning"
    ],
    it: [
      "Cloud Computing",
      "Data Mining & Information Retrieval",
      "Mobile Computing & Wireless Communication",
      "Network & Cyber Security"
    ],
    mech: [
      "Automation & Robotics",
      "Design Engineering",
      "Thermal & Fluid Science",
      "Manufacturing & Material Science",
      "Mechatronics"
    ],
    civil: [
      "Green Construction Materials & Advances in Construction Techniques",
      "Recent Developments in Town Planning with respect to Smart City",
      "Recent Trends in Structural Engineering and Concrete Technology",
      "Application of Remote Sensing and GIS in Civil Engineering",
      "New Technologies, Methods & Techniques in Civil Engineering"
    ],
    entc: [
      "Embedded & VLSI Design",
      "Communication & Networking",
      "Machine Learning",
      "Instrumentation Systems",
      "Power & Renewable Energy Systems"
    ]
  };

  switch (selected) {
    case "comp":
      domainSel.options.length = 0;
      for (index in domains.comp) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.comp[index],
          domains.comp[index]
        );
      }
      break;

    case "it":
      domainSel.options.length = 0;
      for (index in domains.it) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.it[index],
          domains.it[index]
        );
      }
      break;

    case "mech":
      domainSel.options.length = 0;
      for (index in domains.mech) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.mech[index],
          domains.mech[index]
        );
      }
      break;

    case "civil":
      domainSel.options.length = 0;
      for (index in domains.civil) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.civil[index],
          domains.civil[index]
        );
      }
      break;

    case "entc":
      domainSel.options.length = 0;
      for (index in domains.entc) {
        domainSel.options[domainSel.options.length] = new Option(
          domains.entc[index],
          domains.entc[index]
        );
      }
      break;
  }
}

let fnameError = document.querySelector(".fnameError"),
  fnameMessage = document.querySelector("#fnameError"),
  lnameError = document.querySelector(".lnameError"),
  lnameMessage = document.querySelector("#lnameError"),
  emailError = document.querySelector(".emailError"),
  emailMessage = document.querySelector("#emailError"),
  mobileError = document.querySelector(".mobileError"),
  mobileMessage = document.querySelector("#mobileError"),
  collegeError = document.querySelector(".collegeError"),
  collegeMessage = document.querySelector("#collegeError"),
  yearError = document.querySelector(".yearError"),
  yearMessage = document.querySelector("#yearError"),
  domainError = document.querySelector(".domainError"),
  domainMessage = document.querySelector("#domainError"),
  paperError = document.querySelector(".paperError"),
  paperMessage = document.querySelector("#paperError"),
  fileError = document.querySelector(".fileError"),
  fileMessage = document.querySelector("#fileError");

function hideError() {
  fnameError.style.display = "none";
  lnameError.style.display = "none";
  emailError.style.display = "none";
  mobileError.style.display = "none";
  collegeError.style.display = "none";
  yearError.style.display = "none";
  domainError.style.display = "none";
  paperError.style.display = "none";
  fileError.style.display = "none";
}

function validate() {
  let fname = document.querySelector("#firstName").value,
    lname = document.querySelector("#lastName").value,
    email = document.querySelector("#email").value,
    mobile = document.querySelector("#mobile").value,
    college = document.querySelector("#college").value,
    year = document.querySelector("#year").value,
    branch = document.querySelector("#branch").value,
    domain = document.querySelector("#domain").value;

  let fnameFlag,
    lnameFlag,
    emailFlag,
    mobileFlag,
    collegeFlag,
    yearFlag,
    branchFlag,
    domainFlag;

  if (fname === "") {
    fnameError.style.display = "block";
    fnameMessage.innerHTML = "Required";
    fnameFlag = false;
  } else {
    fnameError.style.display = "none";
    fnameMessage.innerHTML = "";
    fnameFlag = true;
  }

  if (lname === "") {
    lnameError.style.display = "block";
    lnameMessage.innerHTML = "Required";
    lnameFlag = false;
  } else {
    lnameError.style.display = "none";
    lnameMessage.innerHTML = "";
    lnameFlag = true;
  }

  if (
    fnameFlag &&
    lnameFlag &&
    emailFlag &&
    mobileFlag &&
    collegeFlag &&
    yearFlag &&
    branchFlag &&
    domainFlag
  ) {
    return true;
  } else {
    return false;
  }
}

(function () {
  const second = 500,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


  // pricing

  var $carousel = $('.PriceBlocks-slider').flickity({
    cellSelector: '.PriceBlock-container',
    initialIndex: 2
  });
  
  var flkty = $carousel.data('flickity');
  
  $carousel.on('staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
    if (typeof cellIndex == 'number') {
      $carousel.flickity('selectCell', cellIndex);
    }
  });
  
  $carousel.on('select.flickity', function() {
    flkty.getCellElements().forEach(function(cellElem) {
      cellElem.classList['remove']('is-next');
      cellElem.classList['remove']('is-previous');
    });
  
    var previousSlide = flkty.slides[flkty.selectedIndex - 1];
    var nextSlide = flkty.slides[flkty.selectedIndex + 1];
  
    nextSlide.getCellElements().forEach(function(cellElem) {
      cellElem.classList['add']('is-next');
    });
    previousSlide.getCellElements().forEach(function(cellElem) {
      cellElem.classList['add']('is-previous');
    });
  })
  
  function changeSlideClasses(slide, method, className) {
    slide.flickity('getCellElements').forEach(function(cellElem) {
      cellElem.classList[method](className);
    });
  }