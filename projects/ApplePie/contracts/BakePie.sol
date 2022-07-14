pragma solidity ^0.8.15;

import './Apples.sol';
import './PieCrust.sol';

contract BakePie {
    string public apple_type;
    uint256 public pie_size;
    string public apple_flavor;
    uint public serving_size; 

    Apples public apples;
    PieCrust public pie_crust;

    constructor(string memory _apple_type, 
                uint256 _pie_size ){
        apple_type = _apple_type;
        pie_size = _pie_size;
        apples = new Apples(apple_type);
        pie_crust = new PieCrust(pie_size);

    }

    function sweetness() public returns(string memory){
        apple_flavor = apples.appleFlavor();
        return apple_flavor;

    }

    function servings() public returns(uint){
        serving_size = pie_crust.serving_size();

        return serving_size;
    }

}