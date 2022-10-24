import {el} from './elements'
import alert from '../../components/alert'

class SignupPage {

    constructor(){
        this.alert = alert
    }

    go() {
        cy.visit('/')
        cy.contains('a', 'Sign in').click()        
    }

    insert(user){
        cy.get(el.email).type(user.email)
    }
    
    create(){
        cy.get(el.submitCreate).click()
        cy.wait(3000)
    }
        
    form(user) {               
        cy.get('input[id$=gender2]')
            .click()
            .should('be.checked')

        cy.get(el.name).type(user.name)
        cy.get(el.lastname).type(user.lastname)
        cy.get(el.password).type(user.password)

        cy.get('#days')
            .select('21')

        cy.get('#months')
            .select('July')

        cy.get('#years')
            .select('1984')

        cy.get('input[name=newsletter]')
            .click()
            .should('be.checked')

        cy.get('input[name=optin]')
            .click()
            .should('be.checked')

        cy.get(el.company).type(user.company)
        cy.get(el.address1).type(user.address1)
        cy.get(el.address2).type(user.address2)
        cy.get(el.city).type(user.city)

        cy.get('#id_state')
            .select('Florida')

        cy.get(el.postcode).type(user.postcode)

        cy.get('#id_country')
            .select('United States')

        cy.get(el.other).type(user.other)
        cy.get(el.phone).type(user.phone)

    }

    submit() {
        cy.get(el.submitAccount).click()
    }

   

}

export default new SignupPage()