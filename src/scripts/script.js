const buttonCalc = document.querySelector('#btn-calc')
const buttonClear = document.querySelector('#btn-clear')
const circularProgress = document.querySelector('.circular-progress')
const progressValue = document.querySelector('.progress-value')

let progressStartValue = 0
let progressEndValue = 0
let resultBMI = 0
const speed = 60

function infosBMI() {
    let bmiTextInfo = document.querySelector('#bmiTextInfo')
    let bmiMessage = ''
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
        circularProgress.style.background = `conic-gradient(#9166fd ${progressStartValue * 3.6}deg, #2F2E3E ${progressStartValue * 3.6}deg)`;

        if (progressStartValue >= progressEndValue) {
            clearInterval(progress);
            progressValue.textContent = resultBMI
            infosBMI()
        }
    }, speed);
}

 buttonCalc.addEventListener('click', function () {
    let height = parseFloat(document.querySelector('#height').value);
    let weight = parseFloat(document.querySelector('#weight').value);

    let calcBMI = weight / (height * height);
    const result = calcBMI.toFixed(2);

    resultBMI = calcBMI.toFixed(1)
    progressEndValue = parseFloat(result);

    startProgress();
});
