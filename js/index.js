const date = document.getElementById('date')

function goCounter(event){
    event.preventDefault()
    window.location.href = 'counter.html'
    const data = JSON.stringify(date.value)
    localStorage.setItem("storage", JSON.stringify(data));
}