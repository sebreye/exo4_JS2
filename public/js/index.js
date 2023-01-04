let sebastian = {
    nom : 'Reyes Flores',
    prenom : 'Sebastian',
    age : 19,
    taille : 175 
}
console.log(sebastian.age);
let perso2 = {
    nom : 'marcel',
    prenom : 'Jules',
    age : 29,
    taille : 185 
}
let perso3 = {
    nom : 'Reyes Flores',
    prenom : 'sebastian',
    age : 29

}
let perso4 = {
    nom : 'Jean',
    prenom : 'Maurice',
    sePresenter(){
        console.log(`Bonjour je suis ${perso4.prenom}`);
    }
}
perso4.sePresenter()

let perso5 = {
    nom : 'jean',
    age : 0,
    ChangerAge(){
        perso5.age = prompt("changer l'age")
        alert(`${perso5.nom} a ${perso5.age} ans `)
    }
}
perso5.ChangerAge()


