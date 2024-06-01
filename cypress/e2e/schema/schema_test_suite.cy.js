import * as endpointResources from '../../support/endpoints'
import endpointManager from '../../core/EndpointManager'
import petSchema from '../../fixtures/petSchema.json'
import orderSchema from '../../fixtures/orderSchema.json'
import userSchema from '../../fixtures/userSchema.json'
import payloadManager from '../../core/PayloadManager'

const AJV = require('ajv')
const ajv = new AJV()

describe('SCHEMA: TCs validating schema for different objects', () => {
    let payloadPet = payloadManager.getPetPayload()
    let payloadUser = payloadManager.getUserPayload()

    it('Validating schema for PET object', () => {
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

    it('Validating schema for ORDER object', () => {
        let currentUrl = endpointManager.getUrlById(endpointResources.ORDER, '1')
        cy.request({ 
            method : 'GET',
            url : currentUrl
        }).then((response) => {
            const validate = ajv.compile(orderSchema)
            expect(validate(response.body)).to.be.true
        })
    })

    it('Validating schema for USER object', () => {
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