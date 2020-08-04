const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite = 10) => {
  let x = 1;
  while (x <= limite) {
    console.log(`${base} * ${x} = ${base * x}`.green);
    x++;
  }
};

const multiplicar = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ${base} no es un número`); //si no se le pone return, sigue corriendo el codigo
      return;
    }
    if (limite < 1) {
      reject(`El valor ${limite} no es un número positivo`); //si no se le pone return, sigue corriendo el codigo
      return;
    }

    let x = 1;
    let data = '';
    while (x <= limite) {
      data += `${base} * ${x} = ${base * x} \n`;
      x++;
    }
    fs.writeFile(`tabla del ${base}.txt`, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`tabla del ${base}`);
      }
    });
  });
};

module.exports = { multiplicar, listarTabla };
