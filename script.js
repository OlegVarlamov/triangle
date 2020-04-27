function handleSubmit(e) {
    e.preventDefault();  // zabranit odesilani formulare
    let a = event.target[0].value; // hodnota prvniho inputu A
    let b = event.target[1].value;// hodnota prvniho inputu B
    let c = event.target[2].value;// hodnota prvniho inputu C
    
    let result, zadano, vypocet; // definujeme promenne
    if (a && b) {
        c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
        obsah = a * b / 2;
        zadano = `Zadal jste: délky stran trojúhelníku a=${a}, b=${b}`;
        vypocet = `délka strany tohoto trojúhelníku je c=${c} a obsah S=${obsah}`;
    } else if (a && c ) {
        if (a >= c) { 
            showAlert("Odvesna musi byt vetsi nez prepona!")
        } else {
            b = Math.sqrt(Math.pow(c,2) - Math.pow(a,2));
            obsah = a * b / 2;
            zadano = `Zadal jste: délky stran trojúhelníku A=${a}, C=${c}`;
            vypocet = `délka strany tohoto trojúhelníku je B=${b} a obsah S=${obsah}`;
        }
    } else if (b && c) {
        if (b >= c) {
            showAlert("Odvesna musi byt vetsi nez prepona!")
        } else {
        a = Math.sqrt(Math.pow(c,2) - Math.pow(b,2));
        obsah = a * b / 2;
        zadano = `Zadal jste: délky stran trojúhelníku C=${b}, C=${c},`;
        vypocet = `délka strany tohoto trojúhelníku je A=${a} a obsah S=${obsah}`;
        }
    } else {
        showAlert("Fill two inputs");
        return false; // zastavit pokracovani scriptu
    }

    const output = document.querySelector(".output");

    output.insertAdjacentHTML("beforeend", zadano);
    output.insertAdjacentHTML("beforeend", "<br />");
    output.insertAdjacentHTML("beforeend", vypocet);
    output.insertAdjacentHTML("beforeend", "<br /><br />");
}

function showAlert(text) {
    const alertBlock = document.querySelector(".alert");
    alertBlock.append(text);
    alertBlock.style.display = 'block';
    setTimeout(function(){
        alertBlock.style.display = 'none';
    }, 5000)
}

function draw() {
    const canvas = document.querySelector('#canvas');
    if (canvas && canvas.getContext)
    {
      let context = canvas.getContext('2d');
  
      context.beginPath();
      context.moveTo(75,75);
      context.lineTo(10,75);
      context.lineTo(10,25);
      context.lineTo(75,75);
      context.stroke();
    }
  }
  
  draw(); //malujeme trojuhelnik
