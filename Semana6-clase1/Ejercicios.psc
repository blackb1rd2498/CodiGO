Algoritmo Ejercicios
	Definir a Como Real
	Definir b Como Real
	Definir c Como Real
	Definir d Como Real
	Definir x Como Real
	
	
	//ejercicio 1
	Escribir "Ingresa 2 valores para ver su suma: "
	Leer a, b
	x=a+b
	
	Escribir "Suma total : " x
	
	a=0
	b=0
	x=0
	
	//ejercicio 2
	Escribir "Ingresa 4 valores para ver su promedio: "
	Leer a, b, c, d
	x=(a+b+c+d)/4
	
	Escribir "Promedio total : " x
	
	a=0
	b=0
	c=0
	d=0
	x=0
	
	//ejercicio 3
	Escribir "Ingresa base y altura de rectangulo para ver el area: "
	Leer a, b
	x=a*b
	
	Escribir "El area total es : " x
	
	a=0
	b=0
	c=0
	d=0
	x=0
	
	//ejercicio 4
	Escribir "Ingresa base y altura de triangulo para ver el area: "
	Leer a, b
	x=(a*b)/2
	
	Escribir "Resultado total : " x
	
	a=0
	b=0
	c=0
	d=0
	x=0
	
	//ejercicio 5
	Escribir "Ingresa radio de la circuferencia para ver el area: "
	Leer a
	x=pi*(a^2)
	
	Escribir "Resultado total : " x
	
	a=0
	b=0
	c=0
	d=0
	x=0
	
	//ejercicio 6
	Escribir "Ingresa horas trabajadas por dia: "
	Leer a
	Escribir "Ingresar Salario de hora hombre: "
	Leer b
	x=(a*b)*7
	
	Escribir "Sueldo Semanal : " x
	
	a=0
	b=0
	c=0
	d=0
	x=0
	
	//ejercicio 7
	Escribir "Ingresa las largo de la tela : "
	Leer a
	Escribir "Ingresa las ancho de la tela : "
	Leer b
	
	x=(a/0.0254)
	c=(b/0.0254)
	
	Escribir "Largo de tela en pulgadas : " x
	Escribir "Ancho de tela en pulgadas : " c
	
	a=0
	b=0
	c=0
	d=0
	x=0
	
	//ejercicio 8
	Escribir "Ingresa cantidad de soles : "
	Leer a
	
	x=(a*3.95)
	
	Escribir "Tienes esta cantida de dolares : " x
	
	a=0
	b=0
	c=0
	d=0
	x=0
	
	//ejercicio 9
	Escribir "Ingresa tu año de nacimiento: "
	Leer a
	
	Si(a>2002)
		Escribir "No puedes trabajar aca"
	SiNo
		Escribir "Bienvenido al trabajo"
	FinSi
		
	a=0
	b=0
	c=0
	d=0
	x=0
	
	//ejercicio 10
	Definir name1 Como Caracter
	Definir name2 Como Caracter	
	Definir name3 Como Caracter

	Escribir "Ingresa tu nombre: "
	Leer name1
	Escribir "Ingresa tu edad: "
	Leer a
	Escribir "Ingresa tu nombre: "
	Leer name2
	Escribir "Ingresa tu edad: "
	Leer b
	Escribir "Ingresa tu nombre: "
	Leer name3
	Escribir "Ingresa tu edad: "
	Leer c
	
	Si(a>b & b>c )
		Escribir "El menor de edad tiene : " c
		Escribir "Y su nombre es: " name3
	SiNo
		Si(c>a & a>b )
			Escribir "El menor de edad tiene : " b
			Escribir "Y su nombre es: " name2
		SiNo
			Escribir "El menor de edad tiene : " a
			Escribir "Y su nombre es: " name1
		FinSi
	FinSi
	
	
FinAlgoritmo


