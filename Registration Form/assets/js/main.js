/*===== box SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    boxIn = document.getElementById('box-in'),
    boxUp = document.getElementById('box-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    boxIn.classList.remove('block')
    boxUp.classList.remove('none')

    // Add classes
    boxIn.classList.toggle('none')
    boxUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    boxIn.classList.remove('none')
    boxUp.classList.remove('block')

    // Add classes
    boxIn.classList.toggle('block')
    boxUp.classList.toggle('none')
})
