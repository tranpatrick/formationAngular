let lastname = 'Martin';

let speech = `
Madame ${lastname},

Veuillez trouver ci après une liste de recommandations :
    
    - directive 1
    - directive 2
    - etc ...
    
    Amicalement,

    Pat :D.
`;

console.log(speech); //formaté
document.write(speech); //non formaté
alert(speech); //formaté

let processTemplate = (param1, param2) => {
    console.log('param1 ' + param1);
    console.log('param2 ' + param2);
}

// Permet de récupérer les différents paramètres
let speech2 = processTemplate`Madame ${lastname},

Veuillez trouver ci après une liste de recommandations :
    
    - directive 1
    - directive 2
    - etc ...
    
    Amicalement,

    Pat :D.
`;