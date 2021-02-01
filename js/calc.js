var valor
var resultado

function botao(num) {
	valor = document.calc.visor.value += num
}

function calcula() {
	resultado = eval(valor)
	document.calc.visor.value = resultado.toLocaleString('pt-br')
}
