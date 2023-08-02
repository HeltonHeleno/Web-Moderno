// operador ... rest(juntar) / spread(espalhar)
// usar o rest co parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar o spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)