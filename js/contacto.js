const doc = document;
const $name = doc.getElementById("name");
const $lastname = doc.getElementById("lastname");
const $email = doc.getElementById("email");
const $comment = doc.getElementById("comment");
const $formulario = doc.getElementById("formulario");
const $btn = doc.getElementById("btn");
const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;
console.log(axios);

$name.addEventListener("keydown", () => {
  if ($name.value.length < 3 || regex.test($name.value) === false) {
    $name.classList.add("error");
    $btn.setAttribute("disabled", "");
  } else {
    $name.classList.remove("error");
    $btn.removeAttribute("disabled", "");
  }
});
$lastname.addEventListener("keydown", () => {
  if ($lastname.value.length < 3 || regex.test($lastname.value) === false) {
    $lastname.classList.add("error");
    $btn.setAttribute("disabled", "");
  } else {
    $lastname.classList.remove("error");
    $btn.removeAttribute("disabled", "");
  }
});
$email.addEventListener("keydown", () => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test($email.value)) {
    $email.classList.add("error");
    $btn.setAttribute("disabled", "");
  } else {
    $email.classList.remove("error");
    $btn.removeAttribute("disabled", "");
  }
});
$comment.addEventListener("keydown", () => {
  if ($comment.value.length < 3 || $comment.value.length > 200) {
    $comment.classList.add("error");
    $btn.setAttribute("disabled", "");
  } else {
    $comment.classList.remove("error");
    $btn.removeAttribute("disabled", "");
  }
});

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  //creo las constantes que van a contener los datos ingresados por el usuario.
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const correo = document.getElementById("email").value;
  const comentario = $comment.value;

  //armo el objeto con los datos ingresados en el formulario.
  const datos = {
    nombre: name,
    apellido: lastname,
    email: correo,
    comentario,
  };

  //los muestro en consola.
  console.log(datos);

  axios
    .post("https://formsubmit.co/ajax/gonzalo-ezequiel@hotmail.com", datos)
    .then(function (response) {
      console.log(response.data);
      Swal.fire({
        title: "Consulta enviada.",
        text: " En breve nos pondremos en contacto con usted.",
        icon: "success",
        confirmButtonText: "Aceptar",
        position: "center",
        showConfirmButton: false,
        timer: 1500,
      });

      $formulario.reset();
    })
    .catch(function (error) {
      console.log(error);
    });
});
