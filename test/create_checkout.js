const arifpay = require('arifpay')("somekey")

async function main () {
    try{
    console.log(arifpay.VERSION)
    const session = await arifpay.checkout.create({});
    }catch(err){
        console.log(err)
    }
}

main()