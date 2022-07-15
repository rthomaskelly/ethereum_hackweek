pragma solidity ^0.8.15;


contract PieSize {

    uint public tin_size; 
    uint public servings;
    uint public large_inventory = 3;
    uint public small_inventory = 3;

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

    function setInventory() public {
        if (tin_size > 8){
            large_inventory = large_inventory - 1;
        } else {
            small_inventory = small_inventory - 1;
        }
    }

    function checkInventory() public view returns (bool){
        bool enough = false;
        if (tin_size > 8){
            if (large_inventory > 0) {
                enough = true;
            }
        } else {
            if (small_inventory > 0) {
                enough = true;
            }
        }
        return enough;
    }
}