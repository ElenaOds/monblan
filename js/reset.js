(() => {
    const input = document.querySelector('.date-input');
    const endDateInput = document.querySelector('.end-date-input');
    const button = document.querySelector('.reset');
    const endDateButton = document.querySelector('.reset-btn');

    button.addEventListener("click", function () {
        input.value = '';
    });

    endDateButton.addEventListener("click", function () {
        endDateInput.value = '';
    });
  })();