class jsClass {
    discount = 0;
    #name;// we need to declare before assigning variable private variable
    constructor(n, p) {
        console.log("calling constructor");
        this.#name = n;// making private
        this.power = p;
        this.powerlist = ["Technology", "Love"];
        console.log("display method called with name:", this.#name, "Power: ", this.power, "PowerList: ", this.powerlist, " ");

    }
    static customMethod() {
        console.log("calling custom method");
    }

    getName() { 
        console.log(this.#name);
    }
    setName(name) {
        this.#name = name;
        console.log(this.#name);
     }

    display() {
        console.log("display method called with name:", this.#name, "Power: ", this.power, "PowerList: ", this.powerlist, " ");
    }
}

const j = new jsClass("Iron Man", "Money");
// j.customMethod();
j.name = "Hulk";
// j.power = "Hulk is Monster";
// console.log("discount:", j.discount);
j.display();
j.getName();
j.setName("Hulk");
j.display();