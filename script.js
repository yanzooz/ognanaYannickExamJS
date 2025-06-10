
//Créer une classe javascript Animal contenant :
class Animal{
    constructor(name, description, category, urlImage){
        this.name = name;
        this.description=description;
        this.category=category;
        this.urlImage=urlImage;
    }
}

//Créer ensuite quelques instances de votre classe en utilisant le constructeur 
// et mettez les dans un tableau. 
let animals = [
  new Animal("Chien", "le meilleur ami de Kiba", "mamifère", "chienImage.jpg"),
  new Animal("Serpent", "L'animal phare d'Oroshimaru", "reptile", "serpent.jpg"),
  new Animal("Corbeau", "L'entité secreté d'Itachi", "rapace", "corbeau.jpg"),
  new Animal("renard", "Le Démon renard à 9 queues Kyubi", "mamifère", "fox.jpg")
];

let animalCreated = JSON.parse(sessionStorage.getItem("animalCreated"))
console.log(animalCreated);

if (animalCreated) {
  animals.push(animalCreated);
}
//Effectuez un console.log de votre tableau 
console.log(animals)

const animalsDisplay = document.getElementById("animalsDisplay");

function displayAnimals(tab) {
  animalsDisplay.innerHTML = "";
  tab.forEach(instanceOfAnimal => {
    const card = document.createElement("div");
    card.className = "card-animal";

    const title = document.createElement("h2");
    title.textContent = instanceOfAnimal.name;

    const description = document.createElement("p");
    description.textContent = instanceOfAnimal.description;

    const category = document.createElement("p");
    category.textContent = `Catégorie : ${instanceOfAnimal.category}`;

    const image = document.createElement("img");
    image.src = instanceOfAnimal.urlImage;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(category);
    card.appendChild(image);

    animalsDisplay.appendChild(card);
  });
}

const filterForCategories = document.getElementById("filterForCategories");
filterForCategories.innerHTML = "";
function showCategories(tab) {
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "Tous les animaux";
    filterForCategories.appendChild(allOption);

    tab.forEach(element =>{
        const option = document.createElement("option");
        option.value = element.category;
        option.textContent = element.category;
        filterForCategories.appendChild(option);
    })

    filterForCategories.addEventListener("change",() => {
        if (filterForCategories.value === "all") {
            displayAnimals(tab);
        }else{
            const selectedCategory = filterForCategories.value;
            const filteredAnimals = tab.filter(animal => animal.category === selectedCategory);
            displayAnimals(filteredAnimals);
        }
    })
}


displayAnimals(animals);
showCategories(animals);
sessionStorage.setItem("animals", JSON.stringify(animals));


