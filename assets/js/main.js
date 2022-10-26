/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */


const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        image: 'https://picsum.photos/200',
        text: 'text-danger text-center',
        containerCenter: 'container d-flex justify-content-center',
        name: " ",
        lastname: " ",
        count: 0
      }
    }
  }).mount('#app')