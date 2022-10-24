import {el} from './elements'

class Alert{
    shouldHaveText(expectText){
        cy.contains(el.alert, expectText)
                .should('be.visible')    

    }
}

export default new Alert()