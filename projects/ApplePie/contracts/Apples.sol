pragma solidity ^0.8.15;
 
import './Utils.sol';

contract Apples {

    string public apple_type; 
    string public result;

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
}