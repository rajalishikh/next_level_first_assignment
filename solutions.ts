function filterEvenNumbers(numbers:number[]): number[] {
    let myEven_number= numbers.filter(num => num % 2 === 0);
    
    return myEven_number
    
   
}
filterEvenNumbers([1, 2,4, 5, 6,66,87]) 

function reverseString(str: string): string {
    let my_revers_string=str.split('').reverse().join('');
   
    return my_revers_string
}
reverseString("1,2,3,4,5"); 


type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
   
    if (typeof input === "string") {
       
        return "String";
    } else {
        
       
        return "Number";
    }
}
checkType(1236)


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    let my_return_value= obj[key];
   
    return my_return_value
}
const user = { id: 1, name: "John Doe", age: 21 }
getProperty(user,"name") 



interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

interface ReadBook extends Book {
    isRead: boolean;
}


function toggleReadStatus(book: Book): ReadBook {
    return {
        ...book,       
        isRead: true   
    };
}


const myBook: Book = {title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 }
const updatedBook = toggleReadStatus(myBook); 



class Person {
    
    name: string;
    age: number;

   
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        
        super(name, age);
        this.grade = grade;
    }

   
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


const student = new Student("Alice", 20, "A");



function getIntersection(arr1: number[], arr2: number[]): number[] {
    
    const set1 = new Set(arr1);
    
   let add_Array=arr2.filter(item => set1.has(item));
   console.log(add_Array)
    return add_Array
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

 getIntersection(array1, array2);


