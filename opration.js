arr = [12, 23, 4, 5, 11, 123, 124];
const [a, b, c] = arr;
console.log(a, b, c);

const person = { 'name': 'John', 'age': 34, 'address': { 'street': 'John Street', 'city': 'Mumbai', 'state': 'Maharastra', 'country': 'India' } };
console.log(person.name);

const employee = { 'SrNo': 1, ...person };
console.log(employee);

const { name, age, address: { street } } = person;
console.log("Details\t\t Name:", name, "age:", age, "Address:", street);


const heroName = 'Iron Man';
console.log([...heroName], "\n\n");

// //Set

const marvel = new Set();
marvel.add("The Avengers");
marvel.add("Avengers: Age of Ultron");
marvel.add("Avengers: Infinity War");
marvel.add("Avengers: Infinity War");
marvel.add("Avengers: Endgame");

console.log(marvel, "\n");

const has_a = marvel.has("Avengers");
console.log("Checking lement: ", has_a, "\n");



// // Map
const heroes = new Map();

arrOfHero = [
    [1, "Iron Man"],
    [2, "Thor"],
    [3, "Captain America"],
    [4, "Super Man"],
]

arrOfHero.map(el => heroes.set(el[0], el[1]));
console.log(heroes);


// Array from

const set = new Set([1, 2, 3]);
console.log(Array.from(set));


const names_list = ["jeving", 'bittu', 'ankit'];
const list_1 = Array.from(names_list);
console.log("names_list:", list_1);

const list_2 = names_list.map(el => el.toUpperCase());

console.log("list_2:", list_2);

const any_name = "Jeving";
const any_name_1 = Array.from(any_name);
console.log("any_name:", any_name_1);