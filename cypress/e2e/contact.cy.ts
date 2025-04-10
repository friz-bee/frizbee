const SELECTORS = {
  contactButton: 'span:contains("Contactez-nous")',
  nameInput: 'input[name="name"]',
  emailInput: 'input[name="email"]',
  projectType: 'Type de projet',
  messageTextarea: 'textarea[name="message"]',
  submitButton: 'button[type="submit"]',
  successMessage: 'Message envoyé'
}

const helpers = {
  getFormField: (label: string) => cy.contains(label).parent().parent().parent(),
  selectProjectType: (type: string) => {
    helpers.getFormField('Type de projet').within(() => {
      cy.get('button').click()
    })
    cy.get('[role="option"]').contains(type).click()
    cy.get('body').click(0, 0)
  },
  fillForm: (data: { name: string; email: string; projectType: string; message: string }) => {
    cy.get(SELECTORS.nameInput).type(data.name)
    cy.get(SELECTORS.emailInput).type(data.email)
    helpers.selectProjectType(data.projectType)
    cy.get(SELECTORS.messageTextarea).type(data.message)
  }
}

describe('Contact Page', () => {
  beforeEach(() => {
    cy.visit('/contact')
    cy.get(SELECTORS.contactButton).should('be.visible').click()
  })

  it('should have all form fields', () => {
    cy.get(SELECTORS.nameInput).should('be.visible')
    cy.get(SELECTORS.emailInput).should('be.visible')
    helpers.getFormField(SELECTORS.projectType).within(() => {
      cy.get('button').should('be.visible')
    })
    cy.get(SELECTORS.messageTextarea).should('be.visible')
  })

  it('should show validation errors for empty form submission', () => {
    // Test name field
    cy.get(SELECTORS.nameInput).click()
    cy.get(SELECTORS.nameInput).blur()
    helpers.getFormField('Nom complet').within(() => {
      cy.contains('Le nom est requis').should('be.visible')
    })

    // Test email field
    cy.get(SELECTORS.emailInput).click()
    cy.get(SELECTORS.emailInput).blur()
    helpers.getFormField('Email').within(() => {
      cy.contains('L\'email est requis').should('be.visible')
    })

    // Test project type field
    helpers.getFormField(SELECTORS.projectType).within(() => {
      cy.get('button').click()
    })
    cy.get(SELECTORS.contactButton).click()
    helpers.getFormField(SELECTORS.projectType).within(() => {
      cy.contains('Le sujet est requis').should('be.visible')
    })

    // Test message field
    cy.get(SELECTORS.messageTextarea).click()
    helpers.getFormField('Votre message').within(() => {
      cy.contains('Le message est requis').should('be.visible')
    })
  })

  it('should successfully submit the form with valid data', () => {
    const formData = {
      name: 'Jean Dupont',
      email: 'jean@example.com',
      projectType: 'Site vitrine',
      message: 'Ceci est un message de test'
    }

    helpers.fillForm(formData)
    cy.get(SELECTORS.submitButton).click()
    cy.contains(SELECTORS.successMessage).should('be.visible')
  })
})
