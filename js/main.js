/* Bienvemida y pregunto sobre edad */
alert ("Bienvenido a Jacksons Drinks")
alert ("Primero, queremos asegurarnos de que seas mayor de edad. \n - Si tenes mas de 18 años, podes ingresar.")

let edad = prompt ("- Por favor ingresa tu edad.")
let resultadoUno = 0;
let resultadoDos = 0;
let resultadoTres = 0;

if (edad >= 18) {

    alert("Muy bien! Eres Bienvenido!")
    alert ("¿Te gustaria ver nuestra carta?")

    for (let i=1 ; i<=4 ; i++) {
        /* hago una funcion multiplicar */
        function multiplicacion (vino1, costo1){
            /* devlaro variable vino */
            let vino =prompt("Estos son los vinos que tenemos actualmente \n - Vino tinto $2.000. \n - Vino blanco $1.700 \n - Vino espumoso $2.300 \n Que vino te gustaria comprar?")

            if(vino == "Vino tinto") {
                /* Defino valor de vino y por cuanto se multiplica */
                vino1 = parseInt= "2000"
                costo1 = prompt("cuantos quieres?")
                /* declaro var resultado para saber el toal del producto */
                resultadoUno = vino1*costo1

                alert ("El "+ vino +" te sale $"+ resultadoUno)/* imprimo el resultado */

            }   else if (vino == "Vino blanco") {

                vino1 = parseInt= "1700"
                costo1 = prompt("cuantos quieres?")

                resultadoDos = vino1*costo1

                alert ("El "+ vino +" te sale $"+ resultadoDos)

            } else if (vino == "Vino espumoso") {

                vino1 = parseInt= "2300"
                costo1 = prompt("cuantos quieres?")

                resultadoTres = vino1*costo1

                alert ("El "+ vino +" te sale $"+ resultadoTres)

            } else {
                /* si coloca un vino que no tengo imprime el alert */
                alert("No tenemos ese vino")
            }
        }
        multiplicacion()
        prompt ("quieres seguir comprando?")
        
    }
    
    resultadoTotal = resultadoUno + resultadoDos + resultadoTres
    alert ("El total de tu compra es: $" + resultadoTotal)
} else {
    alert("No puedes ingresar, porque sos menor de edad")
}