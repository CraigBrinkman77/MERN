const faker = require('@faker-js/faker');
const express = require('express')
const app = express()
const port = 8000

class User{
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName =faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCodeByState(),
            country: faker.address.country()
        }

    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/new/user", (req, res) => {
    res.json(new User);
});

app.get("/api/new/company", (req, res) => {
    res.json(new Company);
});

app.get('/api/new/user/company', (req,res) => {
    res.json({user: new User, company: new Company})
})

app.listen(port, () => console.log(`Listening on port: ${port}`));