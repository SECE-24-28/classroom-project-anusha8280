/*async function loadData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users")
        var data=await res.json()
        console.log(data)
    }
    catch(a)
    {
        console.log("failed")
    }
}
loadData()*/

/*async function createData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:"anu",
           gender:"female"
        })
        });
        var data=await res.json()
        console.log(data)
    }
    catch(a)
    {
        console.log("failed")
    }
}
createData()*/

async function updateData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:"anu",
           gender:"female"
        })
        });
        var data=await res.json()
        console.log("updated",data)
    }
    catch(a)
    {
        console.log("failed")
    }
}
updateData()


async function deleteData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method:"DWLWTW"
        })
        console.log("deleted....",res)
    }
    catch(a)
    {
        console.log("failed")
    }
}
deleteData()