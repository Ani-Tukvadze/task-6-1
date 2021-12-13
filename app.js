fetch('https://reqres.in/api/users?page=2')
    .then(response => {
        return response.json()
    })
    .then(returnedResponse =>{
        console.log(returnedResponse);
    })

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json()
    })
    .then(returnedResponse => {
        console.log(returnedResponse);
    })

fetch('https://fakerapi.it/api/v1/persons?_quantity=1&_gender=male&_birthday_start=2005-01-01')
    .then(response => {
        return response.json()
    })
    .then(returnedResponse => {
        console.log(returnedResponse);
    })