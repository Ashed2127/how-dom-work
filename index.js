let fruits = ["Banana", "Mango", "Olive"];

let x = 0;
setInterval(() => {
  fruits[0] = x % 2 == 0 ? "Orange" : "Banana";

  document.getElementById("fruits-list").innerHTML = `
     <ul>
        <li>${fruits[0]}</li>
        <li>${fruits[1]}</li>
        <li>${fruits[3]}</li>
    </ul>`;
  x++;
}, 2000);
