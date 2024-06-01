import * as endpointResources from '../../support/endpoints'
import endpointManager from '../../core/EndpointManager'
import petSchema from '../../fixtures/petSchema.json'
import orderSchema from '../../fixtures/orderSchema.json'
import userSchema from '../../fixtures/userSchema.json'

const AJV = require('ajv')
const ajv = new AJV()

describe('SCHEMA: TCs validating schema for different objects', () => {
    let payloadPet = {
        "id": 50,
        "name": "TestDog2",
        "category": {
          "id": 1,
          "name": "Dogs"
        },
        "status": "available"
    }

    let payloadUser = {
        "id": 40,
        "username": "theUserSchema",
        "firstName": "Test",
        "lastName": "Test2",
        "email": "test@email.com",
        "password": "12345",
        "phone": "12345",
        "userStatus": 2
    }

    it.only('Validating schema for PET object', () => {
        let currentUrl = endpointManager.getSimpleUrl(endpointResources.PET)
        cy.request({ 
            method : 'POST',
            url : currentUrl,
            body : payloadPet
        }).then((response) => {
            expect(response.status).to.eq(200)
            const validate = ajv.compile(petSchema)
            expect(validate(response.body)).to.be.true
        })
    })

    it.only('Validating schema for ORDER object', () => {
        let currentUrl = endpointManager.getUrlById(endpointResources.ORDER, '1')
        cy.request({ 
            method : 'GET',
            url : currentUrl
        }).then((response) => {
            const validate = ajv.compile(orderSchema)
            expect(validate(response.body)).to.be.true
        })
    })

    it.only('Validating schema for USER object', () => {
        let currentUrl = endpointManager.getSimpleUrl(endpointResources.USER)
        cy.request({ 
            method : 'POST',
            url : currentUrl,
            body : payloadUser
        }).then((response) => {
            expect(response.status).to.eq(200)
            const validate = ajv.compile(userSchema)
            expect(validate(response.body)).to.be.true
        })
    })
})