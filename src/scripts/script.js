let circularProgress = document.querySelector('.circular-progress')
let progressValue = document.querySelector('.progress-value')

let progressStartValue = 0
let progressEndValue = 21
let speed = 60

 let progress = setInterval(() => {
    progressStartValue++

    progressValue.textContent = `${progressStartValue}`
    circularProgress.style.background = `conic-gradient(#9166fd ${progressStartValue * 7.2}deg, #2F2E3E ${progressStartValue * 7.2}deg)`;

    if(progressStartValue === progressEndValue) {
        clearInterval(progress)
    }
    
 }, speed);

