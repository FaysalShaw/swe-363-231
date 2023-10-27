
const foxImage = document.getElementById('foxImage');


// this is the arrow syntax 
    window.onload  = e=>
   fetch('https://randomfox.ca/floof/')
       .then(response => response.json())
       .then(data => {
           foxImage.src = data.image;
       })

     
