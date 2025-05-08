

// Problem 1 ☕☕

function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
        console.log(input.toUpperCase())
    } else {
        console.log(input.toLowerCase())
    }
}
console.log('Problem 1')
formatString("Hello");          // Output: "HELLO"
formatString("Hello", true);   // Output: "HELLO"
formatString("Hello", false);  // Output: "hello"




// Problem 2 ☕☕ 
// Description: Create a function that filters an array of objects by the rating property, 
// returning only items with a rating of 4 or more.

// Function Signature
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item => item.rating > 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log('Problem 2')
  console.log(filterByRating(books))
  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

// Problem 3 ☕

// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

// type Alphaneuarraysmeric = string | number;
function concatenateArrays<T>(...arrays: T[][]): T[]{
    console.log([].concat(...arrays))
}
console.log('Problem 3')
concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

// Problem 4 ☕☕

// Description:
// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getmodel() method.

class Vehicle {
    constructor(protected _make: string, protected _year: number) {

    }
    getInfo() {
        return (`This car made by ${this._make} in ${this._year}`)
    }
}

class Car extends Vehicle {


    constructor(_make: string, _year: number, private _model: string) {
        super(_make, _year)
    }

    getmodel() {
        return (`The car model is ${this._model} made by ${this._make} in ${this._year}`)
    }
}
console.log('Problem 4 ☕ have to edit ☕✅ 🍕')
const carToyota = new Car("Toyota", 2010, "Premio");
console.log(carToyota.getmodel())
const carHonda = new Car("Honda", 1985, "Civic");
console.log(carHonda.getmodel())


// Example: 🍕
// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();   // Output: "_make: Toyota, _year: 2020"
// myCar.get_model();  // Output: "_model: Corolla"

// Problem 5    ☕☕

// Description: Write a function that takes a string | number and returns:
// The length if it's a string
// The number multiplied by 2 if it's a number

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return (value.length);
    } else {
        return (value * 2)
    }
}
console.log('Problem 5')
console.log(processValue("hello")); // Output: 5
console.log(processValue(10));      // Output: 20

// Problem 6    ☕☕☕

// Description: Define an interface Product and create a function to find the product with the highest price in an array. 
// If the array is empty, return null.

// ✅ Interface & Function Signature:
interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length === 0){
        console.log("null");
    }else{
        console.log(products.reduce((max, current) =>
            (current.price > max.price ? current : max))
        )
    }
}

// Example 🍕
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
const prods = []
console.log('Problem 6')
getMostExpensiveProduct(products);
getMostExpensiveProduct(prods);
// Output: { name: "Bag", price: 50 }

// Problem 7    ☕☕
// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.

// Enum & Function Signature:
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string{
        if(day === Day.Saturday || day === Day.Sunday){
            console.log("Weekend");
        }else{
            console.log("Weekday");
        }
}

// Example:
console.log('Problem 7')
getDayType(Day.Monday);   // Output: "Weekday"
getDayType(Day.Sunday);   // Output: "Weekend"

// Problem 8    ☕☕
// Description: Create an async function that:

// Returns the square of a number after 1 second
// Rejects if the number is negative


// Function Signature:
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n >= 0) {
                resolve(n * n)
            } else {
                reject('Negative value is not accepted')
            }
        }, 1000)

    });
}


// Example:
console.log('Problem 8')
squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed
