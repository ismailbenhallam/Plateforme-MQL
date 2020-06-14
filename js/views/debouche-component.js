const DeboucheComponent = function (service) {
  let ul = $("debouches");
  for (const item of service.items) {
    let imgNext = create("img");
    imgNext.setAttribute("src", "icons/nextRed.png");
    let li = create("li");
    li.style.listStyle = "none";
    let span = create("SPAN");
    span.textContent = " " + item.role;
    li.appendChild(imgNext);
    li.appendChild(span);
    ul.appendChild(li);
  }
};