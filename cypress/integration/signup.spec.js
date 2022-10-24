
import signupPage from '../support/pages/signup'

describe('cadastro', function () {
    context('quando o usuário é novato', function () {
        const user = {
            name: 'Cintia',
            lastname: 'Sayuri Okado',
            password: 'pwd123',
            company: 'Samurai BS',
            address1: 'Rua Tenente Ubirajara Monory, 136',
            address2: 'apto 41',
            city: 'São Paulo',
            postcode: '32003',
            other: 'Now Im living in Brazil',
            phone: '12391234567',
            email: 'cintiasa1@samuraibs.com'
        }

        it('deve cadastrar com sucesso', function () {
            signupPage.go()
            signupPage.insert(user)
            signupPage.create()
            signupPage.form(user)
            signupPage.submit()

        })

    })

    context('quando o email já existe', function () {

        const user = {
            email: 'cintiasa@samuraibs.com'
        }

        it('deve exibir email já cadastrado', function () {
            signupPage.go()
            signupPage.insert(user)
            signupPage.create()
            signupPage.alert.shouldHaveText('An account using this email address has already been registered. Please enter a valid password or request a new one.')

        })

    })

    context('quando o email é incorreto', function () {

        const user = {
            email: 'cintia.samuraibs.com'
        }

        it('deve exibir mensagem de alerta', function () {
            signupPage.go()
            signupPage.insert(user)
            signupPage.create()
            signupPage.alert.shouldHaveText('Invalid email address.')
        })
    })

    context('quando a senha tem menos de 5 caracteres', function () {

        const passwords = ['1', '2a', '3ab', '4abc']

        beforeEach(function () {
            signupPage.go()
        })

        passwords.forEach(function (p) {
            it('não deve cadastrar com a senha: ' + p, function () {

                const user = {
                    name: 'Sueli',
                    lastname: 'Kodama',
                    password: p,
                    company: 'Samurai BS',
                    address1: 'Rua Tenente Ubirajara Monory, 136',
                    address2: 'apto 41',
                    city: 'São Paulo',
                    postcode: '32003',
                    other: 'Now Im living in Brazil',
                    phone: '12391234567',
                    email: 'suelio@samuraibs.com'
                }

                signupPage.insert(user)
                signupPage.create()
                signupPage.form(user)
                signupPage.submit()
            })
        })

        afterEach(function () {
            signupPage.alert.shouldHaveText('passwd is invalid.')
        })

    })

    context('quando não preencho campo de criar conta', function(){
        
        it('deve exibir mensagem de alerta', function(){
            signupPage.go()
            signupPage.create()
            signupPage.alert.shouldHaveText('Invalid email address.')
        })                  
    })

    context('quando não preencho nenhum dos campos', function(){
        
        const user = {
            email: 'cintias1a@samuraibs.com'
        }
        const alertMessages = [
            'You must register at least one phone number.',     
            'firstname is required',
            'lastname is required',
            'passwd is required.',
            'address1 is required.',
            'city is required.',
            'This country requires you to choose a State.',
            'The Zip/Postal code youve entered is invalid. It must follow this format: 00000',            
        ]        

        before(function(){
            signupPage.go()
            signupPage.insert(user)
            signupPage.create()
            signupPage.submit()
        })

        alertMessages.forEach(function(alert){
            it('deve exibir ' + alert.toLowerCase(), function(){
                signupPage.alert.shouldHaveText(alert)
            })
        })



    })
})
