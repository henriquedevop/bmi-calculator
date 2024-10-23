const buttonCalc = document.querySelector('#btn-calc')
const buttonClear = document.querySelector('#btn-clear')
const circularProgress = document.querySelector('.circular-progress')
const progressValue = document.querySelector('.progress-value')
let bmiTextInfo = document.querySelector('#bmiTextInfo')

let bmiMessage = ''
let progressStartValue = 0
let progressEndValue = 0
let resultBMI = 0
const speed = 70

function infosBMI() {
    if(progressEndValue <= 18.5) {
        bmiMessage = `${resultBMI} é abaixo do normal`
        bmiTextInfo.textContent = bmiMessage
    } else if (progressEndValue <=24.9) {
        bmiMessage = `${resultBMI} está normal!`
        bmiTextInfo.textContent = bmiMessage
    } else if (progressEndValue <=29.9) {
        bmiMessage = `${resultBMI} está em sobrepeso!`
        bmiTextInfo.textContent = bmiMessage
    } else if (progressEndValue <=34.9) {
        bmiMessage = `${resultBMI} está em obesidade grau 1!`
        bmiTextInfo.textContent = bmiMessage
    } else if (progressEndValue <=39.9) {
        bmiMessage = `${resultBMI} está em obesidade grau 2!`
        bmiTextInfo.textContent = bmiMessage
    } else {
        bmiMessage = `${resultBMI} está em obesidade grau 3!`
        bmiTextInfo.textContent = bmiMessage 
    }
}

function startProgress() {
    const progress = setInterval(() => {

        progressStartValue++;

        progressValue.textContent = `${progressStartValue}`;
        circularProgress.style.background = `conic-gradient(#9166fd ${progressStartValue * 7.2}deg, #2F2E3E ${progressStartValue * 7.2}deg)`;

        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
            progressValue.textContent = resultBMI
            progressStartValue = 0
            infosBMI()
        }
    }, speed);
}

 buttonCalc.addEventListener('click', function () {
    
    let age = parseFloat(document.querySelector('#age').value);
    let height = parseFloat(document.querySelector('#height').value);
    let weight = parseFloat(document.querySelector('#weight').value);

    if(!height || !weight || !age) {
        bmiMessage = '*Valores não preenchidos ou incorretos!*'
        bmiTextInfo.textContent = bmiMessage
        bmiTextInfo.classList.add('error-message')
        return
    }

    let calcBMI = weight / (height * height);
    const result = calcBMI.toFixed(2);

    resultBMI = calcBMI.toFixed(1)
    progressEndValue = parseFloat(result);

    startProgress()

});


buttonClear.addEventListener('click', function() {
    document.querySelector('#height').value = ''
    document.querySelector('#weight').value = ''

    progressValue.textContent = '0'

    circularProgress.style.background = `conic-gradient(#9166fd   180deg, #2F2E3E 0deg);`;

    bmiTextInfo.classList.remove('error-message')
    bmiTextInfo.textContent = 'Sua classificação aparece aqui!'

    progressStartValue = 0
})