const url = 'https://icanhazdadjoke.com/'

const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', ()=>{
    fetchDadJoke()
})


const fetchDadJoke = async ()=>{
    result.textContent = 'Loading...'
    try {
        const response = await fetch(url, {
            headers:{
                Accept: 'application/json',
                'User-agent': 'Learning app'
            },
        })
        if(!response.ok){
            throw new Error('error') 
        }
        const data = await response.json()
        result.textContent = data.joke
    } catch (error) {
        result.textContent = 'there was en error'
    }
}

fetchDadJoke()