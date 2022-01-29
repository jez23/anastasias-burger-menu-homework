"use strict";

var burgerMenuDivs = document.querySelectorAll(".burger-menu__dropdown div");
burgerMenuDivs.forEach(function (div) {
  div.addEventListener("click", function () {
    burgerMenuDivs.forEach(function (div) {
      return div.classList.remove("active");
    });
    div.classList.add("active");
  });
});
//# sourceMappingURL=script.js.map
