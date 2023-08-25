//******************ALERTA POP UP AL PRESIONAR BOTON ENVIAR***************************/
// //generamos variable local para obtener el boton x ID
// let boton = document.getElementById("miButton"); 

// //Generamos un oyente de evento que "escuche" el evento "click"
// boton.addEventListener('click', function() {
// alert("Gracias por escribirnos")
// });
//*********************************************************************************** */


//Generamos una constante para llamar a nuestro formulario mediante su ID
const miForm= document.getElementById("miForm");

//Agregamos un oyente de eventos al formulario para manejar el evento “submit”:

miForm.addEventListener('submit', function(event){
  event.preventDefault(); //utiliza “event.preventDefault()” para evitar que el formulario se 
  //envíe de la manera predeterminada, lo que permite realizar la validación 
  //antes de enviar los datos.

  validateForm();
})

//sumamos una función de validación que verifique los criterios deseados:

function validateEmail(email){
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/ //Expresiones regulares: verifica que el mail 
  //contenga un “@” y un “.” para ser válido
  return regex.test(email)

}

  function validateForm() {
    const emailInput = document.getElementById('email'); //El param. ('email') debe estar e/ comillas simples
    const email = emailInput.value;
    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }
  