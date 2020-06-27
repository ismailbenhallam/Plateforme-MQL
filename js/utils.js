String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1);
};

Date.prototype.toReadeableString = function () {
  let month;
  switch (this.getMonth()) {
    case 0:
      month = "Janvier";
      break;
    case 1:
      month = "Février";
      break;
    case 2:
      month = "Mars";
      break;
    case 3:
      month = "Avril";
      break;
    case 4:
      month = "Mai";
      break;
    case 5:
      month = "Juin";
      break;
    case 5:
      month = "Juin";
      break;
    case 6:
      month = "Juillet";
      break;
    case 7:
      month = "Août";
      break;
    case 8:
      month = "Septembre";
      break;
    case 9:
      month = "Octobre";
      break;
    case 10:
      month = "Novembre";
      break;
    case 11:
      month = "Décembre";
      break;

    default:
      month = NaN;
      break;
  }

  return `${this.getDate()} ${month} ${this.getFullYear()}`;
};

Date.prototype.DAY_IN_MILLIS = 24 * 60 * 60 * 1000;
Date.prototype.isLessThanNDays = function (n) {
  return new Date() - this < n * this.DAY_IN_MILLIS;
};

EventTarget.prototype.addMultipleEventListener = function (listener, ...types) {
  types.forEach((type) => {
    this.addEventListener(type, listener);
  });
};

const $ = (id) => document.getElementById(id);

const create = (tag) => document.createElement(tag);

const scrollTo = (element) => {
  element.scrollIntoView({ behavior: "auto", block: "start" });
};

const getCurrentPageId = () => location.hash.slice(1);

const NOTIF_ANIMATION_DURATION = 500;
const showNotif = function (message, delay = 3000) {
  let snackbar = create("div");
  snackbar.id = "snackbar";

  // Add the "show" class to DIV
  snackbar.textContent = message;
  snackbar.style.animation = `fadein ${
    NOTIF_ANIMATION_DURATION / 1000
  }s, fadeout ${NOTIF_ANIMATION_DURATION / 1000}s ${delay / 1000}s`;
  snackbar.style.webkitAnimation = `fadein ${
    NOTIF_ANIMATION_DURATION / 1000
  }s, fadeout ${NOTIF_ANIMATION_DURATION / 1000}s ${delay / 1000}s`;

  document.body.appendChild(snackbar);

  snackbar.style.marginLeft = -snackbar.offsetWidth / 2 + "px";

  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  // setTimeout(function () {
  //   snackbar.classList.remove("show");
  // }, delay + 500);
  setTimeout(function () {
    document.body.removeChild(snackbar);
  }, delay + 500);
};
