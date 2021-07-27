const button = document.getElementById('btn1')
const text = document.getElementById('input1')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const username = text.value
    console.log(username);

    const url = `https://api.github.com/users/${username}`

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if(xhr.status == 200 && xhr.readyState == 4) {
            console.log(xhr.responseText);
            const userData = JSON.parse(xhr.responseText)
            const data = document.getElementById('table-data')
            data.innerHTML = userData.id
        } 
        if(xhr.status==404)
        {
            // alert('Username does not exist')
            const errorBox = document.getElementById('error-box')
            errorBox.innerHTML = `<h3>Sorry, the username does not exist! Please try again...</h3>`
            const userData = JSON.parse(xhr.responseText)
            const data = document.getElementById('table-data')
            data.innerHTML = `<h3>null</h3>`
        }
    }
    xhr.send()
})