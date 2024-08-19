function generatePassword(){
    const long = parseInt(document.getElementById("longitud").value);
    if(long < 8){
        alert("La contraseña es muy corta");
        return;
    }
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ+abcdefghijklmnopqrstuvwxyz0123456789@#$";
    for (let i = 1; i <= long; i++) {
        let char = Math.floor(Math.random()* str.length + 1);
        pass += str.charAt(char)
    }
    document.getElementById("PasswordGenerada").innerText = `Contraseña generada: ${pass}`;
}

const people = [
    { name: "Jorge", yearOfBirth: 1956},
    { name: "Juan", yearOfBirth: 1920 },
    { name: "Analia", yearOfBirth: 1948 },
    { name: "Ana", yearOfBirth: 1945 },
  ];
  
function findTheOldest() {
    const currentYear = new Date().getFullYear();
    let oldestPerson = people[0];
    let maxAge = currentYear - people[0].yearOfBirth;
  
    for (let i = 1; i < people.length; i++) {
      const age = currentYear - people[i].yearOfBirth;
      if (age > maxAge) {
        oldestPerson = people[i];
        maxAge = age;
      }
    }
    document.getElementById("OldestPerson").innerText = `La persona más vieja es ${oldestPerson.name}, con ${maxAge} años.`;
  }







