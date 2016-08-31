# Paser tree botton up - Análizador sintáctico ascendente.
###acercamiento al método botton up para genrerar un arbol parser dadas las reglas de producción y una cadena de entrada.

##¿Como funciona?
-
Ingresar las reglas de produccion , primero lado derecho y luego lado izquierdo, ejemplo. 

* S

* S+S

esto es S=>S+S.

Ingresar la cadena de entrada. nota para facilidad del programa cada token de la entrada debe estar sepadado por ' ' (espacio en blanco) incluso el final, ejemplo. 

* "id + id ". 

##Explicación de algoritmo
---

    while{ mientras existan tokens en entrada o haya cambios  
            {si existen tokens entrada  
                for{
                si token actual puede cambiar por alguna regla entonces cambia .
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

####Ejemplo 1

reglas:
* S => S+S
* S => id

entrada: 
* id + id
----
token="id";
id cambia por S
Stack: "S"
---
token ="+"
stack: "S+"
----
token="id"
id cambia por S
stack:"S+S"
stack S+S cambia a S
---
no hay mas entradas termina el ciclo
stack es igual a 1° regla de produccón lado derecho.
¡cadena aceptada!



ejemplo 2
1. S=>E
2. E=>T
3. E=>E+T
4. T=>id
5. T=>(E)

entrada "( id + id ) ".

token "("
stack: "("
token: "id"
id cambia a T
stack: "(T"
token:"+"
T cambia a E
stack: "(E+"
token "id"
id cambia a T
stack:"(E+T"
token:")"
E+T cambia a E
stack:"(E)"
no hay mas tokens pero hubo cambios 
(E) cambia a T
stack:"T"
hubo cambios.
T cambia a E
stack:"E"
E cambia a S
stack:"S"
no hay mas tokens, no hay cambios, termina el algoritmo. 
como stack es igual a 1° regla de produccion lado derecho.
¡la cadena es aceptada!








