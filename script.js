window.onload = () => {
  let myForm = document.forms["triangle-form"];
  myInputs = myForm.querySelectorAll("input");
  myInputs.forEach(function (el) {
    el.addEventListener("input", countFilledInputs);
  });
};

function countFilledInputs() {
  let inputsWithValue = 0;
  for (var i = 0; i < myInputs.length; i++) {
    if (myInputs[i].value !== "") inputsWithValue += 1;
  }
  if (inputsWithValue === 2) {
    for (var i = 0; i < myInputs.length; i++) {
      if (myInputs[i].value === "") myInputs[i].disabled = true;
    }
  } else {
    myInputs.forEach(function (el) {
      el.disabled = false;
    });
  }
}

function handleSubmit(e) {
  e.preventDefault(); // zabranit odesilani formulare
  let a = event.target[0].value; // hodnota prvniho inputu A
  let b = event.target[1].value; // hodnota prvniho inputu B
  let c = event.target[2].value; // hodnota prvniho inputu C

  //   let result, zadano, vypocet; // definujeme promenne
  if (a && b) {
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    obsah = (a * b) / 2;
    zadano = `Zadal jste: délky stran trojúhelníku <strong>A</strong>=${a}, <strong>B</strong>=${b}`;
    vypocet = `délka strany tohoto trojúhelníku je <strong>C</strong>=${c} a obsah <strong>S</strong>=${obsah}`;
  } else if (a && c) {
    if (a >= c) {
      showAlert("Odvesna musi byt vetsi nez prepona!");
    } else {
      b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
      obsah = (a * b) / 2;
      zadano = `Zadal jste: délky stran trojúhelníku A=${a}, C=${c}`;
      vypocet = `délka strany tohoto trojúhelníku je B=${b} a obsah S=${obsah}`;
    }
  } else if (b && c) {
    if (b >= c) {
      showAlert("Odvesna musi byt vetsi nez prepona!");
    } else {
      a = Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
      obsah = (a * b) / 2;
      zadano = `Zadal jste: délky stran trojúhelníku C=${b}, C=${c},`;
      vypocet = `délka strany tohoto trojúhelníku je A=${a} a obsah S=${obsah}`;
    }
  } else {
    showAlert("Fill two inputs");
    return false; // zastavit pokracovani scriptu
  }

  const output = document.querySelector(".output");

  console.log(a, b, c);

  output.insertAdjacentHTML("beforeend", zadano);
  output.insertAdjacentHTML("beforeend", "<br />");
  output.insertAdjacentHTML("beforeend", vypocet);
  output.insertAdjacentHTML("beforeend", "<br /><br />");
}

function showAlert(text) {
  const alertBlock = document.querySelector(".alert");
  const alertText = document.getElementById("text");
  alertText.innerHTML = text;
  alertBlock.style.display = "block";
  setTimeout(function () {
    alertBlock.style.display = "none";
  }, 5000);
}

function draw() {
  const canvas = document.querySelector("#canvas");
  if (canvas && canvas.getContext) {
    let context = canvas.getContext("2d");

    context.font = "15px Arial";
    context.beginPath();
    context.strokeStyle = "blue";
    context.moveTo(20, 20);
    context.lineTo(20, 100);
    context.textAlign = "right";
    context.fillText("A", 20, 70);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "green";
    context.moveTo(20, 100);
    context.lineTo(200, 100);
    context.textAlign = "right";
    context.fillText("B", 100, 110);
    context.stroke();

    context.beginPath();
    context.strokeStyle = "red";
    context.moveTo(200, 100);
    context.lineTo(20, 20);
    context.textAlign = "right";
    context.fillText("C", 110, 50);
    context.stroke();
  }
}

draw(); //volame funkci pro malovani trojuhelniku
