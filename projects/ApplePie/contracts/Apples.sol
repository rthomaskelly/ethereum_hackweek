pragma solidity ^0.8.15;
 
import './Utils.sol';

contract Apples {

    string public apple_type; 
    string public result;

    uint public inventory = 100;

    using Utils for *;


    constructor(string memory _apple_type) {
        apple_type = _apple_type;
    }

    function appleFlavor() public returns (string memory){
        if (Utils.compareStrings(apple_type, 'granny smith')){
            result = 'very sour';
        }  else {          
            result = 'very sweet';
        }
        return result;
    }

    function setInventory(uint applesNeeded) public {
        inventory = inventory - applesNeeded;
    }

    function checkInventory() public view returns (bool){
        bool enough = false;
        if (inventory > 90){
            enough = true;
        } 
        return enough;
    }
}