const smalls = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const percent = document.getElementById("percentage")
const remainder = document.getElementById("remainder")

updateBigBoy()

smalls.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {

    // toggle last full cup if we click on it
    if (smalls[index].classList.contains('full') && !smalls[index].nextElementSibling.classList.contains('full')) {
        index--
    }

    smalls.forEach((cup, idx) => {
        if (idx <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigBoy()
}

function updateBigBoy(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smalls.length

    if (fullCups === 0) {
        percent.style.visibility = 'hidden'
        percent.style.height = 0
    } else {
        percent.style.visibility = 'visible'
        percent.style.height = `${fullCups / totalCups * 230}px`
        percent.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remainder.style.visibility = 'hidden'
        remainder.style.height = 0
    } else {
        remainder.style.visibility = 'visible'
        liters.innerText = `${2 -(250 * fullCups / 1000)}L`

    }
}
