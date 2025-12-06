const container = document.getElementById("personagens-container");

fetch("https://dragonball-api.com/api/characters")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.items);

    data.items.forEach((elemento) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${elemento.image}">
        <h2>${elemento.name}</h2>
        <p>${elemento.race}</p>
      `;

      container.appendChild(card);
    });
  })
 
