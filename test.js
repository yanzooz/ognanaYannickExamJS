let themes = showTheme(quizData);
    console.log(themes)
    themeSelect.innerHTML = "";
        // On insère les options
        themes.forEach(theme => {
          const option = document.createElement("option");
          option.value = theme;
          option.textContent = theme;
          themeSelect.appendChild(option);
        });

const fiterButton = document.getElementById("filterButton");

filterbutton.innerHTML = "";
  animals.forEach(element => {
    const option = document.createElement("option");
    option.value = element.category;
    option.textContent = element.category;
    filterbutton.appendChild(option);
        });

filterbutton.addEventListener("change", () => {
    const selectedCategory = filterbutton.value;
    const filteredAnimals = animals.filter(animal => animal.category === selectedCategory);
    
    // Réinitialiser l'affichage
    animalsDisplay.innerHTML = "";
    
    // Afficher les animaux filtrés
    displayAnimals(filteredAnimals);
})

