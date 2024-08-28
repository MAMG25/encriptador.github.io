const encriptar = document.getElementById("button__encriptar");
const desencriptar = document.getElementById("button__desencriptar");
const copy = document.getElementById("button__copiar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const munheco = document.getElementById("munheco");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth");

const remplace = (newvalue) => {
  textFinal.innerHTML = newvalue;
  textFinal.classList.add("ajustar");
  rigth.classList.add("ajuste");
  textoInicial.value = "";
  textoInicial.style.height = "auto";
  textoInicial.placeholder = "Ingrese el texto aquí";
  munheco.classList.add("ocultar");
  textInfo.classList.add("ocultar");
  copy.classList.remove("bn_ocultar");
};

const reset = () => {
  textoInicial.value = "";
  textoInicial.style.height = "auto";
  textFinal.innerHTML = "";
  rigth.classList.remove("ajuste");
  textFinal.classList.remove("ajustar");
  munheco.classList.remove("ocultar");
  textFinal.placeholder = "Ningún mensaje fue encontrado";
  textInfo.classList.remove("ocultar");
  copy.classList.add("bn_ocultar");
  textoInicial.focus();
};

// Validación de texto
const isValidText = (text) => {
  return /^[a-z\s]+$/.test(text);
};

const isEncrypted = (text) => {

  return remplazar.some(([_, encryptedWord]) => text.includes(encryptedWord));
};


let remplazar = [
  ["e", "enter"],
  ["o", "ober"],
  ["i", "imes"],
  ["a", "ai"],
  ["u", "ufat"],
];

encriptar.addEventListener("click", () => {
  const texto = textoInicial.value.trim(); 
  if (texto !== "") {
    if (isValidText(texto)) {
      const encryptedText = remplazar.reduce((acc, [find, replace]) => {
        return acc.replaceAll(find, replace);
      }, texto);
      remplace(encryptedText);
    } else {
      alert("Ingrese texto solo con letras minúsculas, sin acentos y ningún otro caracter");
      reset();
    }
  } else {
    alert("Ingrese texto a encriptar");
    reset();
  }
});

desencriptar.addEventListener("click", () => {
  const texto = textoInicial.value.trim();
  if (texto !== "") {
    if (isValidText(texto)) {
      if (isEncrypted(texto)) {
        const decryptedText = remplazar.reduce((acc, [find, replace]) => {
          return acc.replaceAll(replace, find);
        }, texto);
        remplace(decryptedText);
      } else {
        alert("El texto ingresado no está encriptado.");
        reset();
      }
    } else {
      alert("Ingrese texto solo con letras minúsculas, sin acentos y ningún otro caracter");
      reset();
    }
  }
});


copy.addEventListener("click", () => {
  textFinal.select();
  document.execCommand("copy");

  reset();
});

textoInicial.addEventListener("change", (e) => {
  textoInicial.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", (e) => {
  textoInicial.style.height = "auto";
  let scHeight = e.target.scrollHeight;
  textoInicial.style.height = `${scHeight}px`;
});