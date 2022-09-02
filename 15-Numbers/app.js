const items = [...document.querySelectorAll('.number')]

const updateCount = (el) =>{
    const value = parseInt(el.dataset.value);
    const increament = Math.ceil(value/1000);

    let initialValue = 0;
    
    const increaseCount = setInterval(() => {
        initialValue += increament;

        if(initialValue > value){
            el.textContent = `${value}+`;
            clearInterval(increaseCount)
            return;
        }
        el.textContent = `${initialValue}+`
    }, 1)
};

items.forEach( (number)=>{
    updateCount(number)
})