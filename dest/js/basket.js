const counters = function () {
  function btnClickCounter(btnsSelector, divSelector, divQuantitySelector) {
    const btns = document.querySelectorAll(btnsSelector),
      div = document.querySelector(divSelector),
      divQuantity = document.querySelector(divQuantitySelector);
    let counter = 0;

    btns.forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
        }

        div.style.backgroundColor = 'red';
        divQuantity.textContent = ++counter;
      });
    });
  }

  btnClickCounter('.buy', '.basket', '.header__basket-count');
  btnClickCounter('.bookmark', '.header__bookmarks', '.header__bookmarks-count');
};
counters();
