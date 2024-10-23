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

function displayErrorMessage(message) {
    bmiTextInfo.textContent = message
    bmiTextInfo.classList.add('error-message')
}

function updateBMIMessage(resultBMI, category) {
    bmiMessage = `${resultBMI} está ${category}`
    bmiTextInfo.textContent = bmiMessage
}

function infosBMI() {
    if(progressEndValue <= 18.5) {
        updateBMIMessage(resultBMI, 'abaixo do normal')
    } else if (progressEndValue <=24.9) {
        updateBMIMessage(resultBMI, 'normal')
    } else if (progressEndValue <=29.9) {
        updateBMIMessage(resultBMI, 'em sobrepeso')
    } else if (progressEndValue <=34.9) {
        updateBMIMessage(resultBMI, 'em obesidade grau 1')
    } else if (progressEndValue <=39.9) {
        updateBMIMessage(resultBMI, 'em obesidade grau 2')
    } else {
        updateBMIMessage(resultBMI, 'em obesidade grau 3')
    }
}

function validadeInputs(height, weight, age) {
    if (!height || !weight || !age) {
        displayErrorMessage('*Valores não preenchidos ou incorretos!*')
        return false
    }
    return true
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

function clearFilds() {
    document.querySelector('#height').value = ''
    document.querySelector('#weight').value = ''
    document.querySelector('#age').value = ''
}

function resetProgress() {
    progressValue.textContent = '0'
    circularProgress.style.background = `conic-gradient(#9166fd   180deg, #2F2E3E 0deg);`;
    bmiTextInfo.textContent = 'Sua classificação aparece aqui!'
    bmiTextInfo.classList.remove('error-message')
    progressStartValue = 0
}

 buttonCalc.addEventListener('click', function () {
    
    let age = parseFloat(document.querySelector('#age').value);
    let height = parseFloat(document.querySelector('#height').value);
    let weight = parseFloat(document.querySelector('#weight').value);

    if(!validadeInputs(height, weight, age)) return

    let calcBMI = weight / (height * height);
    resultBMI = calcBMI.toFixed(1)
    progressEndValue = parseFloat(resultBMI);

    startProgress()

});

buttonClear.addEventListener('click', function() {
    clearFilds()
    resetProgress()
})