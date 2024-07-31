import login from "../PageObject/LoginPage"
describe('Test Authentication', () => {
  beforeEach('OpenBrowser', () => {
    cy.OpenBrowser()
  })
  it('L\'utilisateur peut faire le login avec succes', () => {
    cy.fixture('../fixtures/auth.json').then((auth) => {
      login.FillInputFields(auth.userName, auth.password)
    })
    login.ClickSubmitButton()
    login.VerifyLogin(true)
  })
  it('L\'utilisateur ne peut pas faire le login avec un email incorrect', () => {
    cy.fixture('../fixtures/auth.json').then((auth) => {
      login.FillInputFields(auth.invaliduserName, auth.password)
    })
    login.ClickSubmitButton()
    login.VerifyLogin(false)
  })
  it('L\'utilisateur ne peut pas faire le login avec un mot de passe incorrect', () => {
    cy.fixture('../fixtures/auth.json').then((auth) => {
      login.FillInputFields(auth.userName, auth.invalidpassword)
    })
    login.ClickSubmitButton()
    login.VerifyLogin(false)
  })
  afterEach('Take Screenshoot', () => {
    cy.screenshot()
  })
})