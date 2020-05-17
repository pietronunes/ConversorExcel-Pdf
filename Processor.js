class Processor {

    static Process(data){

        let preFormated = data.split('\r\n')
        let rows = [];

        preFormated.forEach((row) => {
            let formated = row.split(',')
            rows.push(formated);
        });

        return rows;


    }
}

module.exports = Processor;