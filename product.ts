
class waffle implements department{
    productNumber: string;
    productName: string;
    count: string;
    constructor(productNumber: string, productName: string, count: string) {
        this.productNumber = productNumber; 
        this.productName = productName;
        this.count = count;
    }
    
    brand: string = 'waffle';
}
interface department {
    productNumber: string;
    productName: string;
    count: string;
    
}
class chips implements department {
    productNumber: string;
    productName: string;
    count: string;
    constructor(productNumber: string, productName: string, count: string) {
        this.productNumber = productNumber; 
        this.productName = productName;
        this.count = count;
    }
    brand: string = 'chips';
    
}

var waffle1 = new waffle('1', 'vanila','20');

var waffle2 = new waffle('2', 'belgium','21');

var  chips1 = new chips('1','lays','23');
var chips2 = new chips('2','bingo','13');
var chips3 = new chips('3','kurkure','10');

 delete chips3['productNumber'];
 
 console.log("-----------------------");
 var waffle4 = [{brand:"waffle", productNumber:"2",productName:"butterscotch",count:"23"},
 {brand:"waffle", productNumber:"3",productName:"strawberry",count:"21"}];
console.log("Department dataset");

console.log(waffle1,waffle2,chips1,chips2);
console.log("--------------------------------");
console.log("delete");

console.log(chips3);

console.log("-----------------------");
console.log("addional");
console.log(waffle4);
console.log("-----------------------");
console.log("threshold");



// console.log(getThres);