///<reference types = "Cypress"/>
import amazonAutomation from "../pageObject"

const AmazonAutomation = new amazonAutomation

describe('Amazon Automation Assessment',()=>{
    it('Testing specific functionalities',()=>{
        AmazonAutomation.visitUrl()
        AmazonAutomation.verifyUrl()

        AmazonAutomation.navigateToSearchBar()
        AmazonAutomation.searchForTpLinkRouter()
        AmazonAutomation.selectProduct()
        AmazonAutomation.navigateToSelectedProduct()
        AmazonAutomation.verifyProduct()
        AmazonAutomation.addItemToCart()

        AmazonAutomation.navigateToCart()
        AmazonAutomation.assertAppropriateProductInCart()
        AmazonAutomation.assertAppropriatePriceInCart()
    })
})