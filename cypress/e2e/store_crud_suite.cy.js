import * as endpointResources from '../support/endpoints'
import endpointManager from '../core/EndpointManager'

describe('STORE: CRUD TCs for store objet', () => {
    let payload = {
        "id": 10,
        "petId": 198772,
        "quantity": 7,
        "shipDate": "2024-05-31T04:47:01.445Z",
        "status": "approved",
        "complete": true
    }

    it('GET inventory', () => {
        let currentUrl = endpointManager.getSimpleUrl(endpointResources.INVENTORY)
        cy.request({ 
            method : 'GET',
            url : currentUrl
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('approved')
            expect(response.body).to.have.property('placed')
            expect(response.body).to.have.property('delivered')
        })
    })

    it('POST an Order', () => {
        let currentUrl = endpointManager.getSimpleUrl(endpointResources.ORDER)
        cy.request({ 
            method : 'POST',
            url : currentUrl,
            body : payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(payload.id)
            expect(response.body.petId).to.eq(payload.petId)
            expect(response.body.complete).to.eq(payload.complete)
        })
    })

    it('Get an Order by ID', () => {
        let currentUrl = endpointManager.getUrlById(endpointResources.ORDER, payload.id)
        cy.request({ 
            method : 'GET',
            url : currentUrl
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(payload.id)
            expect(response.body).to.deep.include(payload)
        })
    })

    it('Delete a pet by ID', () => {
        let currentUrl = endpointManager.getUrlById(endpointResources.ORDER, payload.id)
        cy.request({ 
            method : 'DELETE',
            url : currentUrl
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})