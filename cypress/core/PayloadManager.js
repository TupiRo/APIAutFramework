import { faker } from '@faker-js/faker';

class PayloadManager {

    getPetPayload(){
        return {
            "id": faker.number.int({ min: 10, max: 99 }),
            "name": faker.person.firstName(),
            "category": {
              "id": 1,
              "name": "Dogs"
            },
            "status": "available"
        }
    }

    getOrderPayload(){
        return {
            "id": faker.number.int({ min: 10, max: 99 }),
            "petId": 198772,
            "quantity": faker.number.int({ min: 10, max: 99 }),
            "shipDate": "2024-05-31T04:47:01.445Z",
            "status": "approved",
            "complete": true
        }
    }

    getUserPayload(){
        return {
            "id": faker.number.int({ min: 10, max: 99 }),
            "username": faker.internet.userName(),
            "firstName": faker.person.firstName(),
            "lastName": faker.person.lastName(),
            "email": faker.internet.email(),
            "password": "12345",
            "phone": "12345",
            "userStatus": 1
        }
    }
}

module.exports = new PayloadManager()
