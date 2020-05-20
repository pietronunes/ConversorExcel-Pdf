const Reader = require('./Classes/Reader');
const Processor = require('./Classes/Processor');
const Table = require('./Classes/Table');
const HtmlParser = require('./Classes/HtmlParser');
const Writer = require('./Classes/Writer');
const PDFWriter = require('./Classes/PDFWriter');

let leitor = new Reader;
let escritor = new Writer;

async function main(){

    let dados = await leitor.Read('./alunos.csv');
    let dadosFormatados = Processor.Process(dados);

    let tabela = new Table(dadosFormatados);

    let html = await HtmlParser.Parse(tabela);

    escritor.Write('./html/' + Date.now() + '.html', html);
    PDFWriter.WritePDF('./pdf/' + Date.now() + '.pdf',html);

}



main();

