function numAverage(numArray) {
    let moyenne = 0;
    let somme = 0;
    for (let valeur of numArray) {
      somme = somme + valeur;
    }
    moyenne = somme / numArray.length;
    return moyenne;
  }
  const notes = [0, 1, 5];
  const result = numAverage(notes);
  console.log("La moyenne de la classe est " + result);
  
  

  