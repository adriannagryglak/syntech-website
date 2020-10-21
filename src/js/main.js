const myScript = function () {
  // Some amazing code...1.variables 2.methods 3. event listeners i initializations



  //smooth scroll for offer and contact pages
  const scroll = new SmoothScroll('.navbar .smooth-scroll', {
    speed: 800
  });

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
      console.log('usuwam klase hidden');
      landingPages.classList.remove('hidden');
    }else{
      console.log('teraz normalnie przeładuję stronkę');
      window.location.reload();
    }
  });

  //jeśli landingi mają klasę hidden po klknięciu na kontakt lub ofertę pokaż je i wtedy prowadź
  
  linkOffer.addEventListener('click', function(){
    console.log('klik w offer');
    if (landingPages.classList.contains('hidden')=== true) {
      landingPages.classList.remove('hidden');
    }
  });

  linkContact.addEventListener('click', function(){
    console.log('klik w contact');
    if (landingPages.classList.contains('hidden')=== true) {
      landingPages.classList.remove('hidden');
    }
  });









};

// Later on...
myScript();
