const navLinks = document.querySelector('.nav-links')
const navToggler = document.querySelector(".nav-toggler")
const navToggle = (e) =>{
    e.preventDefault()
    navLinks.classList.toggle('hidden')
}

navToggler.addEventListener('click',navToggle)
