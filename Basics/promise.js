const promise1 = new Promise((resolve , reject)=>{
    let success = true
    if(success ){
resolve({
    id : 124589,
    username : "Khar"
})
}else {
    reject({message : "Data not Fetched",
        sucess : false
    })
}
    }
)
promise1
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error.message);
})





const promise2 = new Promise((resolve , reject)=>{
    let success = true
    if(success){
resolve({
    id : 3459,
    orderlocation : "Delhi",
    ordername: "Laptop"
})
}else {
    reject({message : "Order not Fetched",
        sucess : false
    })
}
    }
)
promise2
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error.message);
})     

function fetchUserData(){

return Promise.any ([promise1 , promise2]).then((response)=>{
    console.log("Response from the 1st .then");
    return response
})
.then((response2)=>{
    console.log("Response from the 2nd .then");
    console.log(response2);
})
.catch((error)=>{
    console.log(error.message);
});
}
Promise.any([promise1 , promise2]).then((response)=>{
    console.log("Response from the 1st .then");
    return response
})
.then((response2)=>{
    console.log("Response from the 2nd .then");
    console.log(response2);
})
.catch((error)=>{
    console.log(error.message);
});

    async function fetchUserData(){
        const user = await promise1()
        console.log(user);
    }
    getUser()
