///<reference types= "cypress" />

let randomNumber = Math.floor(Math.random() * 2)
let arrLink = ['https://www.almosafer.com/ar', 'https://www.almosafer.com/en']
//--------------------------
let randomArrArabic = Math.floor(Math.random() * 2);
let arrArabic = ['جدة', 'دبي']
//--------------------------
let randomArrEn = Math.floor(Math.random() * 3);
let arrEn = ['Dubai', 'Jeddah', 'Riyadh']
//--------------------------
let arrValeu= ['A', 'B']

describe('almosafer lab', () => {

  it('make all the requirements passed', () => {
    cy.visit(`${arrLink[randomNumber]}`)
    cy.get('.cta__saudi').click()
    cy.get('#uncontrolled-tab-example-tab-hotels').click()

    cy.get('[data-testid="Header__LanguageSwitch"]')
    .invoke('text')
    .then((language) => {
      if (language == "English") {
        cy.get('[data-testid="AutoCompleteInput"]').type(`${arrArabic[randomArrArabic]}`)
      } else if (language == "العربية") {
        cy.get('[data-testid="AutoCompleteInput"]').type(`${arrEn[randomArrEn]}`)
      }
      cy.get('[data-testid="AutoCompleteResultItem0"] > .sc-12clos8-5').click()
    });

    
    cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]')
    .select(`${arrValeu[randomNumber]}`).should('have.value',`${arrValeu[randomNumber]}`)

    cy.get('[data-testid="HotelSearchBox__SearchButton"]').click()
    
  })

})