
class Jq{
    constructor(){

    }
    click(fn){
        fn();
    }
}

function $(){
    return new Jq();
}

