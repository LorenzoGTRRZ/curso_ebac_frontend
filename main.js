function Veiculo(modelo, fabricante){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.acelerar = function() {
        console.log(`${this.fabricante}, ${this.modelo} está acelerando.`);
    }
    this.frear = function() {
        console.log(`${this.fabricante}, ${this.modelo} está freando.`);
    }
}

function Carro(modelo, fabricante, numPortas) {
    this.numPortas = numPortas;

    this.abrirPortas = function() {
        console.log(`${this.fabricante}, ${this.modelo} está abrindo ${this.numPortas} portas.`);
    }

    Veiculo.call(this, modelo, fabricante);
}

function Moto(modelo, fabricante, cilindradas){
    this.cilindradas = cilindradas;
    this.ligarMotor = function() {
        console.log(`${this.fabricante}, ${this.modelo} está ligando o motor de ${this.cilindradas} cilindradas.`);
    }

    Veiculo.call(this, modelo, fabricante );
}

const carro1 = new Carro('Toyota', 'Corolla', 4);
const moto1 = new Moto('Honda', 'CBR500R', 500);
const carro2 = new Carro('Volkswagen', 'Gol', 2);

carro1.acelerar();
carro1.abrirPortas();
moto1.acelerar();
moto1.ligarMotor();
carro2.frear();

