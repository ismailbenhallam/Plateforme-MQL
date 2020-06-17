const NavbarService = function (NavbarItemsArray) {
  this.items = [];

  NavbarItemsArray.forEach((i) => {
    this.items.push(new NavbarItem(i.target, i.name, i.id, i.children));
  });
};
