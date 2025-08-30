// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();
// (() => {
//   // Всі кнопки, які відкривають модалки
//   const openModalButtons = document.querySelectorAll('[data-modal-open]');
//   // Всі кнопки, які закривають модалки
//   const closeModalButtons = document.querySelectorAll('[data-modal-close]');

//   // Функція для відкриття/закриття конкретної модалки
//   function toggleModal(modalId) {
//     const modal = document.querySelector(`[data-modal="${modalId}"]`);
//     if (!modal) return;

//     const isHidden = modal.classList.contains('is-hidden');

//     modal.classList.toggle('is-hidden');

//     // Додаємо або прибираємо клас, щоб заблокувати прокрутку
//     if (isHidden) {
//       document.body.classList.add('modal-open');
//     } else {
//       document.body.classList.remove('modal-open');
//     }
//   }

//   // Додаємо слухачів на кнопки відкриття
//   openModalButtons.forEach(button => {
//     const modalId = button.getAttribute('data-modal-open');
//     button.addEventListener('click', () => toggleModal(modalId));
//   });

//   // Додаємо слухачів на кнопки закриття
//   closeModalButtons.forEach(button => {
//     const modalId = button.getAttribute('data-modal-close');
//     button.addEventListener('click', () => toggleModal(modalId));
//   });
// })();

// document.addEventListener("DOMContentLoaded", () => {
//   const openButtons = document.querySelectorAll(".open-modal");
//   const modals = document.querySelectorAll(".modal");
//   const closeButtons = document.querySelectorAll(".modal .close");

//   // Відкривання модального вікна
//   openButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const modalId = button.getAttribute("data-modal");
//       const modal = document.getElementById(modalId);
//       if (modal) modal.style.display = "block";
//     });
//   });

//   // Закривання при натисканні на хрестик
//   closeButtons.forEach((close) => {
//     close.addEventListener("click", () => {
//       close.closest(".modal").style.display = "none";
//     });
//   });

//   // Закривання при кліку поза вікном
//   window.addEventListener("click", (e) => {
//     modals.forEach((modal) => {
//       if (e.target === modal) {
//         modal.style.display = "none";
//       }
//     });
//   });
// });
!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });
  }); // end foreach

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });
}); // end ready
