
import {el} from './elements'
class Header {

    userLoggedIn(userName) {
        cy.contains(el.span, userName)
            .should('be.visible')
            .should('have.text', userName)
    }
}
export default new Header()