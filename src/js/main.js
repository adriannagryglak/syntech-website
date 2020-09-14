const myScript = function () {
  // Some amazing code...1.variables 2.methods 3. event listeners i initializations

  // obsługa nawigacji: 

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

  startButton.addEventListener('click', function(){
    const showSections = document.querySelectorAll('.non-ref, .non-pro');
    for (let showSection of showSections){
      showSection.classList.remove('hidden');
    }

    const hiddenSections = document.querySelectorAll('.non-start');
    for (let hiddenSection of hiddenSections){
      hiddenSection.classList.add('hidden');
    }
  });
















};

// Later on...
myScript();
