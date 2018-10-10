var gridSupport = document.querySelector(".grid-support");

var SupportsCSS = function(property, value) {
  var element = document.createElement("span");
  if (element.style[property] !== undefined)
    element.style.cssText = property + ":" + value;
  else return false;
  return element.style[property] === value;
};

if (!SupportsCSS("display", "grid")) {
  gridSupport.textContent =
    "Sorry your browser not support Grids Layout. Try Chrome or Firefox";
}
