// 
function calculerMoyenne(note1, note2, note3){
    return (note1+note2+note3)/3
}
console.log(calculerMoyenne(12, 14, 16)); // 14

// 
function estAdmis(moyenne){
    return moyenne>=10
}
console.log(estAdmis(9.5)); // false

// 
function calculerPrixTTC(prixHT, tauxTVA = 0.18){
    return prixHT+(prixHT*tauxTVA)
}
console.log(calculerPrixTTC(10000)); // 11800

//
const convertirEnMinutes= (heures)=>heures*60

console.log(convertirEnMinutes(2)); // 120

// Exercice 2
const etudiant = {
 id: 2026,
 nom: "Ndiaye",
 prenom: "Moussa",
 filiere: "IAGE",
 niveau: "L2",
 ville: "Dakar"
};
const resultats = [15, 11, 17, 13, 16];

//
const {nom,prenom,filiere}=etudiant
console.log(nom);

// 
const {niveau:classe}=etudiant
console.log(classe);

// 
const [a,b,,,e]=resultats
console.log(a,b,e);

//
const [n1,,n3]=resultats
console.log(n1,n3);

// 
const {email="saliou@gmail.com"}=etudiant
console.log(email);
console.log(`Bonjour je m'appel ${prenom} ${nom} ,je en ${classe} `);