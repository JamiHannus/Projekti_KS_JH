// Hmm only works on single card level
// would need to have global flag too to trigger to disable other buttons
export function Price(price,startTime)
 {
   let endTime =Date.now();
   let totalTime = Math.ceil((endTime - startTime)/1000);
   let totalPrice
   let chargePrice
   let powerUsage
    if (price === 1 ){
       alert( "This charging station was free of use. You used this for "+totalTime+ " seconds" )
       //Here we could have the POST to api
      }
    if (price ===  "2"){
        // 20 cents per minute
        chargePrice = (20/60)
        totalPrice = (totalTime * chargePrice).toPrecision(3)
        alert("This station was billed by time used (20cents /minute )  for total cost of "+ totalPrice +" in cents")
         //Here we could have the POST to api

    }
    if (price === "3"){
      // Is 50-150 Kw and paid by 18 c per kwh
      powerUsage = Math.round(Math.random() * (150 - 50) +50);
      // between 9 - 27 euros per hour. Divide by 3600 to get seconds time
      chargePrice = (powerUsage*18) /3600
      totalPrice = (totalTime * chargePrice).toPrecision(3)
      alert( "Your car was using "+powerUsage+" Kw and it cost "+ totalPrice + " in cents")
       //Here we could have the POST to api
    }
    
}