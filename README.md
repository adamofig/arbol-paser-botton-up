# Paser tree botton up - Analizador sintáctico ascendente.
###acercamiento al método botton up para generar un arbol parser dadas las reglas de producción y una cadena de entrada.

##¿Cómo funciona?
-
Ingresar las reglas de producción, primero lado derecho y luego lado izquierdo, ejemplo. 

* S

* S+S

esto es S=>S+S.

Ingresar la cadena de entrada. nota para facilidad del programa cada token de la entrada debe estar separado por ' ' (espacio en blanco) incluso el final, ejemplo. 

* "id + id "

##Explicación de algoritmo
---

    while{ mientras existan tokens en entrada o haya cambios  
            {si existen tokens en entrada  
                for{
                si token actual puede cambiar con alguna regla entonces cambia .
                }
                agrega token a stack.
            }
        for{
            si contenido en  stack puede cambiar con alguna regla entonces cambia.
        }
        for{
            si stack incia con '('{ 
                si contenido de stack despues de '('  puede cambiar entonces cambia.
            }
        }
    }

###Ejemplo 1.
____

####Reglas:
1. S => S+S
2. S => id

####Entrada: 
* id + id

####Procedimiento:
* token="id";
* id cambia por S
* Stack: "S"
- - -

* token ="+"
* stack: "S+"
___

* token="id"
* id cambia por S
* stack:"S+S"
* stack S+S cambia a S


no hay más entradas termina el ciclo

stack es igual a 1° regla de producción lado derecho.

¡Cadena aceptada!


___


###Ejemplo 2.
____
####Reglas:
1. S=>E
2. E=>T
3. E=>E+T
4. T=>id
5. T=>(E)

####Entrada: 
"( id + id ) ".

####Procedimiento. 
* token "("
* stack: "("
___

* token: "id"
* id cambia a T
* stack: "(T"
___

* token:"+"
* T cambia a E
* stack: "(E+"
___

* token "id"
* id cambia a T
* stack:"(E+T"
___

* token:")"
* E+T cambia a E
* stack:"(E)"
___

* no hay más tokens pero hubo cambios 
* (E) cambia a T
* stack:"T"
___

* hubo cambios.
* T cambia a E
* stack:"E"
___

* hubo cambios
* E cambia a S
* stack:"S"

No hay más tokens, no hay cambios, termina el algoritmo. 

Como stack es igual a 1° regla de produccion lado derecho **¡la cadena es aceptada!.**

###Nota: el algoritmo no funciona en los casos más complicados, ejemplo.

Con las reglas del ejemplo 2 , la cadena "id + ( id + id ) "  produce error.








