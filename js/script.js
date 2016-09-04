var link = document.querySelector(".booking-btn");
var popup = document.querySelector(".booking-form");
var send = document.querySelector(".booking-form-search-btn");
link.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("booking-form-show")) {
    popup.classList.remove("booking-form-show");
    popup.classList.add("booking-form-hide");
  } else {
    popup.classList.remove("booking-form-hide");
    popup.classList.remove("booking-form-send");
    popup.classList.add("booking-form-show");
  }
});
send.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("booking-form-send");
  setTimeout(function(event) {popup.classList.remove("booking-form-show");
}, 500);
});
