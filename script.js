async function submit1(){
    let username = document.querySelector("#username1").value
    let password = document.querySelector("#password1").value
    await axios.post("http://localhost:3000/signup",{
        "username": username,
        "password":password
    })
}

async function submit2(){
    let username = document.getElementById("username2").value
    let password = document.getElementById("password2").value

    let result = await axios.post("http://localhost:3000/signin",{
        "username": username,
        "password": password
    })
    localStorage.setItem("token",result.data.token)    // this is done to store the personal data of the user for that website
    
}   
user_data()
async function user_data(){
    let user = await axios.get("http://localhost:3000/me",{
        'headers' : {
            'token': localStorage.getItem("token")
        }
    })
    let userdetails = document.getElementById("user-details")
    userdetails.innerHTML = userdetails.innerHTML + "username: " + user.data.username
}

function logout(){
    let userdetails = document.getElementById("user-details")
    axios.delete('http://localhost:3000/logout',{
        "username": result.data.user.username
    })
}