function toyShop(input) {
    let vacationPrice = Number(input[0]); 
    let puzzlesCount = Number(input[1]); 
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    
    let toysPrice =  puzzlesCount * 2.60 + dollsCount * 3 + bearsCount * 4.10 + minionsCount * 8.20 + trucksCount * 2;
    let toysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount;



    if (toysCount >= 50) {
        toysPrice = toysPrice * 0.75
}

    let moneyAfterRent = toysPrice * 0.90;

    if(moneyAfterRent >= vacationPrice) {
        let balanceLeft = moneyAfterRent - vacationPrice; 
        console.log(`Yes! ${balanceLeft.toFixed(2)} lv left.`)
    } else {
        let balanceLeft = vacationPrice - moneyAfterRent; 
        console.log(`Not enough money! ${balanceLeft.toFixed(2)} lv needed.`)
    }
}

toyShop(["320", "8", "2", "5", "5", "1"])
