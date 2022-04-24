const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};


const dcrmntBtn = document.querySelector('.js-decrement');
console.log(dcrmntBtn)

const incrmntBtn = document.querySelector('.js-increment');
console.log(incrmntBtn)

const valueEl =document.querySelector('.js-value')
console.log(valueEl)

dcrmntBtn.addEventListener('click', function (){
    console.log('Click')

    counter.decrement();
    console.log(counter)

    valueEl.textContent = counter.value;
});

incrmntBtn.addEventListener('click', function (){
    console.log('Click')

    counter.increment();
    console.log(counter)

    
    valueEl.textContent = counter.value;
});