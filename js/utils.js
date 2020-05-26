String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.slice(1);
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
