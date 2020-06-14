const AnnonceComponent = function (service) {
  let slideWrapper = $("slide-wrapper");
  let annoncesWrapper = $("annonces-wrapper");
  this.slides = [];
  this.slideIndex = 0;

  if (service.items.length == 0) {
    slideWrapper.parentElement.style.display = "none";
    annoncesWrapper.style.display = "none";
  }

  // Nombre max d'annonces afficher dans le "slider"
  this.nbrAnnonces = Math.min(this.NBR_ANNONCES, service.items.length);

  // Slides
  for (let i = 0; i < this.nbrAnnonces; i++) {
    let a = service.items[i];
    let sliderItem = create("div");
    sliderItem.style.display = "none";
    this.slides.push(sliderItem);
    sliderItem.classList.add("mySlides", "fade");
    let sliderItemLink = create("a");
    sliderItem.appendChild(sliderItemLink);
    sliderItemLink.textContent = a.genre + " - " + a.nom;
    if (a.link) {
      sliderItemLink.href = a.link;
      sliderItemLink.classList.add("has-link");
    }
    slideWrapper.appendChild(sliderItem);
  }

  // Annonces div
  for (let i = 0; i < this.slides.length; i++) {
    let a = service.items[i];
    let annonce = create("div");
    annoncesWrapper.appendChild(annonce);
    annonce.classList.add("annonce");

    let annonceDetails = create("a");
    annonce.appendChild(annonceDetails);
    annonceDetails.classList.add("annonce-details");
    annonceDetails.textContent = a.genre + " - " + a.nom;
    if (a.link) {
      annonceDetails.href = a.link;
      annonceDetails.classList.add("has-link");
    }

    let annonceDate = create("span");
    annonce.appendChild(annonceDate);
    annonceDate.classList.add("annonce-date");
    annonceDate.textContent = a.date.toReadeableString();
  }

  this.slides[this.slideIndex].style.display = "block";

  // Previous and Next buttons
  let prevSlider = create("a");
  slideWrapper.appendChild(prevSlider);
  prevSlider.classList.add("prev");
  prevSlider.innerHTML = "&#10094;";
  prevSlider.addEventListener("click", this.showPreviousSlide.bind(this));
  let nextSlider = create("a");
  slideWrapper.appendChild(nextSlider);
  nextSlider.classList.add("next");
  nextSlider.innerHTML = "&#10095;";
  nextSlider.addEventListener("click", this.showNextSlide.bind(this));

  /*
  <div class="annonce">
    <span class="annonce-details">
      Inscription - Ouverture d'inscription MQL 2020/2021</span>
    <span class="annonce-date">2020 Aout 15</span>
  </div>
  */
  if (this.nbrAnnonces > 1)
    window.setTimeout(this.infinitShowSlides.bind(this), this.DELAY);
};

// Constantes
AnnonceComponent.prototype.DELAY = 5000;
AnnonceComponent.prototype.NBR_ANNONCES = 5;

// Methods
AnnonceComponent.prototype.infinitShowSlides = function () {
  this.showNextSlide();
  window.setTimeout(this.infinitShowSlides.bind(this), this.DELAY); // Change text every 3 seconds
};

AnnonceComponent.prototype.showNextSlide = function () {
  this.slides[this.slideIndex].style.display = "none";
  this.slideIndex++;
  if (this.slideIndex >= this.nbrAnnonces) {
    this.slideIndex = 0;
  }
  this.slides[this.slideIndex].style.display = "block";
};

AnnonceComponent.prototype.showPreviousSlide = function () {
  this.slides[this.slideIndex].style.display = "none";
  this.slideIndex--;
  if (this.slideIndex < 0) {
    this.slideIndex = this.nbrAnnonces - 1;
  }
  this.slides[this.slideIndex].style.display = "block";
};
