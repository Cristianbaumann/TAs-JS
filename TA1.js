function repeatString(texto, repeticiones) {
    const contenedor = document.getElementById("contenedorDeP");    
    for (let i = 0; i < repeticiones; i++) {
      const parrafo = document.createElement("p");
      parrafo.textContent = texto;
      contenedor.appendChild(parrafo);
    }
  }
function reversetring(texto){
    const contenedor = document.getElementById("contenedorDeP")
    let newString = ""
    for (let i = texto.length - 1; i >= 0; i--) {
        newString += texto[i];
    }
    const reverseparrafo = document.createElement("p");
    reverseparrafo.textContent = newString;
    contenedor.appendChild(reverseparrafo);

}

function removeFromArray(arreglo, item) {
    const index = arreglo.indexOf(item)
    if(index !== -1){
        arreglo.splice(index,1)
    }
    console.log(arreglo);
}
console.log(removeFromArray([1,2,3,4,5,6,7,8,9],2));


function getTheTitles(libros) {
  const titulos = libros.map(libro => libro.title);
  const contenedor = document.getElementById("ContendeorDeH1");
  titulos.forEach(titulo => {
    const h1 = document.createElement("h1");
    h1.textContent = titulo;
    contenedor.appendChild(h1);
  });
}

function mostrarTitulos() {
  const libros = [
    { title: "Harry Potter", autor: "J.K. Rowling" },
    { title: "Game of Thrones", autor: "George R.R. Martin" },
    { title: "Fire and Blood", autor: "George R.R. Martin" }
  ];

  getTheTitles(libros);
}

function getOdds(nums){
  const odds = [];
  let output = "";
  for(let i = 0; i<= nums.length; i++){
    if(i % 2 !== 0){
      odds.push(i)
    } 
  }
  odds.forEach((odds) => {
    output += `<span>${odds}</span>`;
  });
  document.getElementById("ContenedorDeOdds").innerHTML = output;
}

function duplicates(nums) {
  const counts = {}; 
  const duplicates = {};
  const contenedor = document.getElementById("duplicatesContenedor");

  nums.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });
  for (let num in counts) {
    if (counts[num] > 1) {
      duplicates[num] = counts[num];
    }
  }

  for (let num in duplicates) {
    const h4 = document.createElement("h4");
    h4.textContent = `Valor duplicado: ${num}`;
  
    const p = document.createElement("p");
    p.textContent = `Aparece ${duplicates[num]} veces`;
    contenedor.appendChild(h4);
    contenedor.appendChild(p);
  }
}
function generarTexto() {
    const texto = document.getElementById("texto").value;
    const repeticiones = parseInt(document.getElementById("repeticiones").value);
    repeatString(texto, repeticiones);
    reversetring(texto);
  }
  
