const data = require('../../fixtures/amazonAutomation.json')
class amazonAutomation
{
    visitUrl(){
        return cy.visit(Cypress.env('url'))
    }
    verifyUrl(){
        return cy.url().should('contain','https://www.amazon.com/')
    }
    navigateToSearchBar(){
        return cy.get('#twotabsearchtextbox').click()
    }
    searchForTpLinkRouter(){
        return cy.get('#twotabsearchtextbox').type(data.itemName)
    }
    selectProduct(){
        return cy.get('#nav-flyout-searchAjax').click()
    }
    navigateToSelectedProduct(){
        return cy.get('[data-asin="B00VVHONRM"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > :nth-child(1) > :nth-child(1) > .puisg-col-8-of-16 > :nth-child(1) > .a-spacing-small > [data-cy="title-recipe"] > .a-spacing-none > .a-link-normal > .a-size-medium').click()
    }
    verifyProduct(){
        return cy.get('#title > #productTitle').should('contain','TP-LINK TL-WR940N')
    }
    addItemToCart(){
        return cy.get('#add-to-cart-button').click()
    }
    navigateToCart(){
        return cy.get('#nav-cart').click()
    }
    assertAppropriateProductInCart(){
        return cy.get('.a-truncate-cut').should('contain','TP-LINK TL-WR940N Wireless N300 Home Router')
    }
    assertAppropriatePriceInCart(){
        return cy.get('.a-section > .a-size-medium').should('contain','$65.00')
    }
}
export default amazonAutomation