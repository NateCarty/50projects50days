const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const current = +counter.innerText

        const increment = target / 500

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`
            setTimeout(updateCounter, 2)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})