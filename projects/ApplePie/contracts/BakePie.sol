pragma solidity ^0.8.15;

import './Apples.sol';
import './PieCrust.sol';

contract BakePie {
    string public apple_type;
    uint256 public pie_size;
    string public apple_flavor;
    string public sentence;
    uint public serving_size; 

    bool public enough_apples;
    bool public gluten_free;

    Apples public apples;
    PieCrust public pie_crust;

    constructor(string memory _apple_type,  
                uint256 _pie_size ){
        apple_type = _apple_type;
        pie_size = _pie_size;
        apples = new Apples(apple_type);
        pie_crust = new PieCrust(pie_size);
        enough_apples = apples.checkInventory();
        // gluten_free = pie_crust.checkGluten();
    }

    function sweetness() public returns(string memory){
        apple_flavor = apples.appleFlavor();
        return apple_flavor;

    }


    function servings() public returns(uint){
        serving_size = pie_crust.serving_size();
        return serving_size;
    }

    function orderPie() public returns(string memory) {
        if (apples.checkInventory()){
            string memory sweet_or_sour = sweetness();
            string memory people_will_feed = Utils.uint2str(servings());
            
            sentence = string(abi.encodePacked('This pie will taste ', sweet_or_sour, ' and feed ', people_will_feed));
            apples.setInventory(15); 
        } else {
            sentence = 'dangit were fresh outta apples';
        }
        
        return sentence;
        }

}