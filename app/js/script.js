function changeClass() {
  var x = document.getElementById("button").className;
  if (x == "testo-up") {
    x.classList.add("testo-down");
  }
  else {
    x.classList.remove("testo-down");
  }
}