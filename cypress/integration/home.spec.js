

it('deve exibir a home page', function(){
    cy.visit('/')
    
    cy.title().should('eq', 'My Store')
})