const NAVBAR_ID_SUFFIX = "-link";

const NavbarItem = function (target, name, id, children) {
  this.target = target;

  if (id === undefined) id = target + NAVBAR_ID_SUFFIX;

  if (id.slice(-5) != NAVBAR_ID_SUFFIX) id += NAVBAR_ID_SUFFIX;
  this.id = id;

  if (name === undefined) name = target.capitalize();
  this.name = name;

  this.children = [];
  if (children !== undefined && children !== null) {
    children.forEach((item) => {
      this.children.push(new NavbarItem(item.target, item.name, item.id, null));
    });
  }
};
