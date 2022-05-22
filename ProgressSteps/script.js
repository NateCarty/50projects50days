const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

// var for index of currently active step
let currentActive = 1


// when clicking next 
next.addEventListener('click', () => {

    // change the active step to 1 above current
    currentActive++

    // if we go past the amount of circles, just dont
    if (currentActive > circles.length){
        currentActive = circles.length
    }

    update()
})


// when clicking previous
prev.addEventListener('click', () => {

    // change the active step to 1 below current
    currentActive--

    // if we go past the first circle, just dont
    if (currentActive < 1){
        currentActive = 1
    }

    update()
})

// on click of either button
function update()   {

    // for each circle we have,
    circles.forEach((circle, index) => {

        // add or remove their active status depending on what index we have
        if (index < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    // get all active circles
    const actives = document.querySelectorAll('.active')

    // progress width is a ratio of the amount of circles and amount of active circles
    // will give us a number 0 - 1, multiply by 100 to get a percent
    // We use 98 here because 100% extends beyond the last circle
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 98 + '%'

    // if we are on the first circle, disable the previous button
    if (currentActive === 1){
        prev.disabled = true

    // else if we are on the last one, disable the next button    
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
    
    // else we can go either direction so don't disable either button
        prev.disabled = false
        next.disabled = false
    }
}