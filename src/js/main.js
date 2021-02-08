const myScript = function () {
  // Some amazing code...1.variables 2.methods 3. event listeners i initializations

  // smooth scroll for offer and contact pages

  /* eslint-disable no-unused-vars, no-undef */
  const scroll = new SmoothScroll('.navbar .smooth-scroll', {
    speed: 800
  });
  /* eslint-enable no-unused-vars, no-undef */

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

  function mediaQueries() {

    //obiekt ktory sprawdza czy cos jest wieksze niz 580-true
    let widthMatch = window.matchMedia('(min-width: 580px)');

    if (widthMatch.matches) {
      //wiecej niz 580px
      heroCaption('wide');
      offerDisplayWide();
    } else {
      //mniej niz 580px
      heroCaption('mobile');
      offerDisplayMobile();
    }

    widthMatch.addEventListener('change', function (mm) {
      if (mm.matches) {
        console.log('wiecej niz 580px znow');
        offerDisplayWide();
        heroCaption('wide');
      }
      else {
        console.log('mniej niz 580px znow');
        heroCaption('mobile');
        offerDisplayMobile();
      }
    });
  }

  function offerDisplayWide() {
    console.log('offerdisplay wide');
    const containerRight = document.querySelector('#offer .container-right');
    const offerLinks = document.querySelectorAll('.offer-nav > li p');
    const allDetails = document.querySelectorAll('.offer-list');
    const boxWhite = document.querySelector('.offer-details');

    //poka kontener
    containerRight.style.display = 'block';
    for (let details of allDetails) {
      details.classList.remove('active-offer-mobile');
    }
    //dla kazdego linka
    for (let link of offerLinks) {
      //nasluchuj klikakania

      link.addEventListener('click', function () {
        console.log('KLIK wide');
        let title = link.getAttribute('title');
        //zrob pętle po wszystkich deatalch
        for (let details of allDetails) {
          //sprawdz czy id detala to title linka
          if (details.id === title) {
            //jesli tak to wez jego rodzica, i daj mu nowe dziecko

            boxWhite.appendChild(details);
            //i usun klase active offer wide i nadaj mu klase active offer mobile
            details.classList.add('active-offer-wide');
          } else {
            details.classList.remove('active-offer-wide');
          }
        }
      });
    }
  }


  function offerDisplayMobile() {

    const containerRight = document.querySelector('#offer .container-right');
    const offerLinks = document.querySelectorAll('.offer-nav > li p');
    const allDetails = document.querySelectorAll('.offer-list');

    console.log('hello screentype is mobile!');
    //chowam prawy kontener
    containerRight.style.display = 'none';

    //dla kazdego linka
    for (let link of offerLinks) {
      //nasluchuj klikakania

      link.addEventListener('click', function () {
        console.log('KLIK mobile');
        let title = link.getAttribute('title');
        //zrob pętle po wszystkich deatalch
        for (let details of allDetails) {
          //sprawdz czy id detala to title linka
          details.classList.remove('active-offer-wide');
          if (details.id === title) {
            //jesli tak to wez jego rodzica, i daj mu nowe dziecko
            let parent = link.parentElement;
            parent.appendChild(details);
            //i usun klase active offer wide i nadaj mu klase active offer mobile
            details.classList.add('active-offer-mobile');
          } else {
            details.classList.remove('active-offer-mobile');
          }
        }
      });

    }
  }

  function heroCaption(screensize) {
    const caption = document.querySelector('#home .container-left p');

    if (screensize === 'mobile') {
      caption.innerText = 'Projektujemy sieci i obiekty związane z infrastrukturą techniczną, ze specjalizacją w sieciach zewnętrznych od 1990r.';
    } else {
      caption.innerText = 'Jesteśmy Firmą, która od 1990 r. zajmuje się projektowaniem sieci i obiektów związanych z infrastrukturą techniczną. Specjalizujemy się w projektowaniu sieci zewnętrznych: wodociągowych, gazowych, kanalizacyjnych i ciepłowniczych.';
    }
  }

  mediaQueries();


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

  // FORMULARZ KONTAKTOWY 

  

  const form = document.querySelector('form');
  const inputEmail = form.querySelector('.e-mail');
  const inputMessage = form.querySelector('.message');
  const formMessage = form.querySelector('.form-message');
  const submitBtn = form.querySelector('.btn');

  console.log (inputEmail, inputMessage, formMessage);
 
  submitBtn.onclick = function () {
    console.log('clicked, submitted');
    form.submit();
  };

  form.addEventListener('submit', e => {
    e.preventDefault();

    let formErrors = [];

    //-------------------------
    //2 etap - sprawdzamy poszczególne pola gdy ktoś chce wysłać formularz
    //-------------------------
    if (inputMessage.value.length <= 3) {
      formErrors.push('Wypełnij poprawnie pole z wiadomością');
    }

    //wyrażenie testujące maila omawiane w rozdziale o wyrażeniach regularnych

    const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    if (!reg.test(inputEmail.value)) {
      formErrors.push('Wypełnij poprawnie pole z emailem');
    }

    if (!formErrors.length) { //jeżeli nie ma błędów wysyłamy formularz
      e.target.submit();
      //...lub dynamicznie wysyłamy dane za pomocą Ajax
      //równocześnie reagując na odpowiedź z serwera
    } else {
      //jeżeli jednak są jakieś błędy...
      formMessage.innerHTML = `
            <h3 class="form-error-title">Przed wysłaniem proszę poprawić błędy:</h3>
            <ul class="form-error-list">
                ${formErrors.map(el => `<li>${el}</li>`).join('')}
            </ul>
        `;
    }
  });

};

// Later on...
myScript();