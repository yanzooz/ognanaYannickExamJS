const animals = JSON.parse(sessionStorage.getItem("animals"));

class Animal{
    constructor(name, description, category, urlImage){
        this.name = name;
        this.description=description;
        this.category=category;
        this.urlImage=urlImage;
    }
}
 
console.log(animals);

// Etape 4 – Ajout des données
// Ajouter un formulaire permettant d’ajouter un animal.
// Le formulaire devra contenir nom, description, category ( avec les 3 choix possibles )
// et le lien de l’image, aucun champ ne pourra être vide
// L’animal sera ensuite ajouté au tableau et affiché à la suite des autres. 
 const IMAGE_INPUT = document.getElementById('imageInput');


function fileUploader(input) {
    const file_reader = new FileReader();
    file_reader.addEventListener('load', () => {
        const uploaded_image = file_reader.result;
        document.getElementById('displayImage').style.backgroundImage =
            `url(${uploaded_image})`;
    });
    file_reader.readAsDataURL(input.files[0]);
    sessionStorage.setItem("imageUrl", input.files[0].name);
}

const form = document.getElementById('animalForm');
IMAGE_INPUT.addEventListener('change', (e) => {
     fileUploader(e.target);
});

const category = document.getElementById('animalCategory')
animals.forEach(element =>{
    const option = document.createElement("option");
    option.value = element.category;
    option.textContent = element.category;
    category.appendChild(option);
})

const selectedCategory = category.value;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('animalName').value;
    const description = document.getElementById('animalDescription').value;
    const imageUrl = sessionStorage.getItem("imageUrl", IMAGE_INPUT.files[0].name);

    if (name && description && selectedCategory && imageUrl) {

        const animalCreated = new Animal(name, description, selectedCategory, imageUrl);
        sessionStorage.setItem("animalCreated", JSON.stringify(animalCreated));
        window.location.href = "index.html";
    } else {
        alert("Tous les champs doivent être remplis !");
    }
});





