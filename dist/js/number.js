
function changeValue(button, delta, index) {
        const input = button.parentElement.querySelector('input[type="number"]');
        let newValue = parseInt(input.value) + delta;
        if (newValue < 0) newValue = 0; // Не допускаем отрицательных значений
        input.value = newValue;

        // Обновляем все другие поля с тем же индексом
        updateAllInputs(newValue, index);
    }

    function updateAllInputs(value, index) {
        const allInputs = document.querySelectorAll('.number[data-index="' + index + '"]');
        allInputs.forEach(input => {
            input.value = value;
        });
    }