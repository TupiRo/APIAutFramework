export default class EndpointManager {

    getUrlById(endpoint, id){
        return Cypress.env('BASE_URL') + endpoint + '/' + id
    }

    postUrl(endpoint){
        return Cypress.env('BASE_URL') + endpoint
    }

}