var btnfv = document.querySelector("#btnfv");
var fv = document.querySelector("#formview");
var reset = document.querySelector("#reset");

btnfv.onclick = function () {
  fv.className = "content-overlay-active";
};

btnfv.onclick = function () {
  reset.className = "content-overlay";
};

// article
var btnfv = document.querySelector("#btnfv");
var fv = document.querySelector("#formview");

btnfv.onclick = function () {
  fv.className = "content-overlay-active";
};

document.body.className += "js-loading";
window.addEventListener("load", showPage, false);

function showPage() {
  document.body.className = document.body.className.replace("js-loading", "");
}
