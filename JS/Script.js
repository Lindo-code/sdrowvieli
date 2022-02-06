function barFunction() {
  let x = document.getElementById("menu");
  if(x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}