 // Problem 1

const filterEvenNumbers  = (evenNum : number[]):number[]=>{
if(evenNum.length === 0){
    return []

}else{
   return evenNum.filter((num)=> num%2===0)
}
}


// Problem 2

const reverseString=(reverse:string):string=>{
    return reverse.split("").reverse().join('')
  
}

// Problem 3

type StrOrNum = number |string

const checkType =(value:StrOrNum):StrOrNum=>{
    if(typeof value === "string"){
        return "String"
    }else{
        return "Number"
    }
}

// Problem 4

const getProperty = < T, k extends keyof T> (obj: T ,key:k)=>{
return obj[key]
}


// Problem 5

interface Book {
title:string
author:string
publishedYear:number
}
const toggleReadStatus =(value:Book)=>{
    return {
        ...value,
        isRead: true
    }
}


// Problem 6

class Person {
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
}

class Student extends Person{
    grade :string;
    constructor(name:string,age:number,grade:string){
        super(name,age,)

        this.grade = grade
    }
    getDetails(){
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;

    }
}


// Problem 7:

const getIntersection=(arr1:number[],arr2:number[]):number[]=>{
    const result = arr1.filter((arr)=>arr2.includes(arr))
    return result

}

