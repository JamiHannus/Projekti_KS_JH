// Hmm only works on single card level
// would need to have global flag too to trigger to disable other buttons
export function Price(price,startTime)
 {
   let endTime =Date.now();
   let totalTime = Math.floor((endTime - startTime)/1000);
   let totalPrice
   let chargePrice
   let powerUsage
    if (price === 1 ){
       alert( "this charging staion was free of use. You used this for "+totalTime+ " seconds" )
      }
    if (price ===  "2"){
        // 20 cents per minute
        chargePrice = (20/60)
        totalPrice = (totalTime * chargePrice).toPrecision(3)
        alert( totalPrice +" cents")

    }
    if (price === "3"){
      // Is 50-150 Kw and paid by 18 c per kwh
      powerUsage = Math.round(Math.random() * (150 - 50) +50);
      // between 9 - 27 euros per hour. Divide by 3600 to get seconds time
      chargePrice = (powerUsage*18) /3600
      totalPrice = (totalTime * chargePrice).toPrecision(3)
      alert( "Your car was charged with input of "+powerUsage+" Kw during the charge "+ totalPrice + " is total price cents")
    }
    
}