class EndpointManager {

    getUrlById(endpoint, id){
        return Cypress.env('BASE_URL') + endpoint  + id
    }

    getSimpleUrl(endpoint){
        return Cypress.env('BASE_URL') + endpoint
    }

}

module.exports = new EndpointManager()
