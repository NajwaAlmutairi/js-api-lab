console.log("working");

const url = "https://coffee.alexflipnote.dev/random.json"


function myFetch() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let container = document.getElementById('container')
            container.innerHTML = '';

            let img = document.createElement('img')
            img.src = data.file
            container.appendChild(img)
            img.classList.add('imgClass');
        })

}

myFetch();

setInterval(myFetch, 3000);