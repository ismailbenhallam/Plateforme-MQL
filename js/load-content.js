function loadContent(event) {
  let id = event.target.id;
  if (id) {
    document.getElementById("main").innerHTML =
      '<iframe src="' +
      id +
      '.html" width="100%" style="border-width: 0px";></iframe >';
    // '<object type="text/html" data="' + id + '.html" ></object>';
  } else {
    console.log("nothing");
  }
}
