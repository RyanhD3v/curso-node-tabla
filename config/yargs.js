const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: 10,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es el limite hasta donde llegara la multiplicacion'
                })
                .check( (argv, options) =>{
                    if (isNaN( argv.b )) {
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

//Module para exportar yargs.js a el archivo a app.js
module.exports = argv;