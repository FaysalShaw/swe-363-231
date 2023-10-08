const textContent=[
    {
        text:"At Precise Cut, we're not just a barbershop; we're a destination for the discerning individuals of Dammam who seek more than just a haircut. Our legacy of excellence in grooming spans years, making us the go-to choice for those who value precision, style, and a touch of old-world charm."

    },

    {
        text:"Master Barbers: Our experienced barbers are true masters of their craft, dedicated to providing you with the perfect cut and style every time."

    },

    {
        text:"Time-Honored Techniques: We respect the timeless art of grooming while embracing modern trends to cater to all your styling needs."

    },

    {
         text:"Impeccable Service: At Precise Cut, you're not just a customer; you're family. Our friendly and welcoming environment ensures you feel at home."

    },

    {
         text:"Premium Products: We use the finest grooming products to ensure your hair and skin receive the care they deserve."

    },
]

let article = document.querySelector("article")
for(let textCon of textContent){
let para = document.createElement("p")
para.innerText = textCon.text
article.append(para)
}
