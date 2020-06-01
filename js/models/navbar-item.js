const NAVBAR_ID_SUFFIX = "-link";

const NavbarItem = function (target, name, id) {
  this.target = target;

  if (id === undefined) id = target + NAVBAR_ID_SUFFIX;

  if (id.slice(-5) != NAVBAR_ID_SUFFIX) id += NAVBAR_ID_SUFFIX;
  this.id = id;

  if (name === undefined) name = target.capitalize();
  this.name = name;
};
