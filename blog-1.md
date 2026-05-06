Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing?

TypeScript আমাদের code কে safe এবং predictable রাখতে সাহায্য করে। কিন্তু সবসময় এই safety বজায় থাকে না যদি আমরা ভুল type ব্যবহার করি। 
বিশেষ করে any type অনেক সময় পুরো type system ই ভেঙে দেয়। এর পরিবর্তে unknown অনেক বেশি safe এবং professional choice।

1. Why any is Calle a type Safety Hole?

any ব্যবহার করলে TypeScript আর কোনো type checking করে না। মানে  যেকোনো operation করতে পারে, এমনকি সেটা ভুল হলেও।
let data: any = "Hello"data.toupperCase()

typeScript আর warning দেয় না
ভুল code সহজে run হয়ে যায়
runtime error হওয়ার risk অনেক বেড়ে যায়
তাই any কে বলা হয় type safety hole

2. Why unknown is Safer??

unknown ও যেকোনো type accept করে, কিন্তু সরাসরি ব্যবহার করতে দেয় না। আগে type check করতে হয়।
let data: unknown = "Hello"
data.toUpperCase()
এটা আমাদের বাধ্য করে safe code লিখতে।

3. What is Type Narrowing?
type narrowing মানে হলো কোনো value এর actual type check করে তারপর ব্যবহার করা।
let data: unknown = "Hello";
if (typeof data === "string") 
console.log(data.toUpperCase());
এখানে আমরা নিশ্চিত হচ্ছি যে data আসলে string।


any unsafe type checking bypas করে 

unknown afe আগে check করতে হয় 


Type narrowing  safeভাবে type confirm করার technique


 