function getElement(selected){
    const element = document.querySelector(selected);
    if(element){
        return element;
    }
    throw new Error(
        `Please check"${selected}" selector, no such element exists`
    )
}

class Counter{
    constructor(element, value){
        this.counter = element;
        this.value = value;

        this.increaseBtn = element.querySelector(".increase");
        this.decreaseBtn = element.querySelector(".decrease");
        this.resetBtn = element.querySelector(".reset");
        this.valueDOM = element.querySelector(".value");
        this.valueDOM.textContent = this.value;

        // bind this to all functions
        this.increase = this.increase.bind(this);
        this.increase = this.increase.bind(this);
        this.reset = this.reset.bind(this);

        this.increaseBtn.addEventListener("click", this.increase);
        this.decreaseBtn.addEventListener("click", this.decrease);
        this.resetBtn.addEventListener("click", this.reset);
        

    }

    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
    }

    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
    }

    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }
}

const firstCounter = new Counter(getElement(".first-counter"), 100)