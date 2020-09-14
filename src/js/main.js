const myScript = function () {
  // Some amazing code...1.variables 2.methods 3. event listeners i initializations

  // obsługa nawigacji projekty i referencje: 

  const navProjects = document.querySelector('#projects');
  const navReferences = document.querySelector('#references');
  const startButton = document.querySelector('.start');

  navProjects.addEventListener('click', function () {
    const projects = document.querySelector('.projects');
    projects.classList.remove('hidden');

    const hiddenSections = document.querySelectorAll('.non-pro');
    for (let hiddenSection of hiddenSections){
      hiddenSection.classList.add('hidden');
    }
  });


  navReferences.addEventListener('click', function(){ 
    const references = document.querySelector('.references');
    references.classList.remove('hidden');

    const hiddenSections = document.querySelectorAll('.non-ref');
    for (let hiddenSection of hiddenSections){
      hiddenSection.classList.add('hidden');
    }
  });

  function showLandingPage(){
    const showSections = document.querySelectorAll('.non-ref, .non-pro');
    for (let showSection of showSections){
      showSection.classList.remove('hidden');
    }

    const hiddenSections = document.querySelectorAll('.non-start');
    for (let hiddenSection of hiddenSections){
      hiddenSection.classList.add('hidden');
    }
  }
  startButton.addEventListener('click', showLandingPage);

  //scrollowanie nawigacji oferta i kontakt:

  function navigationScroll(target, duration){
    target = document.querySelector(target);
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animation (currentTime){
      if(startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0,run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d){
      t /= d / 2;
      if(t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) +b;
    }

    requestAnimationFrame(animation);
  }

  const offer = document.querySelector('#offer');
  offer.addEventListener('click', function(){
    showLandingPage();
    navigationScroll('.offer', 1000);
  });

  














};

// Later on...
myScript();
