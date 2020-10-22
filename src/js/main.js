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
  const linkProjects = document.querySelector('a[href="#projects"] ');
  const linkReferences = document.querySelector('a[href="#references"] ');
  const landingPages = document.querySelector('.pages');
  const startBtn = document.querySelector('.start');
  const linkContact = document.querySelector('a[href="#contact');
  const linkOffer = document.querySelector('a[href="#offer');


  //po kliknięciu w link schowaj wszystkie sekcje i pokaż naszą

  linkProjects.addEventListener('click', function () {

    landingPages.classList.add('hidden');
    sectionReferences.classList.add('hidden');
    sectionProjects.classList.remove('hidden');
  });

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

  // slider 

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







};

// Later on...
myScript();
