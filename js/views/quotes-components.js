// FIXME: Khadija
const QuoteComponent = function (service) {
  this.laureats = [];
  this.wrapper = $("blockquote-wrapper");

  // Filter the laureates who have a quote
  this.laureats = service.items.filter((l) => {
    if (l.quote) return true;
    return false;
  });

  // If no laureate has a quote, exit
  if (this.laureats.length == 0) {
    this.wrapper.style.display = "none";
    return;
  }

  this.wrapper.classList.add("blockquote-wrapper");

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

  /*
<div class="quote-content">
  <div class="quote-text">
      <img src="../images/dbQt5.png" class="img1">
      <div class="quote-details">
          <h3>Quote the day</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
              book.</p>
      </div>
  </div>
  <img src="../images/dbQt5.png" class="img2">
</div>
*/

  let l = this.laureats[0];

  // quote-content
  let content = create("div");
  content.className = "quote-content";

  // quote-text
  let quoteText = create("div");
  quoteText.className = "quote-text";
  content.appendChild(quoteText);

  // img1
  let img1 = create("img");
  quoteText.appendChild(img1);
  // FIXME: Khadija
  img1.src = "images/dbQt5.png";
  img1.className = "img1";

  // quote-details
  let quoteDetails = create("div");
  quoteDetails.className = "quote-details";
  quoteText.appendChild(quoteDetails);

  // h3
  let h3 = create("h3");
  h3.innerHTML = `&mdash;${l.nom} ${l.prenom} <em>Lauréat promotion ${l.promotion}</em>`;
  this.quoteCaption = h3;
  quoteDetails.appendChild(h3);

  // p
  let p = create("p");
  p.innerHTML = l.quote;
  this.quote = p;
  quoteDetails.appendChild(p);

  this.wrapper.appendChild(content);

  // img2
  let img2 = create("img");
  quoteText.appendChild(img2);
  // FIXME: Khadija
  img2.src = "images/dbQt5.png";
  img2.className = "img2";

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
  //   this.updateQuote();
};

// Contantes
QuoteComponent.prototype.DELAY = 5000;

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
