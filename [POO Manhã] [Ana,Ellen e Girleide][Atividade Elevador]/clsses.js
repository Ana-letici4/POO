class Passageiro{

    constructor(andarPretendido){

        this.andarPretendido = andarPretendido;
    }

}

class Elevador{

    constructor(){

        this.andarAtual = 0;
        this.quantidadeMaximaDePassageiros = 9;
        this.listaDePassageiros = [];
    }
    adicionarPassageiro (passageiro){

        if (this.quantidadeMaximaDePassageiros >= this.listaDePassageiros.length) {
            this.listaDePassageiros.push(passageiro)

            console.log(`1 passageiro que deseja ir ao andar ${passageiro.andarPretendido} ENTROU no elevador.\nAgora o elevador tem ${this.listaDePassageiros.length} passageiros.`);
        } else {
            console.log(`O passageiro não pode entrar. O elevador já atingiu a capacidade máxima: ${this.quantidadeMaximaDePassageiros}`);
        }
        
    }
    movimentar(andarDeDestino) {
        this.andarAtual = andarDeDestino;
        console.log("=".repeat(50)+`\nMOVIMENTAÇÃO\nAgora o elevador está no ANDAR ${this.andarAtual}`);

        var j = 0;
        for (let i = 0; i < this.listaDePassageiros.length; i++) {
            if (this.listaDePassageiros[i].andarPretendido == this.andarAtual) {
                this.listaDePassageiros.splice(i,1)
                j++
            } 
        }

        if (j == 0) {
            console.log(`NENHUM passageiros SAÍRAM do elevador.\n${this.listaDePassageiros.length} passageiros CONTINUAM no elevador.`);    
        } else {
        console.log(`${j} passageiros SAÍRAM do elevador.\n${this.listaDePassageiros.length} passageiros CONTINUAM no elevador.`);
        }
        console.log(this.listaDePassageiros);
    }
}



