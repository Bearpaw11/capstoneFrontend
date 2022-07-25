let addWish = document.getElementById("addWish");
addWish.addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Enterd values are " + e.target[0].value + " " + " " + e.target[1].value + " " + e.target[2].value + " " + e.target[3].value)
  location.href="../html/mainUser.html"
  e.target.reset();

});