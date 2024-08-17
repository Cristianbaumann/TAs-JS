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
  const contenedor = document.getElementById('ContendeorDeH1');
  titulos.forEach(titulo => {
    const h1 = document.createElement('h1');
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



    





function generarTexto() {
    const texto = document.getElementById("texto").value;
    const repeticiones = parseInt(document.getElementById("repeticiones").value);
    repeatString(texto, repeticiones);
    reversetring(texto);
  }
  
