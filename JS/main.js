/*
Je cree un tableau qui contiendra les valeurs rentré 
Je créer une variable qui est égal a la valeur rentré 
Je pousse cette variable dans un tableau tableau
Je crée un nombre aléatoire qui aura la taille maximale du tableau
J'affiche la valeur choisi aléatoirement
*/

let listOfViewers = [];

let getName = () => {
    let name = document.getElementById('name').value;
    listOfViewers.push(name);
    console.log(listOfViewers);
}