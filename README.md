# arbol-paser-botton-up
acercamiento al método botton up para pasear una gramática dadas las reglas de producción y una cadena de entrada.
también conociodo como analizador sintactico ascendente. 

Ejemplo La entrada al algorimo son las reglas de producción.
el algoritmo construye el arbol de las hojas a la raiz. 
algoritmo shitf-reduce. 
tiene 2 acciones básicas. 
desplazar: consume un token de la cadena de entrada. 
reducir: sustituye la partde derecha de la regla por la izquierda. 
se utiliza una tabla de estados y una de análisis 



//procesa cadena token por token separados por ' ' (espacio)
{ mientras existan tokens en entrada o haya sutituciones  
    {si existen tokens entrada  
      {for
      si token actual puede cambiar por alguna regla entonces cambia.
      }
      agrega token a stack.
    }
    {for
    si contenido en  stack puede cambiar con alguna regla entonces cambia.
    }
    {for
    
    }
}


cuando acaba si esta 

S => S+S
S => id

entrada: id + id
----
temp="id";
id cambia por S
S se almacena en stack 
Stack: "S"
---
temp ="+"
+ se almancena en stack
stack: "S+"
----
temp="id"
id cambia por S
S se almacena en stack 
stack:"S+S"
el stack S+S cambia a S
---
no hay mas entradas termina el ciclo
si stack igual a primera regla de producion del lado izquierdo
aceptada





