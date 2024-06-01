import * as endpointResources from '../../support/endpoints'
import endpointManager from '../../core/EndpointManager'
import payloadManager from '../../core/PayloadManager'

describe('STORE: CRUD TCs for store objet', () => {
    // Getting order payload
    let payload = payloadManager.getOrderPayload()

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