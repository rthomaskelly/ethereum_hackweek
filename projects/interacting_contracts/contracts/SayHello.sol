pragma solidity ^0.8.15;


contract SayHello {
    uint256 public age;
    constructor(uint256 _age ){
        age = _age;
    }

    function getAge() public virtual view returns (uint256){
        return age;
    }

    function setAge(uint256 _age) public virtual {}

    function makeMeSayHello() public  pure returns (string memory) 
    {
        return "Hello";
    }
}