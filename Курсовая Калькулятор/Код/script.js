let sin = Math.sin;
let cos = Math.cos;
let tg = Math.tan;
let ctg = 1 / Math.tan;
let sqrt = Math.sqrt;
let pow = Math.pow;

function main() {
    console.log('Начало работы');
    console.log('-----');

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
                    console.log('Ответ:', finalEquation);
                    console.log('-----');
                } else {
                    labelAnswer.innerHTML = result;
                    finalEquation = equationText + ' = ' + result;
                    console.log('Ответ:', finalEquation);
                    console.log('-----');
                    // добавление примера и ответа в массив
                    arrayOfEquations.push(finalEquation);
                }
            } catch (e) {
                // console.log(e);
                console.log('Введено некорректное значение');
                console.log('-----');
                labelEqaution.innerHTML = 'Введено некорректное значение';
                labelAnswer.innerHTML = '';
            }
        } else {
            // если поле ввода пустое
            console.log('Поле ввода пустое');
            console.log('-----');
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
                for (let i = 0; i < len; i++) {
                    let labelHistory = document.createElement('label');
                    labelHistory.className = 'labelHistory';
                    labelHistory.id = k;
                    labelHistory.innerHTML = arrayOfEquations[i];
                    fieldForHistory.appendChild(labelHistory);
                    // console.log(arrayOfEquations[i]);
                    k += 1;
                }
                // console.log('-----');

                console.log('История показана');
                console.log('-----');
                flag = true;
            } else {
                console.log('Данные либо не вносились, либо очищены');
                console.log('-----');
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
            console.log('-----');
            flag = false;
        }
    }

    document.getElementById('buttonClear').onclick = function() {
        console.log('-');
    }

    // кнопка "Очистить историю"
    document.getElementById('buttonClear').onclick = function() {
        console.log('-');
        arrayOfEquations = [];
        // let len = arrayOfEquations.length;
        /*if (len > 0) {
            for (let i = 0; i < len; i++) {
                arrayOfEquations.pop();
            }
        }*/

        console.log('-----');
        console.log('История очищена');
        console.log('-----');
    }
}

window.addEventListener('load', () => {
    main();
})
