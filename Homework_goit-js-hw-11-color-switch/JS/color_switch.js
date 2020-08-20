const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {

    buttonStart: document.querySelector('button[data-action="start"]'),
    buttonStop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')

};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

const startInterval = () => {
    refs.buttonStart.disabled = true;
    intervalId = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length - 1);
        refs.body.style.backgroundColor = colors[randomColor];
    }, 1000);
};

const stopInterval = () => {
    refs.buttonStart.disabled = false;
    clearInterval(intervalId);
};

refs.buttonStart.addEventListener('click', startInterval);
refs.buttonStop.addEventListener('click', stopInterval);