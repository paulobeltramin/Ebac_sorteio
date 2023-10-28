


const form  = document.getElementById("form");
const numMax = document.getElementById("numero-maximo");




form.addEventListener('submit', function (e) { 
      e.preventDefault()

     if(numMax.value === ""){
        alert("preencha os campos obrigatórios")
     }
      
    let calc =Number( Math.random() * numMax.value)
    calc = Math.floor(calc + 1)

    numMax.value=""

     document.getElementById("result").innerText = calc
     document.querySelector('.sorteio').style.display = 'block'
     

 })