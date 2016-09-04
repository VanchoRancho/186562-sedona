var link = document.querySelector(".booking-search-btn");
var popup = document.querySelector(".booking-search-form");
var send = document.querySelector(".booking-search-form-btn");
link.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("booking-search-form-show")) {
    popup.classList.remove("booking-search-form-show");
    popup.classList.add("booking-search-form-hide");
  } else {
    popup.classList.remove("booking-search-form-hide");
    popup.classList.remove("booking-search-form-send");
    popup.classList.add("booking-search-form-show");
  }
});
send.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("booking-search-form-send");
  setTimeout(function(event) {popup.classList.remove("booking-search-form-show");
}, 500);
});
