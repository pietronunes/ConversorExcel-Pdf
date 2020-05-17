const Reader = require('./Reader');
const Processor = require('./Processor');

let leitor = new Reader;

async function main(){

    let dados = await leitor.Read('./alunos.csv');
    let dadosFormatados = Processor.Process(dados);

    console.log(dadosFormatados);

}




main();

