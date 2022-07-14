pragma solidity ^0.8.15;


contract PieCrust {

    uint public tin_size; 
    uint public servings;

    constructor(uint _tin_size) {
        tin_size = _tin_size;
    }

    function serving_size() public returns(uint){
        if (tin_size > 8){
            servings = 10;
        } else {
            servings = 6;
        }
        return servings;
    }
}