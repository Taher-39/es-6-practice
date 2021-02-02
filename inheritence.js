class FatherName {/* base class */
    constructor() {
        this.FatherName = 'Fajle';
    }
}
class Child extends FatherName {/* derive class who collect value other class*/
    constructor(child){
        super(); // Now 'this' is initialized by calling the parent constructor.
        this.Child = child;
    }
    getFulName(){
        return this.FatherName + ' ' + this.Child;
    }
}

const name1 = new Child('Rabbi');
const name2 = new Child('Rashel');
console.log(name1.getFulName());
console.log(name2);

