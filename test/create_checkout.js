const arifpay = require('arifpay')("somekey")

async function main () {
    console.log(arifpay.VERSION)
    const session = await arifpay.checkout.create({});
}

main()