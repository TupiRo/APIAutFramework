import * as endpoints from '../support/endpoints'

describe('STORE: CRUD TCs for store objet', () => {
    it('GET inventory', () => {
        cy.request({ 
            method : 'GET',
            url : Cypress.env('BASE_URL') + endpoints.INVENTORY
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('approved')
            expect(response.body).to.have.property('placed')
            expect(response.body).to.have.property('delivered')
        })
    })

    it('POST an Order', () => {
        let payload = {
            "id": 10,
            "petId": 198772,
            "quantity": 7,
            "shipDate": "2024-05-31T04:47:01.445Z",
            "status": "approved",
            "complete": true
          }
        cy.request({ 
            method : 'POST',
            url : Cypress.env('BASE_URL') + endpoints.ORDER,
            body : payload
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(payload.id)
            expect(response.body.petId).to.eq(payload.petId)
            expect(response.body.complete).to.eq(payload.complete)
            expect(response.body).to.deep.include(payload)

        })
    })

    it('Get an Order by ID', () => {
        let expectedObject = {
            "id": 2,
            "petId": 1,
            "quantity": 50,
            "shipDate": "2024-05-30T21:42:24.835+00:00",
            "status": "approved",
            "complete": true
        }
        cy.request({ 
            method : 'GET',
            url : Cypress.env('BASE_URL') + endpoints.ORDER + expectedObject.id
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(expectedObject.id)
            expect(response.body.petId).to.eq(expectedObject.petId)
            expect(response.body.status).to.eq(expectedObject.status)
            expect(response.body.complete).to.eq(expectedObject.complete)
        })
    })

    it('Delete a pet by ID', () => {
        let payload = {
            "id": 10,
            "petId": 198772,
            "quantity": 7,
            "shipDate": "2024-05-31T04:47:01.445Z",
            "status": "approved",
            "complete": true
          }
        cy.request({ 
            method : 'DELETE',
            url : Cypress.env('BASE_URL') + endpoints.ORDER + payload.id
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})