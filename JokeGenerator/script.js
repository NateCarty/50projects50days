const jokeElement = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    const headerConfig = {
        headers: {
            'Accept': 'application/json'
        }
    }
    
    const response = await fetch('https://icanhazdadjoke.com', headerConfig)
    const data = await response.json()
    jokeElement.innerHTML = data.joke
}

// function generateJoke() {
//     const headerConfig = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', headerConfig)
//     .then(response => response.json())
//     .then(data => {
//         jokeElement.innerHTML = data.joke
//     })
// }