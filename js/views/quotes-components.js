const QuoteComponent = function (service) {
  this.laureats = [];
  this.wrapper = $("blockquote-wrapper");

  // Filter the laureates who have a quote
  this.laureats = service.items.filter((l) => {
    if (l.quote) return true;
    return false;
  });

  // If no laureate has a quote
  if (this.laureats.length == 0) {
    this.wrapper.style.display = "none";
    return;
  }

  this.wrapper.classList.add("blockquote-wrapper", "top-content");

  // Previous icon
  if (this.laureats.length > 0) {
    this.quoteIndex = 0;

    let prev = create("a");
    prev.className = "prev";
    prev.innerHTML = "❮";
    this.wrapper.appendChild(prev);

    // Add listener
    prev.addEventListener("click", () => {
      this.showPreviousQuote();
    });
  }

  let l = this.laureats[0];

  // A wrapper
  let block = create("div");
  block.className = "blockquote";

  // The quote
  let h2 = create("h2");
  h2.innerHTML = l.quote;
  this.quote = h2;
  block.appendChild(h2);

  // The laureate
  let h4 = create("h4");
  this.quoteCaption = h4;
  h4.innerHTML = `&mdash;${l.nom} ${l.prenom} <em>Lauréat promotion ${l.promotion}</em>`;
  block.appendChild(h4);

  this.wrapper.appendChild(block);

  // Next icon
  if (this.laureats.length > 0) {
    let next = create("a");
    next.className = "next";
    // next.style["margin-right"] = "18rem";
    next.innerHTML = "❯";
    this.wrapper.appendChild(next);
    next.addEventListener("click", () => {
      this.showNextQuote();
    });
  }

  this.setUpInterval();
};

// Contantes
QuoteComponent.prototype.DELAY = 10000;

// Methodes
QuoteComponent.prototype.updateQuote = function () {
  let l = this.laureats[this.quoteIndex];
  this.quote.innerHTML = l.quote;
  this.quoteCaption.innerHTML = `&mdash;${l.nom} ${l.prenom} <em>Lauréat promotion ${l.promotion}</em>`;
};

QuoteComponent.prototype.setUpInterval = function () {
  if (this.laureats.length > 1)
    this.interval = window.setInterval(() => {
      this.showNextQuote.call(this);
    }, this.DELAY);
};

QuoteComponent.prototype.showNextQuote = function () {
  // to restart the counter : clearInterval and set it again in the end of this function
  window.clearInterval(this.interval);
  this.quoteIndex++;
  if (this.quoteIndex >= this.laureats.length) {
    this.quoteIndex = 0;
  }

  this.updateQuote();

  this.setUpInterval();
};

QuoteComponent.prototype.showPreviousQuote = function () {
  // to restart the counter : clearInterval and set it again in the end of this function
  window.clearInterval(this.interval);

  this.quoteIndex--;
  if (this.quoteIndex < 0) {
    this.quoteIndex = this.laureats.length - 1;
  }

  this.updateQuote();

  this.setUpInterval();
};
