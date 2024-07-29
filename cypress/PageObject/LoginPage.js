import locator from './Locator/Login.json'
class LoginPage {
    /**
     * Cette fonction permet de saisir les identités des clients.
     * @param {string} userName - c'est le nom d'utilisateur/email.
     * @param {string} password - c'est le mode de passe utilisateur
     * @example cy.FillInputFields('hedibensaid','test123').
     */
    FillInputFields(userName, password) {
        cy.step('Remplir les identifiants clients')
        cy.get(locator.userName).type(userName)
            .should('have.value', userName)
        cy.get(locator.password).type(password)
            .should('have.value', password)
    }
    /**
     * cette fonction permet de cliquer sur le bouton Login.
     * @example cy.ClickSubmitButton().
     */
    ClickSubmitButton() {
        cy.step('Cliquer Sur le bouton Login')
        cy.get(locator.btnLogin).click()
            .should('not.exist')
    }
    /**
     * cette fonction permet d'asserter sur la login s'il est effectué avec succès ou non.
     * @param {boolean} successful - c'est variable boolean ( True : Login avec succès ; False: login échoué).
     * @example cy.VerifyLogin(True).
     */
    VerifyLogin(successful) {
        cy.step('Assertez sur la login')
        if (successful) {
            cy.get(locator.topBarHeader).should('be.visible')
        } else if (!successful) {
            cy.get(locator.topBarHeader).should('not.exist')
            cy.get(locator.alertContent).should('be.visible')
        }
    }
}
const login = new LoginPage;
export default login;
