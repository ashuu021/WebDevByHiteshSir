function Tea(type){
    this.type=type;
    this.discribe=function(){
        return `This is a ${type}.`
    }

}
let lemonTea=new Tea("Lemon tea");
console.log(lemonTea.discribe);
