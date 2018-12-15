var bookmarked = document.querySelector('.bookmark');
var bookmarkCount = document.querySelector('.bookmark-count');

var shopping = document.querySelector('.buy');
var basketCount = document.querySelector('.basket-count');

var cartPopup = document.querySelector('.modal-cart-added');
var continueBtn = cartPopup.querySelector('.continue-shopping');
var cartPopupClose = cartPopup.querySelector('.modal-close');

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
} catch(err) {
  isStorageSupport = false;
}

bookmarked.addEventListener('click', function(evt) {
  evt.preventDefault();
  for(var i = 0; i++;) {
    bookmarkCount.textContent = i;
  }
});

shopping.addEventListener('click', function(evt) {
  evt.preventDefault();
  for(var i = 0; i++;) {
    basketCount.textContent = i;
    console.log('Товаров в корзине' + i);
  }
  cartPopup.classList.add('modal-show');
});

continueBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});

cartPopupClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});

openBtn.addEventListener('click', function(evt) {
  evt.preventDefault(); 
  popup.classList.add('modal-show');
  username.focus();
  if(storage) {
    username.value = storage;
    email.focus();
  } else if(storageEmail) {
    email.value = storageEmail;
    comment.focus();
  } else {
    username.focus;
  }
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});

form.addEventListener('submit', function(evt) {
  if(!username.value || !email.value || !comment.value) {
    evt.preventDefault();
    console.log('Нужно ввести имя, почту и текст письма.')
    popup.classList.add('modal-error');
  } else {
    if(isStorageSupport) {
      localStorage.setItem('username', usename.value);
    }
  }
});

var mapLink = document.querySelector('.map-service_link');
var mapPopup = document.querySelector('.modal-map-big');
var mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if(evt.keycode === 27) {
    if(popup.classList.contains('modal-show')) {
      evt.preventDefault();
      popup.classlist.remove('modal-show');
    }
  }
})


