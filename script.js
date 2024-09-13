const leftArrow = document.querySelector(".left")
const rightArrow = document.querySelector(".right")
const sliderImg = document.querySelector(".slider_img")
const imgHeadings = document.querySelectorAll(".img_heading")
const dots = document.querySelectorAll('.dot')
const imgHeadingsParent = document.querySelector(".slider_headings")
const dotsParent = document.querySelector(".dots")


const imagesSrc = [
    {
        src: "assets/img_first.png"
    },
    {
        src: "assets/img_second.png"
    },
    {
        src: "assets/img_third.png"
    }
]

const deactivateSelection = () => {
    imgHeadings.forEach(item => item.classList.remove("active"))
    dots.forEach(item => item.classList.remove("active"))
}

const changeImg = (index) => {
    sliderImg.src = imagesSrc[index].src

    deactivateSelection()

    dots[index].classList.add("active")
    imgHeadings[index].classList.add("active")
}

let current = 0

rightArrow.addEventListener('click', () => {
    if (current == 2) {
        current = 0
        changeImg(current)
    } else {
        changeImg(current + 1)
        current++
    }
})

leftArrow.addEventListener('click', () => {
    if (current == 0) {
        current = 2
        changeImg(current)
    } else {
        changeImg(current - 1)
        current--
    }
})

const selectImg = (id) => {
    sliderImg.src = imagesSrc[id-1].src
    deactivateSelection()

    dots[id-1].classList.add("active")
    imgHeadings[id-1].classList.add("active")
}


imgHeadingsParent.addEventListener('click', event => {
    const id = event.target.dataset.id
    
    if (!id) return;
    selectImg(+id)
})

dotsParent.addEventListener('click', event => {
    const id = event.target.dataset.id

    if (!id) return;
    selectImg(+id)
})

