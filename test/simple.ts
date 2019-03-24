// let allDuck = []

describe('description', function () {
    it('description', async () => {
    
        browser.url('http://demo.litecart.net/rubber-ducks-c-1/')
        let summery = ''
        $$('.products.row.half-gutter').forEach( (elem) => {
        summery = summery +' '+ elem.getText()
        console.log(parseInt(elem.getAttribute('data-price')))
        // console.log(elem)
       
    })
    console.log(summery)
    })
})

describe('description', function () {
    let dataCollection = [11, 22, 333, 44, 53]
    dataCollection.map(data => {
        it(`ASASA TEST for ${data}`, async () => {
            console.log(`TEST number ${data} execyted!`)
        })
    })
  })