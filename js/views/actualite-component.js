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

    // If the 'actualité' is new, add a label ("Nouveau !")
    if (a.date.isLessThanNDays(this.SHOW_NEW_NBR_DAYS)) {
      let newImg = document.createElement("img");
      newImg.src = this.IMAGE_NEW;
      sliderItem.appendChild(newImg);
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

  this.setInterval();
};

// Constantes
ActualiteComponent.prototype.DELAY = 4000;
ActualiteComponent.prototype.NBR_ANNONCES = 3;
ActualiteComponent.prototype.SHOW_NEW_NBR_DAYS = 5;
ActualiteComponent.prototype.IMAGE_NEW = "images/nouveau.png";

// Methods
ActualiteComponent.prototype.setInterval = function () {
  if (this.nbrAnnonces > 1)
    this.interval = window.setInterval(() => {
      this.showNextSlide.call(this);
    }, this.DELAY);
};

ActualiteComponent.prototype.showNextSlide = function () {
  // to restart the counter : clearInterval and set it again in the end of this function
  window.clearInterval(this.interval);

  this.slides[this.slideIndex].style.display = "none";
  this.slideIndex++;
  if (this.slideIndex >= this.nbrAnnonces) {
    this.slideIndex = 0;
  }
  this.slides[this.slideIndex].style.display = "block";

  this.setInterval();
};

ActualiteComponent.prototype.showPreviousSlide = function () {
  // to restart the counter : clearInterval and set it again in the end of this function
  window.clearInterval(this.interval);

  this.slides[this.slideIndex].style.display = "none";
  this.slideIndex--;
  if (this.slideIndex < 0) {
    this.slideIndex = this.nbrAnnonces - 1;
  }
  this.slides[this.slideIndex].style.display = "block";

  this.setInterval();
};
