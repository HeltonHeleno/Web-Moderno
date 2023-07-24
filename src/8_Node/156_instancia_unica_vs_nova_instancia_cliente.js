const contadorA = require ('./156_instancia_unica_vs_nova_instancia')
const contadorB = require ('./156_instancia_unica_vs_nova_instancia')

const contadorC = require ('./156_instancia_unica_vs_nova_instancia_2')()
const contadorD = require ('./156_instancia_unica_vs_nova_instancia_2')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)