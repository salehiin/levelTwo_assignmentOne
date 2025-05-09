

# ☕ What are some differences between interfaces and types in TypeScript?

# In Typescript we use 2 types of operator to declare type. these are: type operator and intrface operator.

# Below are some differences of these operators;

1. When declare type using type keyword for type operator and interface for interface operator. 
2. Type operator uses equal sign but interface don't use equal sign.
3. Type alias will use for premitive & non-Premitive data type while interface only for non prmitive data.
4. When add a new property with an existing object type alias use intersect(&) and interface use extends keyword
5. When declare array type data type alias declare only data type, example: type Books = string[] but interface declare not only data type also index number, example: interface Books {[index : number] : string}.
6. Type alias is more clean than interface when using with array and funtion, so it is recommended to use type alias with array and function.


# ☕ What is the use of the keyof keyword in TypeScript? Provide an example.

# typeof operator inherits keys of a existing type and creates a new union types of string literal. example-

# Below is a type of string:
    
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

# then manually creates a new type using above key:
    type Owner = 'bike' | 'car' | 'ship'; // manually

# alternative creates a new type like above one using typeof operator:
    type Owner2 = keyof Vehicle;

# below using above both type creates two same variable;
const person1 : Owner = '';
const person2 : Owner2 = '';



# ☕ Explain the difference between any, unknown, and never types in TypeScript.

# any type- when we don't declare explicitly the type typescript compiler infers that it will be any type. any type shouldn't use.

# Example of a unknown types:
let d; then we can assign any type of data in d. like: d = "string", d = number, d = null etc.

# Unkown types - When define it is not sure what will be the type but in runtime we can return it's type. In runtime we will check it's type by using typeof operator.

# Example of a unknown types:

    const getSpeedInMeterPerSecond = (value:unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`)
        }
        else if(typeof value === 'string'){
            // const valueInNumber = value.split(' ')
            const [result, unit] = value.split(' ')
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed} ms^-1`)
        }
        else{
            console.log('wrong input');
        }
    }
    getSpeedInMeterPerSecond(`1000 kmh^-1`)


# never types - Function which returns nothing just throw an error it's type will be never type

# Example of a never types:
    const throwError = (msg: string): never => {
        throw new Error(msg);
    };
    
    throwError('Muskil se error');
