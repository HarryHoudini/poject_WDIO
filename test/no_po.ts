import {expect} from 'chai';
import * as faker from 'faker'

describe('Guest', function () {
    it('should be able to buy item',  function() {
        browser.url('/rubber-ducks-c-1/red-duck-p-3');
        const quantityItmBeforeAddToCard = $("span.quantity").getText()
        const quantitySumBeforeAddToCard = $("span.formatted_value").getText().slice(1)
        $('button.btn-success').click()
        browser.pause(1500) //bad
        const quantityItmAftAddToCard = $("span.quantity").getText()
        const quantitySumAftAddToCard = $("span.formatted_value").getText().slice(1)
        expect( +quantityItmAftAddToCard).to.equal( +quantityItmBeforeAddToCard + 1)
        expect(+quantitySumAftAddToCard).to.equal(  +quantitySumBeforeAddToCard + +quantitySumAftAddToCard)
        $('#cart').click()
        $('[name="company"]').setValue('CompanyName')
        $('[name="firstname"]').setValue('firstname')
        $('[name="lastname"]').setValue('lastname')
        $('[name="city"]').setValue('city')
        $('[name="postcode"]').setValue(faker.address.zipCode())
        $('[name="address1"]').setValue(faker.address.streetAddress)
        $('[name="address2"]').setValue(faker.address.streetAddress)
    })
})