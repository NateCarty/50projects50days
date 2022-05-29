const jokeElement = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const headerConfig = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', headerConfig)
    .then(response => response.json())
    .then(data => {
        jokeElement.innerHTML = data.joke
    })
}