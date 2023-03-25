const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach((person, index) => {
            document.querySelector(`.name${index + 1}`).innerHTML = person.name
            document.querySelector(`.age${index + 1}`).innerHTML = person.age
        })
    })
})

