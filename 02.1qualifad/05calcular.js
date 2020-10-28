 var numero1 = 9
 var parametro = "+";
 var numero2 = 7;

 function calcular(numero1, parametro, numero2) {
     switch (parametro) {
         case "+":
             return numero1 + numero2;
             break;
         case "-":
             return numero1 - numero2;
             break
         case "*":
             return numero1 * numero2;
             break
         case "/":
             if (numero2 == 0) {
                 return numero1 / numero2
             } else {
                 return null
             }

             break
         default:
             return null;
             break;
     }
 }
 console.log(calcular(-2, "/", -2));