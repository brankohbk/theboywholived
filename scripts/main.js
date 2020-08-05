const deck = document.getElementById("card-deck");
const boton = document.getElementById("boton");
boton.addEventListener('click',mostrar);

function mostrar(){
  // Oculto el botón.
  boton.style.display = "none";

  // Defino las dimensiones que tendrá el mazo (deck).
  // Inicialmente, en el CSS están definidas en 0px.
  // Como tienen transiciones, la aparición en el navegador será "armoniosa" (o eso se buscó).
  deck.style.padding = "40px";
  deck.style.width = "90%";
  deck.style.height = "67vh";

  // Añado un eventListener para cuando termina la transición del alto.
  deck.addEventListener("transitionend", e=>{
    e.target===deck && e.propertyName=="height" ? llenar() : null ;
  });
}


function llenar() {
  // Recuerden que la variable "datos" está definida en el archivo "personajes.js".
  // Por cada personaje...
  datos.personajes.forEach(personaje => {
    // ... genero una card.
    const card = document.createElement("div");

    // Genero los elementos HTML que van a ir en esta card.
    const avatar = document.createElement("div");
    const pic = document.createElement("img");
    const name = document.createElement("h3");
    const details = document.createElement("ul");

    // Agrego la clase correspondiente de acuerdo a la casa del personaje.
    card.classList.add("card", `${personaje.house || "houseless"}`);

    // Le doy estilos a la imagen de perfil, y declaro el src correspondiente al personaje.
    avatar.classList.add("avatar");
    pic.setAttribute("src", personaje.image);

    // Lleno la información de la card con los datos del personaje.
    name.innerText = personaje.name;
    details.innerHTML = ` <li><b>House:</b> ${personaje.house || "None"}</li>
                          <li><b>Patronus:</b> ${personaje.patronus || "-"}</li>
                          <li><b>Actor:</b> ${personaje.actor}</li>`;

    // Voy construyendo el componente card.
    avatar.appendChild(pic);
    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(details);

    //Una vez terminada la construcción, añado este card al mazo (deck).
    deck.appendChild(card);
  }

  )
/* ET VOILÀ, mostramos a todos los personajes que nos entregó la API, cada uno con
  sus estilos dependiendo de la información que tiene el objeto iterado.*/

}
