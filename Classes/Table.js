class Table {
    constructor(arr){
        this.header = arr[0];
        arr.shift(); // exibe array tirando o indice 0;
        this.rows = arr;

    }

    get RowsCount(){
        return this.row.length;
    }

    get ColunsCount(){
        return this.header.length;
    }
}

module.exports = Table;