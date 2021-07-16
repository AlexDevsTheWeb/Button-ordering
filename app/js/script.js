function changeClass(ctrl) {
  var x = document.getElementById(ctrl).classList;
  if (x.contains("testo-up")) {
    x.remove("testo-up");
    x.add("testo-down");
  }
  else {
    x.add("testo-up");
    x.remove("testo-down");
  }
}