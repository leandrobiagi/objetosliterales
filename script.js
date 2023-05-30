// Objeto literal 1
const celular = {
    color: "negro",
    sistema: "Android",
    marca: "LG",

    llamar: function() {
        console.log("Llamando...")
    },
    mensajear: function() {
        console.log("Enviando mensaje...")
    },
    fotografiar: function() {
        console.log("Sacando una foto...")
    }
}

console.log("El color es: " + celular.color)
console.log("El sistema operativo es: " + celular.sistema)
console.log("La marca es: " + celular.marca)
celular.llamar()
celular.mensajear()
celular.fotografiar()

// Objeto literal 2
const numero = {
    valor: 2,
    par: true,

    sumar: function(num) {
        return 2 + num
    },
    restar: function(num) {
        return 2 - num
    },
    multiplicar: function(num) {
        return 2 * num
    }
}

console.log("El número es: " + numero.valor)
console.log("¿Es par? " + numero.par)
console.log(numero.sumar(10))
console.log(numero.restar(1))
console.log(numero.multiplicar(5))

// Objeto literal 3
const robot = {
    material: "aluminio",
    armadura: true,
    peso: 120,

    mover: function(direccion) {
        return ("Moviendo al " + direccion)
    },
    cargar: function() {
        console.log("Cargando bateria...")
    },
    bailar: function(baile) {
        return "Bailando " + baile
    }
}

console.log("El robot es de: " + robot.material)
console.log("¿Tiene armadura? " + robot.armadura)
console.log("Su peso es: " + robot.peso + "Kg")
console.log(robot.mover("Norte"))
robot.cargar()
console.log(robot.bailar("Vals"))