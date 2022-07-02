/*CONST: Declara un nombre de lectura constante de solo y ámbito de bloque.

DO...WHILE:crea un bucle que ejecuta una sentencia especificada, hasta que la condición 
de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la
sentencia, dando como resultado que la sentencia especificada se ejecute al menos una vez.
*/
do{
    do{
        /*LET: Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.*/
        let tmulti = prompt("¿Qué tabla de multiplicar quieres?,valor defecto 10:");
        
        if(tmulti === ""){
            tmulti=10
            
        }
        /*VAR: Declara una variable, opcionalmente la inicia a un valor.*/
        var tabla = Number(tmulti);
        // ALERT(): Despliega un cuadro de texto el cual no requiere información por parte del usuario
        /*IF...ELSE: Ejecuta una sentencia si una condición específica es evaluada como 
        verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada. */
        if(Number.isNaN(tabla) === true);{
        
        }
    }while(Number.isNaN(tabla) === true);
    /*FOR: Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas
    por puntos y comas, seguidas de una sentencia ejecutada en un bucle. */
    let muestra ="";
    for(let i = 1; i < 11; i++){
    // ALERT(): Despliega un cuadro de texto el cual no requiere información por parte del usuario
        muestra  = muestra + tabla + " * " + i + " = " + (tabla * i)+ "\n";
    }
    alert(muestra);
    /*VAR: Declara una variable, opcionalmente la inicia a un valor.*/
    var valid = confirm("¿Quieres otra tabla de multiplicar?");
}while(valid === true)