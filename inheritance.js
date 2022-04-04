class Support{
    name;
    designation = 'support web Deb';
    address = 'BD';
    constructor(name, address){
        this.name= name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}
const inhariName = new Support('Jony','BD');
console.log(inhariName);