# Apple Pie Bakery

## Contracts
This interaction is made of 3 contracts. The main contract is BakePie. BakePie creates instances of Apples and PieSize to use in its own contract. The contract is created with a customers apple type and pie size.   

When the 'orderPie' function is called it will describe the pie as well as update the apple inventory in the Apples contract and the pie tin category in the PieSize contract.  

If there are not enough apples or not a tin large enough then the pie will not be able to be made. 

## Public function access  
Since the functions in BakePie are actually changing values in the contracts Apples and PieSize, they are public functions that cannot be marked 'view'.   

However, if functions sweetness and servings in BakePie are only being used internally (as they are) they may be marked Internal. They are currently classified as public for appropriate testing.

## Multiple Pies
If the customer wishes to order multiple pies then mthey simply create their contract and call the 'orderPie' function multiple times. If they would like pies of varied sizes and flavors then they will need to create new contracts (think of them as order slips)