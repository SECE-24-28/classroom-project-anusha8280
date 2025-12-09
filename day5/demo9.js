/*let nums=[10,1,2,4,5,12,20,30,40]
const a=[]

for(let d of nums){
    if(d%2==0)
    {
        a.push(d)
    }
}
console.log(a)*/

/*let nums=[10,1,2,4,5,12,20,30,40]
const a=[]
for(let d of nums)
{
    if(d%2==0){
        a.push(d)
    }
}
console.log(a)*/

/*let nums=[10,1,2,4,5,12,20,30,40]
const a=nums.filter((d)=> d%2==0)
console.log(a)*/


/*let nums=[10,2,3]
//var s=0
//for(let i of nums)
//s=s+i
//console.logs(s)
let ans=nums.reduce((a,b)=>{
    return a+b
})
console.log(ans)*/


/*let nums=[10,2,30,900]
let ans =nums.find((a)=> a>20)
console.log(ans)*/


/*let person={
  name:"demo",
  dep:"IT"
}
console.log(person)
console.log(person.name)*/

/*let person= new Object()
person.name="demo"
person.gender="male"
console.log(person)
console.log(person.name)*/


function Person(name,gender){
 
   
    this.name=name;
    this.gender=gender;
  
}

let p1= new Person("demo","male")
console.log(p1)

