


function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === true || toUpper === undefined) {
        console.log(input.toUpperCase())
    } else {
        console.log(input.toLowerCase())
    }
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    return items.filter(item => item.rating > 4);
}



function concatenateArrays<T>(...arrays: T[][]): T[]{
    console.log([].concat(...arrays))
}



class Vehicle {
    constructor(private _make: string, private _year: number) {

    }
    getInfo() {
        console.log(`Make: ${this._make}, Year: ${this._year}`)
    }
}

class Car extends Vehicle {


    constructor(_make: string, _year: number, private _model: string) {
        super(_make, _year)
    }

    getmodel() {
        console.log(`Model: ${this._model}`)
    }
}



function processValue(value: string | number): number {
    if (typeof value === "string") {
        return (value.length);
    } else {
        return (value * 2)
    }
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