const API_URL_RANDOM =
  "https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_Q9I3rEs8jqpqvq3EWyaEX57qE4pNy7mYOi0n0xCZ9ZowzS9WGhcusFCVdyxc7Sz0";
const API_URL_FAVORITES =
  "https://api.thecatapi.com/v1/images/favourites?limit=20&api_key=live_Q9I3rEs8jqpqvq3EWyaEX57qE4pNy7mYOi0n0xCZ9ZowzS9WGhcusFCVdyxc7Sz0";

async function loadRandomMichis() {
  try {
    const response = await fetch(API_URL_RANDOM); // Espera la respuesta de la API
    const data = await response.json();
    console.log(data);
    const container = document.getElementById("randomMichis");
    container.innerHTML = ""; // Limpia el contenedor antes de agregar las nuevas imágenes

    data.forEach((michi, index) => {
      const article = document.createElement("article");

      const img = document.createElement("img");
      img.src = michi.url;
      img.width = 250;
      img.height = 250;
      img.alt = `Foto gatito ${index + 1}`;

      const button = document.createElement("button");
      button.textContent = "Guardar en favoritos";

      article.appendChild(img);
      article.appendChild(button);
      container.appendChild(article);
    });
  } catch (error) {
    console.error("Error al cargar los michis:", error);
  }
}

// Espera a que la respuesta se convierta en JSON
//     const img1 = document.getElementById("img1");
//     const img2 = document.getElementById("img2");
//     const img3 = document.getElementById("img3");
//     const img4 = document.getElementById("img4");
//     const img5 = document.getElementById("img5");
//     const img6 = document.getElementById("img6");
//     const img7 = document.getElementById("img7");
//     const img8 = document.getElementById("img8");
//     const img9 = document.getElementById("img9");
//     const img10 = document.getElementById("img10");

//     img1.src = data[0].url;
//     img2.src = data[1].url
//     img3.src = data[2].url
//     img4.src = data[3].url
//     img5.src = data[4].url
//     img6.src = data[5].url
//     img7.src = data[6].url
//     img8.src = data[7].url
//     img9.src = data[8].url// Actualiza el src de la imagen con la URL del gatito
//     img10.src = data[9].url
// }catch(error){
//   console.error("error")
// }
// }
// async function loadFavoritesMichis() {
//   try {
//     const response = await fetch(API_URL_FAVORITES); // Espera la respuesta de la API
//     const data = await response.json(); // Espera a que la respuesta se convierta en JSON
//   }catch(error){
//     console.error('Error')
//   }
// }

// Llama a la función cuando cargue la página para mostrar una imagen al inicio
loadRandomMichis();
// loadFavoritesMichis()
