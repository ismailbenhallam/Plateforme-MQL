String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1);
};

const toReadeableString = function (date) {
  let month;
  switch (date.getMonth()) {
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
      month = "Maï";
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

  return `${date.getDate()} ${month} ${date.getFullYear()}`;
};

// const addContentCharByChar = function (
//   HTMLElement,
//   content,
//   delayBetweenCharacters = 35
// ) {
//   HTMLElement.contentText = "";
//   for (const index in content) {
//     setTimeout(function () {
//       HTMLElement.insertAdjacentText("beforeend", content[index]);
//     }, delayBetweenCharacters * index);
//   }
// };
