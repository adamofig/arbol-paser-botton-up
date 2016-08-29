import java.io.*;

class Parser
{
	public static void main(String[] args) throws Exception
	{
		int no, loc=0, i, j;
		String str, stack="", temp;
		String[][] producciones;
		BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
		System.out.print("Ingresa el número de reglas de producción: ");
		no = Integer.parseInt(in.readLine());
		producciones = new String[no][2];
		System.out.println("Ingresa las reglas de producción:");
		for (i=0; i < no; i++)
		{
			System.out.print("Lado izq para la regla "+(i+1)+": ");
			producciones[i][0] = in.readLine();
			System.out.print("Lado derecho para la regla "+(i+1)+": ");
			producciones[i][1] = in.readLine();
		}
		System.out.println("Las reglas de producción son : ");
		for (i=0; i < no; i++)
		{
			System.out.println(producciones[i][0]+" -> "+producciones[i][1]);
		}
		System.out.print("Ingresa la cadena: ");
		str = in.readLine();
		while (loc < str.length()-1)
		{
			temp = str.substring(loc, str.indexOf(' ', loc));
			loc = str.indexOf(' ', loc)+1;
			for (i=0; i < no; i++)
			{
				if (temp.equals(producciones[i][1]))
				{       
					temp = producciones[i][0];
					break;
				}
                                
			}
			stack = stack+temp;
			System.out.println("contenido en stack: "+stack);
			for (i=0; i < no; i++)
			{
				if (stack.equals(producciones[i][1]))
				{
					stack = producciones[i][0];
					break;
				}
			}
		}
		System.out.println("contenido en stack : "+stack);
		if (stack.equals(producciones[0][0]))
			System.out.println("Aceptada.");
		else
			System.out.println("Rechazada.");
	}
}
