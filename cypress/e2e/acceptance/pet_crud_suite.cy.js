import * as endpointResources from '../../support/endpoints'
import endpointManager from '../../core/EndpointManager'
import payloadManager from '../../core/PayloadManager'

describe('PET: CRUD TCs for Pet objet', () => {
    // Getting pet payload
    let payload = payloadManager.getPetPayload()

    it('POST a Pet', () => {
        var currentUrl = endpointManager.getSimpleUrl(endpointResources.PET)
        cy.request({ 
            method : 'POST',
            url : currentUrl,
            body : payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(payload.id)
            expect(response.body).to.deep.include(payload)
        })
    })

    it('GET Pet by ID', () => {
        var currentURL = endpointManager.getUrlById(endpointResources.PET, payload.id)
        cy.request({ 
            method : 'GET',
            url : currentURL
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(payload.name)
            expect(response.body).to.deep.include(payload)
        })
    })

    it('PUT a Pet', () => {
        let currentUrl = endpointManager.getSimpleUrl(endpointResources.PET)
        payload.name += 'Updated'
        cy.request({ 
            method : 'PUT',
            url : currentUrl,
            body : payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(payload.name)
            expect(response.body).to.deep.include(payload)
        })
    })

    it('Delete a pet by ID', () => {
        let currentURL = endpointManager.getUrlById(endpointResources.PET, payload.id)
        cy.request({ 
            method : 'DELETE',
            url : currentURL
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})