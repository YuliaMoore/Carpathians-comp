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
(() => {
  // Всі кнопки, які відкривають модалки
  const openModalButtons = document.querySelectorAll('[data-modal-open]');
  // Всі кнопки, які закривають модалки
  const closeModalButtons = document.querySelectorAll('[data-modal-close]');

  // Функція для відкриття/закриття конкретної модалки
  function toggleModal(modalId) {
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (!modal) return;

    const isHidden = modal.classList.contains('is-hidden');

    modal.classList.toggle('is-hidden');

    // Додаємо або прибираємо клас, щоб заблокувати прокрутку
    if (isHidden) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  // Додаємо слухачів на кнопки відкриття
  openModalButtons.forEach(button => {
    const modalId = button.getAttribute('data-modal-open');
    button.addEventListener('click', () => toggleModal(modalId));
  });

  // Додаємо слухачів на кнопки закриття
  closeModalButtons.forEach(button => {
    const modalId = button.getAttribute('data-modal-close');
    button.addEventListener('click', () => toggleModal(modalId));
  });
})();

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
