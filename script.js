function nameEntered(){
    let a=document.getElementById("name").value
    if(a.length>0){
        let b=document.getElementById("firstName").style.backgroundColor="#40c4aa"
    }else{
        let b=document.getElementById("firstName").style.backgroundColor="transparent"
    }
}

function emailEntered(){
    let a=document.getElementById("emailId").value
    if(a.length>0){
        let b=document.getElementById("secondEmail").style.backgroundColor="#40c4aa"
    }else{
        let b=document.getElementById("secondEmail").style.backgroundColor="transparent"
    }
}

function passEntered(){
    let a=document.getElementById("pass").value
    if(a.length>0){
        let b=document.getElementById("thirdPass").style.backgroundColor="#40c4aa"
    }else{
        let b=document.getElementById("thirdPass").style.backgroundColor="transparent"
    }
}


function filled(){
    let a=document.getElementById("loginEmail").value
    let b=document.getElementById("emailPass").value
    let c=document.getElementById("loginCheck")
    if(a.length>0 && b.length>0 && c.checked){
        let d=document.getElementById("active").style.backgroundColor="black"
    }else{
        let d=document.getElementById("active").style.backgroundColor="none"
    }
}


function personalAccount(){
    let c=document.getElementById("personalInput")
    if(c.checked){
        let a=document.getElementById("personal").style.cssText='border-color:black;box-shadow:0px 0px 1px 3px #eae3fe'
    }else{
        let a=document.getElementById("personal").style.cssText='border-color:none;box-shadow:none'
    }
    
}

function businessAccount(){
    let c=document.getElementById("businessInput")
    if(c.checked){
        let a=document.getElementById("business").style.cssText='border-color:black;box-shadow:0px 0px 1px 3px #eae3fe'
    }else{
        let a=document.getElementById("business").style.cssText='border-color:none;box-shadow:none'
    }
    
}

// storing information into the server

async function storing(){
    let a=document.getElementById("name").value
    let b=document.getElementById("emailId").value
    let c=document.getElementById("pass").value
    try{
        const response=await fetch("http://localhost:4000/user1",
            {method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                                  name:a,
                                  email:b,
                                  password:c
            })})
        // const user1=response.json()
        window.alert("Registration successful")
        let f=document.getElementById("fourth").style.backgroundColor="#40c4aa"
    }catch(error){
        console.log(error)
    }
    
}

//email and password autentication 

async function authentication() {
      let a=document.getElementById("loginEmail").value
      let b=document.getElementById("emailPass").value
    try{
        const response=await fetch("http://localhost:4000/user1",
            {method:"GET",
            headers:{'content-type':'application/json'}
            })
        const user1=await response.json()
        for(let i=0;i<user1.length;i++){
            if(a==user1[i].email && b==user1[i].password){
                window.location.href="./account.html"
            }else{
                console.log("not matched")
            }
        }
    }catch(error){
        console.log(error)
    }
    
}


