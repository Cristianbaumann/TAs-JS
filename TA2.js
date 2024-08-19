function sumAll(){
    const Pnumero = parseInt(document.getElementById("NumeroInicio").value);
    const Unumero = parseInt(document.getElementById("NumeroFinal").value);
    let suma = 0;
    for(let i = Pnumero; i<= Unumero; i++){
        suma += i
    }
    document.getElementById("resutado").innerText = `La suma de los números entre ${Pnumero} y ${Unumero} es: ${suma}`;
}

function convertToCelsius(){
    const temp = parseInt(document.getElementById("temperatura").value);
    const tocelcius =(((temp - 32)*5)/9).toFixed(1);
    document.getElementById("ConversionC").innerText= `${temp}°f son ${tocelcius} celsius`;
}

function convertToFahrenheit(){
    const temp = parseInt(document.getElementById("temperaturaF").value);
    const toFahrenheit = ((temp * 9) / 5 + 32).toFixed(1);
    document.getElementById("ConversionF").innerText= `${temp}°c son ${toFahrenheit} Fahrenheit`;
}

function leapYear(){
    const year = parseInt(document.getElementById("bisiesto").value);
    let check = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    document.getElementById("TrueOrFalse").innerText= `${year} es biciesto? ${check}`;
}

function getSum(array){
    let sum = 0;
    for(let i =0; i< array.length; i++){
        sum += arr[i];
    }
    return sum;
}
arr = [1,2,3]
console.log(getSum(arr));