var feedbackBtn = document.querySelector(".button_write-us");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

feedbackBtn.addEventListener("click", function(evt) {
  evt.perventDefault();
  popup.classList.add("modal-feedback-show");
  userName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback-show");
});

form.addEventListener("submit", function(evt) {
  if(!userName.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и email!");
  }
});
