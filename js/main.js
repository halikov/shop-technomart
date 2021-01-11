/*
  карточка товара , в закладки модальное окно
*/

var productList = document.querySelectorAll('.products-list-item');
var bookmarkLabel = document.querySelector('.header-bookmarks');
var bookmarkCount = bookmarkLabel.querySelector('.bookmarks-count');

for (var i = 0; i < productList.length; i++) {
  var product = productList[i];
  var bookmarkBtn = product.querySelector('.bookmark');

  bookmarkBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    bookmarkLabel.classList.add('header-bookmarks-bg');
    bookmarkCount.textContent++;
  });
}


var basket = document.querySelector('.basket');
var basketCount = basket.querySelector('.basket-count');

var cartPopup = document.querySelector('.modal-cart-added');
var continueBtn = cartPopup.querySelector('.continue-shopping');
var cartPopupClose = cartPopup.querySelector('.modal-close');

for (var i = 0; i < productList.length; i++) {
  var product = productList[i];
  var shopping = product.querySelector('.buy');

  shopping.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.add('modal-show');
    basket.classList.add('basket-bg');
    basketCount.textContent++;
  });
}

continueBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});

cartPopupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});

// модальное окно карты и формы обратной связи

var openBtn = document.querySelector('.modal-open');

var popup = document.querySelector('.modal-feedback');
var close = popup.querySelector('.modal-close');

var form = popup.querySelector('form');
var username = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]');
var comment = popup.querySelector('textarea');

var isStorage = true;
var storage = '';
var storageEmail = '';

try {
  storage = localStorage.getItem('username');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}


openBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  username.focus();
  if (storage) {
    username.value = storage;
    email.focus();
  } else if (storageEmail) {
    email.value = storageEmail;
    comment.focus();
  } else {
    username.focus;
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show', 'modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!username.value || !email.value || !comment.value) {
    evt.preventDefault();
    console.log('Нужно ввести имя, почту и текст письма.')
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('username', username.value);
    }
  }
});

var mapLink = document.querySelector('.map-service_link');
var mapPopup = document.querySelector('.modal-map-big');
var mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keycode === 27) {
    if (popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classlist.remove('modal-show');
    }
  }
})

// slider

var slider = document.querySelector('.slider');
var sliderDot1 = slider.querySelector('.slide1');
var sliderDot2 = slider.querySelector('.slide2');
var slideItem1 = slider.querySelector('#slide-item-1');
var slideItem2 = slider.querySelector('#slide-item-2');

sliderDot1.addEventListener('click', function (evt) {
  // evt.preventDefault();
  slideItem2.classList.remove('slide-item-hide');
  slideItem1.classList.add('slide-item-hide');
});

sliderDot2.addEventListener('click', function (evt) {
  //evt.preventDefault();
  slideItem1.classList.remove('slide-item-hide');
  slideItem2.classList.add('slide-item-hide');
});

// services slider

var servicesSlider = document.querySelector('.services-slider');
var slideBtn1 = servicesSlider.querySelector('.input-delivery');
var slideBtn2 = servicesSlider.querySelector('.input-assurance');
var slideBtn3 = servicesSlider.querySelector('.input-credit');
var slideDelivery = servicesSlider.querySelector('.delivery-content');
var slideAssurance = servicesSlider.querySelector('.assurance-content');
var slideCredit = servicesSlider.querySelector('.credit-content');

slideBtn1.addEventListener('click', function (evt) {
  //evt.preventDefault();
  slideDelivery.classList.remove('services-slide-hide');
  slideAssurance.classList.add('services-slide-hide');
  slideCredit.classList.add('services-slide-hide');
});

slideBtn2.addEventListener('click', function (evt) {
  //evt.preventDefault();
  slideAssurance.classList.remove('services-slide-hide');
  slideDelivery.classList.add('services-slide-hide');
  slideCredit.classList.add('services-slide-hide');
});

slideBtn3.addEventListener('click', function (evt) {
  //evt.preventDefault();
  slideCredit.classList.remove('services-slide-hide');
  slideAssurance.classList.add('services-slide-hide');
  slideDelivery.classList.add('services-slide-hide');
});
