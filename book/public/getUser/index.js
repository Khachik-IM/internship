const GetUser = () =>{
    fetch('/')
    .then(response => response.json())
    .then(data => document.getElementById('data').innerHTML = data);   
}

export default GetUser;