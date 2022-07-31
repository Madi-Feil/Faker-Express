const express = require('express');
const app = express()
const PORT = 8000

const { faker } = require('@faker-js/faker');

app.listen(PORT,()=>{
    console.log(`Something is up and running on port ${PORT}`)
})

// These are important for making POST requests
// These are middleware functions
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const createUser = () => {
    return {
        _id:faker.datatype.uuid(),
        first_name:faker.name.firstName(),
        last_name:faker.name.lastName(),
        email:faker.internet.email(),
        password:faker.internet.password(),
        phone_number:faker.phone.number()
    }
}

const createCompany = () => {
    return {
        _id:faker.datatype.uuid(),
        name:faker.name.findName(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zip:faker.address.zipCode(),
            country:faker.address.country
        }
    }
}

app.get('/user/:word',(req,res)=>{
    const word = req.params.word
    const user = createUser()
    res.json(word)
})

app.get('/company',(req,res)=>{
    console.log(req.url, req.method)
    const company = createCompany()
    res.json(company)
})

app.post('/addUser',(req,res)=>{
    console.log(req.body)
})