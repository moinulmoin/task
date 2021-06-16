const submitBox = document.querySelector('#submit-box')
const submitButton = document.querySelector('#submit-btn')
const backButton = document.querySelector('#back-btn')
const homepage = document.querySelector('#home')
const secondPage = document.querySelector('#main')
const finalPage = document.querySelector('#end')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (submitBox.value === '') return;

    homepage.classList.add('hide')
    secondPage.classList.remove('hide')
    submitBox.value = ''
})

const previousPage = () => {
    secondPage.classList.add('hide')
    homepage.classList.remove('hide')
}
const nextPage = () => {
    secondPage.classList.add('hide')
    finalPage.classList.remove('hide')
}

backButton.addEventListener('click', () => {
    finalPage.classList.add('hide')
    secondPage.classList.remove('hide')
})