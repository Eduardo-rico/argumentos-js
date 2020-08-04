const argv = require('./config/yargs').argv; // sacar la constante argv del archivo
const colors = require('colors/safe');

const { multiplicar, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; //todos los comandos solos, los que no son --base=10 o -b=10 o -b 10

switch (comando) {
  case 'listar':
    console.log('listar');
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    console.log('crear');

    multiplicar(argv.base, argv.limite)
      .then((archivo) =>
        console.log(`Archivo creado: "${colors.blue(archivo)}"`)
      )
      .catch((err) => console.log(err.red));

    break;
  default:
    console.log('comando no reconocidio');
}

// { _: [], '$0': 'app.js' }

// let parametro = argv2[2];
// let base = parametro.split('=')[1];

// console.log(base);
