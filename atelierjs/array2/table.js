let maRegexp = /d(b+)(d)/i;
let monTableau = maRegexp.exec("cdbBdbsbz");

console.log(monTableau);

let plateau = [
    ['T','C','F','R','K','F','C','T'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['t','c','f','k','r','f','c','t'] ];
  
  console.log(plateau.join('\n') + '\n\n');
  
  // On déplace le pion de deux cases en avant 2
  plateau[4][4] = plateau[6][4];
  plateau[6][4] = ' ';
  console.log(plateau.join('\n'));

  values = [];
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
};
console.table(values)