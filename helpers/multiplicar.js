
//para usar este modulo de File system
const fs = require('fs');
//Constante para usar la dependencia de colors
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {

        
        let salida = '';
        let consola = '';
    
            for ( let i = 1; i<=hasta; i++) {
                //La salida debe ir limpia para que no descomponga el .txt
                salida += `${ base } x ${ i } = ${base * i}\n`;
                //La consola contiene colores o caracteres especiales para una mejor visualizacion en la consola 
                consola += `${ base } ${'x'.white} ${ i } ${'='.white} ${base * i}\n`.underline.yellow;
            }
            if(listar){
                console.log('====================');
                console.log('   Tabla del: '.rainbow, base );
                console.log('====================');
                console.log(consola);
                }
                
    
            fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
            return`tabla-${ base }.txt`.underline.red;
    } catch (err) {
        throw err;
    }



    }


//Module para exportar multiplicar.js a el archivo a app.js
module.exports = {
    crearArchivo
}