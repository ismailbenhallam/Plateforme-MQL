const DeboucheComponent = function (service) {
  let ul = document.getElementById("debouches");
  for (const item of service.items) {
    let li = document.createElement("li");
    li.textContent = item.role;
    ul.appendChild(li);
  }
};
