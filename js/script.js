window.onload = async (event) => {
    let loader = document.getElementById('loader')
    let content = document.querySelector('.wrapper')

    content.classList.add('active')
    loader.remove()
};
async function copyMail() {

    let promise = await navigator.clipboard.writeText("i.ndeilko@gmail.com")
    iziToast.show({
        progressBar: false,
        class: 'success-notification',
        timeout: 3000,
        zindex: 3,
        theme: 'dark',
        messageColor: 'white',
        messageSize: '18',
        color: 'green',
        position: 'topRight',
        message: 'Email copied to clipboard'
    });
}
const scrollToHome = () => {
    let elem = document.querySelector('.container-preview')

    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}
const scrollToAboutMe = () => {
    let elem = document.querySelector('.about-me-container')
    console.log(elem)
    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}
const scrollToProjects = () => {
    let elem = document.querySelector('.container-projects')

    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}
const scrollToContacts = () => {
    let elem = document.querySelector('footer')

    window.scroll({
        left: 0,
        top: elem.offsetTop,
        behavior: 'smooth'
    })
}


