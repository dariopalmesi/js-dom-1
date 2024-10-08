// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// // Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// 1. Seleziono gli elementi della DOM

const buttonEl = document.getElementById('button')
const imageEl = document.querySelector('.image')


// 2. collega un event listener al pulsante

buttonEl.addEventListener('click', ()=> {
    imageEl.classList.add('.light')
})