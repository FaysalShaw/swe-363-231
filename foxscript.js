
const foxImage = document.getElementById('foxImage');


function getRandomFox() {
   
   fetch('https://randomfox.ca/floof/')
       .then(response => response.json())
       .then(data => {
           foxImage.src = data.image;
       })
}


window.onload = getRandomFox;