const main = document.querySelector('main')

let days = document.querySelector('.days > strong')
let hours = document.querySelector('.hours > strong')
let minutes = document.querySelector('.minutes > strong')
let seconds = document.querySelector('.seconds > strong')


const dataRegister = localStorage.getItem('storage')

function formatDate(date){
    const dateSplitted = date.split('-')
    return `${dateSplitted[2].replace(/[^\d]+/g,'')}/${dateSplitted[1].replace(/[^\d]+/g,'')}/${dateSplitted[0].replace(/[^\d]+/g,'')}`
}

const finalDate = formatDate(dataRegister)
compareDates(finalDate)

function compareDates(date){
    let parts = date.split('/')
    let today = new Date()
    
    date = new Date(parts[2], parts[1] - 1, parts[0])
    if(date <= today){
        main.innerHTML = "<p>Escolha uma data que ainda não passou</p>"
    }
    else{
                days.innerHTML = Math.floor(((((date - today) / 1000) / 60) / 60) / 24)
                hours.innerHTML = Math.floor((((date - today) / 1000) / 60) / 60) % 24
                minutes.innerHTML = Math.floor((((date - today) / 1000) / 60) % 60)
                seconds.innerHTML = Math.floor((date - today) / 1000) % 60
    }

    setTimeout(() => {
        compareDates(finalDate)
    }, 1000);
}