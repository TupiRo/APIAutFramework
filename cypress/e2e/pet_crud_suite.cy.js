import * as endpoints from '../support/endpoints'
import EndpointManager from '../core/EndpointManager'

describe('PET: CRUD TCs for Pet objet', () => {
    it('GET Pet by ID', () => {
        currentURL = EndpointManager.getUrlById(endpoints.GET_PET_BY_ID, '11')
        cy.request({ 
            method : 'GET',
            url : currentURL
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('Cat 1')
        })
    })

    it('POST Pet', () => {
        let payload = {
            "id": 11,
            "name": "TestDog2",
            "category": {
              "id": 1,
              "name": "Dogs"
            },
            "status": "available"
          }
        cy.request({ 

            method : 'POST',
            url : Cypress.env('BASE_URL') + endpoints.POST_PET,
            body : payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(payload.name)

        })
    })

    it('PUT Pet', () => {
        let payload = {
            "id": 11,
            "name": "TestDog2Updated",
            "category": {
              "id": 1,
              "name": "Dogs"
            },
            "status": "available"
          }
        cy.request({ 

            method : 'PUT',
            url : Cypress.env('BASE_URL') + endpoints.POST_PET,
            body : payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq(payload.name)

        })
    })

    it('Delete a pet by ID', () => {
        cy.request({ 

            method : 'DELETE',
            url : Cypress.env('BASE_URL') + endpoints.GET_PET_BY_ID
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.message).to.eq('Pet deleted')

        })
    })
})