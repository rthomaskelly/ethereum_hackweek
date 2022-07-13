pragma solidity ^0.8.15;

contract Test {
    uint[] public myArray;

    constructor(uint[] memory) {
        myArray.push(1);
        myArray.push(10);
        myArray.push(30);
    }

    function getArrayLength() public view returns (uint) {
        return myArray.length; // with 'arrays' in solidity the function generated
        // to get the array auto generated needs the element of the array
        // in order to return an element
    }

    function getFirstElement() public view returns (uint) {
        return myArray[0];
    }
}
