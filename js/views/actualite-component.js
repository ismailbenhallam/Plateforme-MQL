const ActualiteComponent = function (service) {
  let slideWrapper = $("slide-wrapper");
  this.slides = [];
  this.slideIndex = 0;

  if (service.items.length == 0) {
    slideWrapper.parentElement.style.display = "none";
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

  if (this.nbrAnnonces > 1)
    window.setTimeout(this.infinitShowSlides.bind(this), this.DELAY);
};

// Constantes
ActualiteComponent.prototype.DELAY = 5000;
ActualiteComponent.prototype.NBR_ANNONCES = 3;

// Methods
ActualiteComponent.prototype.infinitShowSlides = function () {
  this.showNextSlide();
  window.setTimeout(this.infinitShowSlides.bind(this), this.DELAY);
};

ActualiteComponent.prototype.showNextSlide = function () {
  this.slides[this.slideIndex].style.display = "none";
  this.slideIndex++;
  if (this.slideIndex >= this.nbrAnnonces) {
    this.slideIndex = 0;
  }
  this.slides[this.slideIndex].style.display = "block";
};

ActualiteComponent.prototype.showPreviousSlide = function () {
  this.slides[this.slideIndex].style.display = "none";
  this.slideIndex--;
  if (this.slideIndex < 0) {
    this.slideIndex = this.nbrAnnonces - 1;
  }
  this.slides[this.slideIndex].style.display = "block";
};
