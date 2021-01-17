const modals = function () {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = modal.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
        }

        modal.classList.add('modal-show');
        document.body.style.overflow = 'hidden';
      });
    });

    close.addEventListener('click', function (e) {
      if (e.target) {
        e.preventDefault();
      }

      modal.classList.remove('modal-show');
      document.body.style.overflow = '';
    });
  }

  bindModal('.buy', '.modal-cart-added', '.modal .modal-close');
  bindModal('.buy', '.modal-cart-added', '.modal .continue-shopping');
  bindModal('.map-service_link', '.modal-map-big', '.modal .modal-close');
  bindModal('.button_write-us', '.modal-feedback', '.modal .modal-close');

};

modals();
