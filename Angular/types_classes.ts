let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: Array<number> = [1,2,3,4];
let myObj: Object = { name:'Bill'};
let anythingVariable: any = "Hey";
anythingVariable = 25; 
let arrayOne: Array<boolean> = [true, false, true, true]; 
let arrayTwo: (number | string | boolean)[]= [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
class MyNode{

    private _priv: number;

    constructor(public val: number){
        this.val = 0;
        this.val = val;
    }

    doSomething(): void{
        this._priv = 10;
    }
}
const myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance.val);



function myFunction():void {
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
	throw new Error('Error message');
}