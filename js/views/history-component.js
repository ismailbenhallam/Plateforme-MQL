const HistoryComponent = function () {
  // Select the <a> tags with "data-target" attribut
  let links = document.getElementsByTagName("a");
  let navbarLinks = [];

  for (let i = 0; i < links.length; i++) {
    if (links[i].dataset.target != null) {
      navbarLinks.push(links[i]);
    }
  }

  // Add the current page to History stack before going to a new one
  for (const link of navbarLinks) {
    link.addEventListener("click", (event) => {
      // If this event triggred from 'popstate' callback, don't do anything
      if (event.fromPopState || event.fromSearch) {
        return;
      }

      window.history.pushState(
        link.id,
        null,
        link.href ? link.href : "index.html"
      );
      event.preventDefault();
    });
  }

  // Handle "Back" action in the browser
  window.addEventListener("popstate", function (e) {
    let event = new Event("click");
    event.fromPopState = true;
    if (!e.state) {
      $(window.firstVisitedPage + NavbarComponent.LINKS_SUFFIX).dispatchEvent(
        event
      );
      // location.hash = "#" + window.firstVisitedPage;
    } else $(e.state).dispatchEvent(event);
    e.preventDefault();
  });
};
