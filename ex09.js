/*
    Ecrire une fonction "boostedEvenAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombres PAIRS du tableau

*/

/*      Test 1
    Appel à la fonction "boostedEvenAddition",
    prenant en paramètre le tableau [4, 5, 6],
    et nous attendons comme résultat 10;
*/

// boostedEvenAddition([4, 5, 6]);

/*      Test 2
    Appel à la fonction "boostedEvenAddition",
    prenant en paramètre le tableau [1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12],
    et nous attendons comme résultat 44;
*/

// boostedEvenAddition([1, 3, 4, 5, 4, 6, 9, 8, 11, 10, 11, 12]);

//  écrire votre code sous ce commentaire
function boostedEvenAddition(table) {
    var result = 0;
    for (var i = 0; table.length > i; i++) {
        if (table[i] % 2 == 0) {
            result += table[i];
        }
        }
        return result;
    }
    console.log(boostedEvenAddition([4, 5, 6]));
    console.log(boostedAddition([4, 4, 6, 8, 10, 12]));