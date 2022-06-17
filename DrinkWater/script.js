const smalls = document.querySelectorAll(".cup-small")
const liters = document.getElementById("liters")
const percent = document.getElementById("percentage")
const remainder = document.getElementById("remainder")

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
}
