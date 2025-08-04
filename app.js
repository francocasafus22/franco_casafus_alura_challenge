const nombreAmigo = document.getElementById("amigo");
const ul_amigos = document.getElementById("listaAmigos");
const ul_resultado = document.getElementById("resultado");
let amigos = [];

function agregarAmigo() {
  if (nombreAmigo.value.trim() == "") {
    alert("Debe ingresar un nombre.");
    return;
  }
  amigos.push(nombreAmigo.value);

  const li = document.createElement("li");
  li.textContent = nombreAmigo.value;
  ul_amigos.appendChild(li);
  nombreAmigo.value = "";
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("Debes ingresar al menos un amigo para poder sortear.");
  } else {
    const random = Math.floor(Math.random() * amigos.length);
    const resultado = document.createElement("li");
    resultado.textContent = `El amigo secreto es ${amigos[random]}`;
    ul_resultado.replaceChildren(resultado);
  }
}
