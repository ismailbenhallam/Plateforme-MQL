let proto = {
  name: "Ismaïl",
  showName: function () {
    console.log(this.name);
  },
};

let o = Object.create();
console.log(o);
