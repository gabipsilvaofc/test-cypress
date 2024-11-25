describe('Testando o taskhub', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });
  // it('Cadastro no taskhub', () => {
  //   cy.get('a').contains('Get Started').click()
  //   cy.get('#name').type('gabi')
  //   cy.get('#email').type('gabicypress@gmail.com') 
  //   cy.get('#password').type('gabi123')
  //   cy.get('button[type="submit"]').click()
  // });
  it('Entrar no taskhub', () => {
    cy.get('a').contains('Sign In').click()
    cy.get('#email').type('gabicypress@gmail.com') 
    cy.get('#password').type('gabi123')
    cy.get('button[type="submit"]').click()
    // criar projeto
    cy.get('a').contains('Projects').click()
    cy.get('button[type="button"]').contains('Create Project').click()
    cy.get('#name').type('Teste cypress')
    cy.get('#description').type('Teste cypress')
    cy.get('#owner').select(1)
    cy.get('#react-select-2-input').click().type('ramon{enter}')
    cy.get('#react-select-3-input').click().type('sda{enter}')
    cy.get('button[type="submit"]').click()
    // criar task
    
  });





})
