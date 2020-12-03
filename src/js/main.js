const myScript = function () {
  // Some amazing code...1.variables 2.methods 3. event listeners i initializations



  //smooth scroll for offer and contact pages
  //const scroll = new SmoothScroll('.navbar .smooth-scroll', {
  //  speed: 800
  //});

  //navigation

  //znajdź potrzebne elementy
  const sectionProjects = document.querySelector('#projects');
  const sectionReferences = document.querySelector('#references');
  const linksProjects = document.querySelectorAll('a[href="#projects"]');
  const linkReferences = document.querySelector('a[href="#references"] ');
  const landingPages = document.querySelector('.pages');
  const startBtn = document.querySelector('.start');
  const linkContact = document.querySelector('a[href="#contact');
  const linkOffer = document.querySelector('a[href="#offer');

  //po kliknięciu w link schowaj wszystkie sekcje i pokaż naszą


  for (let link of linksProjects) {

    link.addEventListener('click', function () {

      landingPages.classList.add('hidden');
      sectionReferences.classList.add('hidden');
      sectionProjects.classList.remove('hidden');

      console.log('klik w projekty');
    });

  }


  linkReferences.addEventListener('click', function () {

    landingPages.classList.add('hidden');
    sectionProjects.classList.add('hidden');
    sectionReferences.classList.remove('hidden');
  });

  //jeśli landingi nie mają klasy hidden - przycisk start ma przeładować a jeśli mają - ma ją odebrać. 

  startBtn.addEventListener('click', function () {
    if (landingPages.classList.contains('hidden') === true) {
      landingPages.classList.remove('hidden');
    } else {
      window.location.reload();
    }
    sectionProjects.classList.add('hidden');
    sectionReferences.classList.add('hidden');
  });

  //jeśli landingi mają klasę hidden po klknięciu na kontakt lub ofertę pokaż je i wtedy prowadź

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

  //po kliknięciu w hr weź jej index i pokaż slide który ma jej indeks oraz aktywuj nextSlide
  // co znaczy pokaż slide? przesuń w lewo o tyle szerokości jaki jest numer slajdu? Hm Hm matematyka
  //i nie rób tego przy każdym go to slide- tylko raz na początku nadaj im eventlistenery i już. 

  for (let kreska of kreski) {
    //let indexkreski = kreski.indexOf(kreska);
    //console.log(indexkreski);
    kreska.addEventListener('click', function (event) {
      event.preventDefault();

      console.log('kliknelam w kreske');

    });
  }

  // oferta 


  function offerDisplay() {

    const offerLinks = document.querySelectorAll('#offer ul li');

    for (let link of offerLinks) {
      let detailsId = link.getAttribute('title');
      let detailsText = document.getElementById(detailsId);
      const allDetails = document.querySelectorAll('.offer-details p, .offer-details ul');

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


  // FLUID IMAGE POP UP section references

  const imgPopUp = document.querySelector('.img-pop-up');
  const images = document.querySelectorAll('.img-container img');
  const fullImage = document.querySelector('.full-img');

  images.forEach(image => {
    image.addEventListener('click', function () {
      imgPopUp.classList.add('open');
      fullImage.classList.add('open');
      //dynamic change image and caption

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



















































};

// Later on...
myScript();
