/*console.log("hello")
setTimeout(()=>{
    console.log("BYE")
},2000)
console.log("hi")*/


/*function display(){

  console.log("im inside the method")
  setTimeout(()=>{
    console.log("im inside the timer")
  },3000)
}

display();
console.log("bye")*/

/*function add(show){
    istrue=true
    if(istrue)
    {
        show()//display

    }
}
console.log("Welcome")
add(display)
function display(){
    console.log("it's good")
}*/

/*function add(display){
    istrue=true
   if(istrue)
   {
    display("Anu")//display
   }    
}
console.log("Welcome")
add(display)
function display(name){
    console.log("it's good "+name)
}*/

/*let myPromise=new Promise((resolve,reject)=>{
    let isTrue=false
    if(IsTrue)
    {
        resolve()
    }
    else
        reject()
})
myPromise.then(success)
.catch(fail)

function success(){
    console.log("dene!.......")
}
function fail()
{
    console.log("not done")
}*/


/*let myPromise= new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject()
  })

  myPromise.then((data)=>{ console.log("done!.........",data)})
  .catch(()=>{console.log("not done")} )

  // function success(){
  //   console.log("done!....................")
  // }
 // function fail()
  // {
  //   console.log("not done")
  // }*/


/*function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject()
  })
  }
   

 display().then((data)=>{ console.log("done!.....",data)})
  .catch(()=>{console.log("not done")} )*/

  function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject("bye")
  })
  }
   

//  display().then((data)=>{ console.log("done!....................",data)})
//   .catch(()=>{console.log("not done")} )
 
  async function show(){
     try{
      var res= await  display()
      console.log(res)
     }
     catch(Exception){
      console.log("the pb",Exception)
     }
     
  } 
  
  show()
  