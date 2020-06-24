let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > '0') {
        counter.style.color = '#4caf50'
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = "#fff";
    }
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = 'red'
    }
    else if (counter.innerHtml === '0') {
        counter.style.color = "#fff";
    }
}

