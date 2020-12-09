const myScript = function () {
  // Some amazing code...1.variables 2.methods 3. event listeners i initializations

  //smooth scroll for offer and contact pages
  //const scroll = new SmoothScroll('.navbar .smooth-scroll', {
  // speed: 800
  //});

  //navigation
  const sectionProjects = document.querySelector('#projects');
  const sectionReferences = document.querySelector('#references');
  const linksProjects = document.querySelectorAll('.projects-link');
  const linkReferences = document.querySelector('.references-link');
  const landingPages = document.querySelector('.pages');
  const startBtn = document.querySelector('.start');
  const linkContact = document.querySelector('a[href="#contact');
  const linkOffer = document.querySelector('a[href="#offer');

  //preload animacja

  window.addEventListener('load', function () {
    const preload = document.querySelector('.preload');
    preload.classList.add('finished');
    preload.remove();

  });

  //linki do sekcji projekty
  for (let link of linksProjects) {
    link.addEventListener('click', function () {
      landingPages.classList.add('hidden');
      sectionReferences.classList.add('hidden');
      sectionProjects.classList.remove('hidden');
      window.scroll({
        top: 0,
        left: 0,
      });
    });
  }

  //link do sekcji referencje 
  linkReferences.addEventListener('click', function () {
    landingPages.classList.add('hidden');
    sectionProjects.classList.add('hidden');
    sectionReferences.classList.remove('hidden');
  });

  //link START
  startBtn.addEventListener('click', function () {
    if (landingPages.classList.contains('hidden') === true) {
      landingPages.classList.remove('hidden');
    } else {
      window.location.reload();
    }
    sectionProjects.classList.add('hidden');
    sectionReferences.classList.add('hidden');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  //linki do oferty i kontaktu
  linkOffer.addEventListener('click', function () {
    if (landingPages.classList.contains('hidden') === true) {
      landingPages.classList.remove('hidden');
      sectionProjects.classList.add('hidden');
      sectionReferences.classList.add('hidden');
    }
  });
  linkContact.addEventListener('click', function () {
    if (landingPages.classList.contains('hidden') === true) {
      landingPages.classList.remove('hidden');
      sectionProjects.classList.add('hidden');
      sectionReferences.classList.add('hidden');
    }
  });

  // obsługa slidera 
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider li');
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;
  let slidesNumber = slides.length - 1;
  const kreski = document.querySelectorAll('.sliders-nav hr');

  function goToSlide(index) {
    if (index < 0) {
      index = slidesNumber;
    } else if (index > slidesNumber) {
      index = 0;
    }
    slider.style.left = index * (-slideWidth) + 'px';
    currentIndex = index;

    for (let kreska of kreski) {
      kreska.classList.remove('active-slide');
    }
    kreski[index].classList.add('active-slide');
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  setInterval(nextSlide, 2000);

  //szczegoły oferty
  function offerDisplay() {
    const offerLinks = document.querySelectorAll('#offer ul li');
    for (let link of offerLinks) {
      let detailsId = link.getAttribute('title');
      let detailsText = document.getElementById(detailsId);
      const allDetails = document.querySelectorAll('.offer-details p, .offer-details ul');

      // DODAĆ RESPONSYWNY POP-UP 
      link.addEventListener('click', function () {
        for (let allDetail of allDetails) {
          allDetail.classList.add('hidden-offer');
          if (allDetail.id === detailsId) {
            detailsText.classList.remove('hidden-offer');
          }
        }
      });
    }
  }

  offerDisplay();



  function offerDisplayMobile() {

    window.addEventListener('resize', function () {
  
      const containerRight = document.querySelector('#offer .container-right');
      if (window.innerWidth < 580) {

        containerRight.style.display = 'none';
        console.log('wywalilem container righ');

        //jak klikne na li z .offer-nav
        //wezme od niego wartosc atrybutu title
        //znajde po nim id mojej ul w .oofer-details
        //wyswietle to ul albo jako dziecko mojego li
        //togglując mu klasę hidden offer mobile 

      } else {
        containerRight.style.display = 'block';
        console.log('przywrocilem kontenerek');
      }
    });




    //   if (x.matches) { // If media query matches
    //     document.body.style.backgroundColor = "yellow";
    //   } else {
    //     document.body.style.backgroundColor = "pink";
    //   }
    // }

    // let x = window.matchMedia("(max-width: 700px)")
    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction) // Attach listener function on state changes
  }

  offerDisplayMobile();

  /* go up button

  const goUp = tubędzie buttonik

  goUp.addEventListener('click', function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
*/


  //wyswietlenie pelnego zdjecia w referencjach

  const imgPopUp = document.querySelector('.img-pop-up');
  const images = document.querySelectorAll('.img-container img');
  const fullImage = document.querySelector('.full-img');

  images.forEach(image => {
    image.addEventListener('click', function () {
      imgPopUp.classList.add('open');
      fullImage.classList.add('open');
      const imageSource = image.getAttribute('src');
      fullImage.src = imageSource;
    });
  });

  imgPopUp.addEventListener('click', function (event) {
    if (event.target.classList.contains('img-pop-up')) {
      imgPopUp.classList.remove('open');
      fullImage.classList.remove('open');
    }
  });



  // //atrakcyjny kursor

  // let mouseCursor = document.querySelector('.cursor');
  // const clickableElements = document.querySelectorAll('.navbar ul li a, .btn, .offer-nav li');

  // window.addEventListener('mousemove', function (event) {
  //   mouseCursor.style.top = event.pageY + 'px';
  //   mouseCursor.style.left = event.pageX + 'px';
  // });

  // clickableElements.forEach(function (element) {
  //   element.addEventListener('mouseleave', function () {
  //     mouseCursor.classList.remove('could-click');
  //   });
  //   element.addEventListener('mouseover', function () {
  //     mouseCursor.classList.add('could-click');
  //   });
  // });




};

// Later on...
myScript();
