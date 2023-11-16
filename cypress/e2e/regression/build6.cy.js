describe('Navigate Homepage', () => {
  beforeEach(() => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator.html#main-body')
    cy.fixture('testdata').then(TestData =>{
    cy.get('#selectBuild').select(TestData.bNum[5])
  })
  })

   afterEach(() => {
     cy.get('#clearButton').click()

   })


  it('Add', () => {
    cy.fixture('testdata').then(TestData =>{
    
    cy.get('#number1Field').should('be.visible')
    cy.get('#number1Field').type(TestData.fNum)
    cy.get('#number2Field').should('be.visible')
    cy.get('#number2Field').type(TestData.sNum)
    cy.get('#selectOperationDropdown').select(TestData.oP[0])
    cy.get('#selectOperationDropdown').should('contain', TestData.oP[0])
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', TestData.ansNum[0])
    //#endregioncy.get('#clearButton').click()
     })
  })

  it('Subract', () => {
    cy.fixture('testdata').then(TestData =>{
    cy.get('#number1Field').should('be.visible')
    cy.get('#number1Field').type(TestData.fNum)
    cy.get('#number2Field').should('be.visible')
    cy.get('#number2Field').type(TestData.sNum)
    cy.get('#selectOperationDropdown').select(TestData.oP[1])
    cy.get('#selectOperationDropdown').should('contain', TestData.oP[1])
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', TestData.ansNum[1])
    
     })
  })

  it('Multiply', () => {
    cy.fixture('testdata').then(TestData =>{
    cy.get('#number1Field').should('be.visible')
    cy.get('#number1Field').type(TestData.fNum)
    cy.get('#number2Field').should('be.visible')
    cy.get('#number2Field').type(TestData.sNum)
    cy.get('#selectOperationDropdown').select(TestData.oP[2])
    cy.get('#selectOperationDropdown').should('contain', TestData.oP[2])
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', TestData.ansNum[2])
    //#endregioncy.get('#clearButton').click()
     })
  })

  it('Divide', () => {
    cy.fixture('testdata').then(TestData =>{
    cy.get('#number1Field').should('be.visible')
    cy.get('#number1Field').type(TestData.fNum)
    cy.get('#number2Field').should('be.visible')
    cy.get('#number2Field').type(TestData.sNum)
    cy.get('#selectOperationDropdown').select(TestData.oP[3])
    cy.get('#selectOperationDropdown').should('contain', TestData.oP[3])
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', TestData.ansNum[3])
    //#endregioncy.get('#clearButton').click()
     })
  })

  it('Concatenate', () => {
    cy.fixture('testdata').then(TestData =>{
    cy.get('#number1Field').should('be.visible')
    cy.get('#number1Field').type(TestData.fNum)
    cy.get('#number2Field').should('be.visible')
    cy.get('#number2Field').type(TestData.sNum)
    cy.get('#selectOperationDropdown').select(TestData.oP[4])
    cy.get('#selectOperationDropdown').should('contain', TestData.oP[4])
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should('have.value', TestData.ansNum[4])
     })
  })
})