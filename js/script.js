var buttonOpen = document.querySelector(".open-popup");
var popup = document.querySelector(".modal-write-us");
var buttonClose = document.querySelector(".button-close");
var form = popup.querySelector("form");
var login = popup.querySelector([name="login"]);
var email = popup.querySelector([name="comment"]);

buttonOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  console.log(login.value);
  console.log(email.value);
});
