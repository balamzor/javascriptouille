fetch('recettes.json')
.then(response => response.json())
.then(data => {
const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const className = this.className;
            const recette = data[className];
            const titre = recette[0];
            const ingredients = recette[1];
            const actions = recette[2];
            let displayi = "";
            let displaya = "";

            for (let i = 0; i < ingredients.length; i++) {
                displayi = displayi + ' ' + '<li>' + ingredients[i] + '</li>';
            };
            
            for (let j = 0; j < actions.length; j++) {
                displaya = displaya + ' ' + '<li>' + actions[j] + '</li>';
            };

            const h1 = document.querySelector("h1");
            const img = document.querySelector(".img")
            const ingredientscontent = document.querySelector(".ingredients");
            const preparationcontent = document.querySelector(".preparation");
            
            h1.innerHTML = titre;
            img.innerHTML = `<img src="${recette[3]}"/>`;
            ingredientscontent.innerHTML = "<h2>Ingredients</h2>" + displayi;
            preparationcontent.innerHTML = "<h2>Préparation</h2>" + displaya;
        });
    });
}) 