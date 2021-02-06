const jokeElement = document.getElementById('joke')
const jokeButton = document.getElementById('jokeBtn')

jokeButton.addEventListener('click', generateJoke)

generateJoke()

// This uses ".then" in "fetch" command
// function generateJoke() {
//     const config = {
//                         headers: {
//                             'Accept': 'application/json'
//                         }
//                     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeElement.innerHTML = data.joke
//         })
// }

// Need to label function with "async" when using "await" keyword
// Sometimes called "async await"
async function generateJoke() {
    const config = {
                        headers: {
                            'Accept': 'application/json'
                        }
                    }

    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json()
    
    jokeElement.innerHTML = data.joke    
}
