
import {el} from './elements'

class LoginPage {

    go(){
        cy.visit('/index.php?controller=authentication&back=my-account')
    }
    
    form(user){
        cy.get(el.email).type(user.email)
        cy.get(el.password).type(user.password)
    }

    submit(){
        cy.get(el.signIn).click()
    }
}

export default new LoginPage()