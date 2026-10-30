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

// Exercice 3
const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" };

// 
const tousLesEtudiants=[...groupeA,...groupeB]
console.log(tousLesEtudiants);

// 
const copieGroupeA=[...groupeA,"Cheich"]
console.log(groupeA);
console.log(copieGroupeA);

// 
 const {nom:nomEtu,filiere:filiereEtu,niveau:niv,age=22,ville="Dakar"}=etudiantBase
 console.log(ville);

// 
const {nom:n,filiere:f,niveau="L3"}=etudiantBase
console.log(niveau);

//  Exerice N°4
const foncN=(...nombre)=> {
    let som=0
    for(let i=0;i<nombre.length;i++){
        som+=nombre[i]
    }
    return som
}
console.log(foncN(1,3));
console.log(foncN(1,3,6));
console.log(foncN(1,3,6,5,9));

// 

// 
const afficherPremierEtAutres=(premier, ...autres)=>{
    let autre=[]
    for(let i=0;i<autres.length;i++){
        autre.push(autres[i])
    }
    return {premier:premier,autres:autre}

}
console.log(afficherPremierEtAutres('Moi',"Lui","Elle","Et les autres"));

// 
const creerFiche=(nom,filiere,...competences)=>{
    let cmp=[]
    for(let i=0;i<competences.length;i++){
        cmp.push(competences[i])
    }
    return {nom:nom,filiere:filiere,competences:cmp }

}
console.log(creerFiche('Saliou','LG',"Tteste,",'teste',3));

// 
console.log("Car elle permet de recuperer tout les arguments restant dans un seul tableau ");

// Exercice N°5
const etudiantL2 = {
 id: 104,
 prenom: "Aminata",
 nom: "Fall",
 notes: [13, 16, 12],
 filiere: "IAGE"
};

// 
const extraireIdentite=(etudiant)=>{
    const {nom,prenom,filiere}= etudiantL2
    return {
        nom,prenom,filiere
    }
}
console.log(extraireIdentite(etudiantL2));

// 
const calculerMoyenneNotes=(notes)=>{
    if (notes.length<=0){
        return 0
    }else{
        let moy=0
        let som=0
        for(let i=0;i<notes.length;i++){
            som+=notes[i]
        }
        moy=som/notes.length
        return moy
    }
    
}
console.log(calculerMoyenneNotes([10,10]));

// 
const  ajouterNote=(etudiant, nouvelleNote)=>{
    return{
        ...etudiant,notes:[...etudiant.notes,nouvelleNote]
    }
}
console.log(ajouterNote(etudiantL2,18));

// 
 const creerResume=(etudiant, ...options) =>{
    const id=extraireIdentite(etudiantL2)
    const moys=calculerMoyenneNotes(etudiant.notes)


    return{id,moys,options}
 }
 console.log(creerResume(etudiantL2,'Teste'));