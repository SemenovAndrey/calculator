let sin = Math.sin;
let cos = Math.cos;
let tg = Math.tan;
let sqrt = Math.sqrt;
let pow = Math.pow;
let pi = Math.PI;

function main() {
    console.log('Начало работы');

    // цвет темы
    let flagTheme = true; // true - светлая, false - тёмная

    // массив, куда сохраняются результаты
    let arrayOfEquations = [];

    // кнопка "="
    document.getElementById('equal').onclick = function() {
        console.log('Нажали кнопку "="');

        let labelEqaution = document.getElementById('labelEquation');
        let labelAnswer = document.getElementById('labelAnswer');
        let inputText = document.getElementById('inputEquation').value;
        inputText = inputText.toLowerCase();

        if (inputText !== '') {
            // добавление примера на страницу
            let equationText = inputText;
            labelEqaution.innerHTML = equationText;

            // добавление ответа на страницу
            let result;
            let finalEquation = '';
            try {
                result = eval(inputText);
                if (isNaN(result)) {
                    labelEqaution.innerHTML = 'Введено некорректное значение';
                    labelAnswer.innerHTML = '';
                    finalEquation = 'Введено некорректное значение';
                    console.log(finalEquation);
                } else {
                    labelAnswer.innerHTML = result;
                    finalEquation = equationText + ' = ' + result;
                    console.log('Ответ:', finalEquation);
                    // добавление примера и ответа в массив
                    arrayOfEquations.push(finalEquation);
                }
            } catch (e) {
                // console.log(e);
                console.log('Введено некорректное значение');
                labelEqaution.innerHTML = 'Введено некорректное значение';
                labelAnswer.innerHTML = '';
            }
        } else {
            // если поле ввода пустое
            console.log('Поле ввода пустое');
            labelEqaution.innerHTML = '';
            labelAnswer.innerHTML = '';
        }
    }

    // кнопка "Показать/скрыть историю"
    let flag = false; // true - открыта история, false - скрыта
    let divHistory = document.getElementById('historyOfEquations');
    let fieldForHistory = document.createElement('div');
    fieldForHistory.className = 'fieldForHistory';
    fieldForHistory.id = 'fieldForHistory';
    document.getElementById('buttonHistory').onclick = function() {
        let len = arrayOfEquations.length;

        // если история закрыта
        if (!flag) {
            if (len > 0) {
                divHistory.appendChild(fieldForHistory);
                let k = 1;
                for (let i = len; i > 0; i--) {
                    if (i > 1) {
                        let labelHistory = document.createElement('label');
                        labelHistory.className = 'labelHistory';
                        labelHistory.id = k;
                        labelHistory.innerHTML = arrayOfEquations[i - 1];
                        fieldForHistory.appendChild(labelHistory);
                        // console.log(arrayOfEquations[i]);
                        k += 1;
                        let hr = document.createElement('hr');
                        hr.className = 'hrHistory';
                        hr.id = k;
                        fieldForHistory.appendChild(hr);
                        k += 1;
                    } else {
                        let labelHistory = document.createElement('label');
                        labelHistory.className = 'labelHistory';
                        labelHistory.id = k;
                        labelHistory.innerHTML = arrayOfEquations[i - 1];
                        fieldForHistory.appendChild(labelHistory);
                        // console.log(arrayOfEquations[i]);
                        k += 1;
                    }
                }

                console.log('История показана');
                flag = !flag;
            } else {
                console.log('Данные либо не вносились, либо очищены');
            }
        } else {
            // если история открыта
            let k = 1;
            while (fieldForHistory.hasChildNodes()) {
                let elem = document.getElementById(k);
                elem.remove();
                k += 1;
            }
            fieldForHistory.remove();

            console.log('История скрыта');
            flag = !flag;
        }
    }

    // кнопка "Очистить историю"
    document.getElementById('buttonClearHistory').onclick = function() {
        arrayOfEquations = [];
        let k = 1;
        while (fieldForHistory.hasChildNodes()) {
            let elem = document.getElementById(k);
            elem.remove();
            k += 1;
        }
        fieldForHistory.remove();
            
        flag = false;
        console.log('История скрыта');
        console.log('История очищена');
    }

    // смена цвета
    document.getElementById('changeTheme').addEventListener('click', function() {
        if (flagTheme) {
            this.innerHTML = '&#9788;';
            document.body.style.setProperty('--bgc', 'gray');
            document.body.style.setProperty('--sbgc', 'lightgray');
            console.log('Цвет темы переключен на светлую');
        } else {
            this.innerHTML = '&#127769;';
            document.body.style.setProperty('--sbgc', 'gray');
            document.body.style.setProperty('--bgc', 'lightgray');
            console.log('Цвет темы переключен на тёмную');
        }
        flagTheme = !flagTheme;
    });
}

window.addEventListener('load', () => {
    main();
})
