document.addEventListener('DOMContentLoaded', function() {
    // Открытие модального окна при клике на изображение
    document.querySelectorAll('.mainImage').forEach(img => {
      img.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.remove('hidden');
        }
      });
    });

    // Функция закрытия модального окна
    window.closeModal = function(modalId) {
      document.getElementById(modalId).classList.add('hidden');
    }

    // Закрытие модального окна при клике вне его содержимого
    document.querySelectorAll('.modal-window').forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === this) {
          this.classList.add('hidden');
        }
      });
    });

    // Бургер-меню: переключение мобильного меню
    const burgerButton = document.getElementById('burgerButton');
    const mobileMenu = document.getElementById('mobileMenu');
    burgerButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  });