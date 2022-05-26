const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// on-click of open button, add show-nav class to the container
open.addEventListener('click', () => container.classList.add('show-nav'))

// on-click of open button, remove show-nav class from the container
close.addEventListener('click', () => container.classList.remove('show-nav'))
