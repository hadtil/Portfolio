// Gives us a node list of all the labels
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) 
        .join('')        
        // Map() can be used on an array to turn into an array of something else
        // split() turns label text into an array of the letters.
        // mapping creates an array with each letter with a span tag around it
        // join() turns it back into a string
})