import * as endpointResources from '../../support/endpoints'
import endpointManager from '../../core/EndpointManager'
import payloadManager from '../../core/PayloadManager'

describe('USER: CRUD TCs for user objet', () => {
    // Getting user payload
    let payload = payloadManager.getUserPayload()

    it('POST an user', () => {
        let currentUrl = endpointManager.getSimpleUrl(endpointResources.USER)
        cy.request({ 
            method : 'POST',
            url : currentUrl,
            body : payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.include(payload)
        })
    })

    it('GET an user by username', () => {
        let currentUrl = endpointManager.getUrlById(endpointResources.USER, payload.username)
        cy.request({ 
            method : 'GET',
            url : currentUrl
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.include(payload)
        })
    })

    it('PUT an user by username', () => {
        let currentUrl = endpointManager.getUrlById(endpointResources.USER, payload.username)
        payload.firstName += 'Updated'
        payload.lastName += 'Updated'
        cy.request({ 
            method : 'PUT',
            url : currentUrl,
            body : payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.include(payload)
        })
    })

    it('DELETE an user by username', () => {
        let currentUrl = endpointManager.getUrlById(endpointResources.USER, payload.username)
        cy.request({ 
            method : 'DELETE',
            url : currentUrl
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})