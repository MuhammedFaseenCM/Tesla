
const openMenu = () =>{
document.querySelector('.backdrop').className = 'backdrop active';
document.querySelector('aside').className = 'active';
}

const closeMenu = () =>{
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}

const model = document.querySelectorAll('section h1,p, .text-center')
window.addEventListener('scroll',check_animation)
window.addEventListener('scrollTop',check_animation)

function check_animation () {
    const trigger = window.innerHeight / 6 * 4;
    model.forEach(content => {
        const top = content.getBoundingClientRect().top
        if (trigger > top) {
            content.classList.add('show-content')
        } else {
            content.classList.remove('show-content')
        }
    })
}

