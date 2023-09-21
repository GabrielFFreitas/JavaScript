const noli = document.getElementById("nome-livro")
const nolij = document.createElement("h2")

const au = document.getElementById("autor")
const auj = document.createElement("h3")

const numpa = document.getElementById("numeropaginas")
const numpaj = document.createElement("p")

const pala = document.getElementById("paislancamento")
const palaj = document.createElement("p")

const geli = document.getElementById("livro")



geli.addEventListener("click", function(){

nolij.innerHTML = noli.value

auj.innerHTML = au.value

numpaj.innerHTML = numpa.value 

palaj.innerHTML = pala.value



document.body.appendChild(nolij)
document.body.appendChild(auj)
document.body.appendChild(numpaj)
document.body.appendChild(palaj)

} )
