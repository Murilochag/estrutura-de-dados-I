class myArray{
    constructor(length = 0){
        this.count = 0;
        this.items = [0];
        for( let i = 0; i < length; i++ )
            this.items[ i ] = "murilo";
    }

    printArray(){
        console.log(this.items);
    }
}

const contador = new myArray( 30 );
contador.printArray();