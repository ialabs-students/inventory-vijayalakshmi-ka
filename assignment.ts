interface Product {
    name: string;
    code: string;
    price: number;
    category: string;
    isGood: boolean;
}

interface Inventory {
    products: Product[];
}
class Store {
    inventory: Inventory = {products: []};
    constructor(){}

    addProduct(product: Product): void {
        this.inventory.products.push(product);
    }
    removeProduct(code: string) {
        let index = -1;
        for(let i = 0; i<this.inventory.products.length; i++) {
            if(code  === this.inventory.products[i].code) {
                index = i;
            }
        }
        if(index != -1) {
            this.inventory.products.splice(index, 1);
        }
    }
    // defect(isGood:boolean){
    //     if(isGood == "true" && isGood!="false"){
    //         return "The product is defect";

    //     }
    //     else{
    //         return "no";
    //     }
    // }
    getProducts(): Product[]{
       return this.inventory.products;
    }
}
function testAddproductToStore() {
    var store  = new Store();
    console.log(store.getProducts());
    console.log("addition")
    store.addProduct({name: "Parle-G", code:"P001", price: 10, isGood: true, category: "Biscuts"});  
    console.log(store.getProducts());
    console.log("deletion")
    store.removeProduct("P001");
    console.log(store.getProducts());
    store.addProduct({name: "bytes", code:"001", price: 10, isGood: true, category: "Biscuts"});   
    console.log(store.getProducts());
    // store.defect(true);
    // console.log(store.getProducts);
   }
   
   testAddproductToStore();
