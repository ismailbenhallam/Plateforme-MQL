let SelectComponent = function () {
  /* Look for any elements with the class "custom-select":*/
  let selectElementWrappers = document.getElementsByClassName("custom-select");
  for (let i = 0; i < selectElementWrappers.length; i++) {
    let selectElement = selectElementWrappers[i].getElementsByTagName(
      "select"
    )[0];

    /* Hide original 'Select' element */
    selectElement.style.display = "none";

    /* For each element, create a new DIV that will act as the selected item */
    let div1 = create("div");
    div1.classList.add("select-selected");
    div1.innerHTML =
      selectElement.options[selectElement.selectedIndex].innerHTML;
    selectElementWrappers[i].appendChild(div1);

    /* For each element, create a new DIV that will contain the option list */
    div2 = create("div");
    div2.classList.add("select-items", "select-hide");
    for (let j = 0; j < selectElement.length; j++) {
      /* For each option in the original select element, create a new DIV that will act as an option item */
      div3 = create("div");
      div3.innerHTML = selectElement.options[j].innerHTML;
      div3.addEventListener("click", function (e) {
        /*when an item is clicked, update the original select box,
          and the selected item:*/
        let h = this.parentNode.previousSibling;
        for (let i = 0; i < selectElement.length; i++) {
          if (selectElement.options[i].innerHTML == this.innerHTML) {
            selectElement.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            let selectedBeforeClick = this.parentNode.getElementsByClassName(
              "same-as-selected"
            );
            for (let k = 0; k < selectedBeforeClick.length; k++) {
              selectedBeforeClick[k].removeAttribute("class");
            }
            this.classList.add("same-as-selected");
            break;
          }
        }
        h.click();
        selectElement.value = selectElement.options[j].value;
        selectElement.dispatchEvent(new Event("change"));
      });
      div2.appendChild(div3);
    }
    selectElementWrappers[i].appendChild(div2);
    div1.addEventListener("click", function (e) {
      /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
};
