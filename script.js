const dogImageDiv = document.getElementById('dogImage')
const getButton = document.getElementById('getButton')

const getImage = () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            dogImageDiv.innerHTML = `<img src = '${json.message}' width = '100%' height = '100%'/>`
        })
}

getButton.onclick = () =>{
    getImage()
}