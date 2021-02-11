const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    // Check to see if user hits enter
    if(e.key === 'Enter') {
        // Clear the input - so wait before doing so
        setTimeout(() => {e.target.value = ''}, 10)
        randomSelect()
    }
})

function createTags(input) {
    // console.log(input)
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    // console.log(tags)
    tagsElement.innerHTML = ''
    tags.forEach(tag => {
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerText = tag
        tagsElement.appendChild(tagElement)
    })
}

function randomSelect() {
    // console.log(123)
    const times = 30 // Number of times it highlights possible choices before choosing
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100);
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100);
        
    }, times * 100); // This 100 is the same 100 as setTimeout above - should be in variable
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}
