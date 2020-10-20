const myScript = function () {
  // Some amazing code...1.variables 2.methods 3. event listeners i initializations

  

  //smooth scroll for offer and contact pages
  const scroll = new SmoothScroll('.navbar .smooth-scroll', {
    speed: 800
  });
  
  //showing projects and references pages & hiding the rest

  //znajdź potrzebne elementy
  const sectionProjects = document.querySelector('#projects');
  const sectionReferences = document.querySelector('#references');
  const linkProjects = document.querySelector( 'a[href="#projects"] ');
  const linkReferences = document.querySelector( 'a[href="#references"] ');
  const landingPages = document.querySelector('.pages');
  const allSections = document.querySelectorAll('section');
  console.log(allSections);


  //po kliknięciu w link schowaj wszystkie sekcje i pokaż naszą

  linkProjects.addEventListener('click', function (){
    
    landingPages.classList.add('hidden');
    sectionReferences.classList.add('hidden');
    sectionProjects.classList.remove('hidden');
  });

  linkReferences.addEventListener('click', function (){
    
    landingPages.classList.add('hidden');
    sectionProjects.classList.add('hidden');
    sectionReferences.classList.remove('hidden');
  });

  















};

// Later on...
myScript();
