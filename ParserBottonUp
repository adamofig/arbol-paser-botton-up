import java.io.*;

class ParserBottonUp {

    public static void main(String[] args) throws Exception {
        int no, loc = 0, i, j;
        boolean hayCambio = true;
        String str, stack = "", token = "";
        String[][] producciones;
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        System.out.print("Ingresa el número de reglas de producción: ");
        no = Integer.parseInt(in.readLine());
        producciones = new String[no][2];
        System.out.println("Ingresa las reglas de producción:");
        //Guarda las entradas 
        for (i = 0; i < no; i++) {
            System.out.print("Lado izq para la regla " + (i + 1) + ": ");
            producciones[i][0] = in.readLine();
            System.out.print("Lado derecho para la regla " + (i + 1) + ": ");
            producciones[i][1] = in.readLine();
        }
        System.out.println("Las reglas de producción son : ");
        for (i = 0; i < no; i++) {
            System.out.println(producciones[i][0] + " -> " + producciones[i][1]);
        }
        System.out.print("Ingresa la cadena: ");
        str = in.readLine();

        // Comineza el algoritmo
        while (loc < str.length() - 1 || hayCambio) {
            hayCambio = false;

            if (loc < str.length() - 1) {
                token = str.substring(loc, str.indexOf(' ', loc));
                loc = str.indexOf(' ', loc) + 1;
                
                for (i = 0; i < no; i++) {
                    if (token.equals(producciones[i][1])) {
                        token = producciones[i][0];
                        hayCambio = true;
                        break;
                    }
                }
                stack = stack + token;
            }

            System.out.println("contenido en stack: " + stack);
            for (i = 0; i < no; i++) {
                if (stack.equals(producciones[i][1])) {
                    stack = producciones[i][0];
                    hayCambio = true;
                    break;
                }

            }
            if (stack.substring(0, 1).equals("(")) {

                for (i = 0; i < no; i++) {
                    if (stack.substring(1).equals(producciones[i][1])) {
                        stack = "(" + producciones[i][0];
                        hayCambio = true;
                        break;
                    }
                }
            }
        }
        //System.out.println("contenido final : "+stack);
        if (stack.equals(producciones[0][0])) {
            System.out.println("Aceptada.");
        } else {
            System.out.println("Rechazada.");
        }
    }
}
