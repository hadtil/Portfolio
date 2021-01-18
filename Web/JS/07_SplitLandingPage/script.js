const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

// Don't need to put curly braces in the enclosed javascript function
// since it just has one line in the function
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))
