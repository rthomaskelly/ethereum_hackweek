// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

//interfaces cannot have constructors and must be marked as external
// cannot inherit from another contract or interface, must implement all functions of interface
interface ISayHello {
    function getAge() external view returns (uint256);
    function setAge(uint256 _age) external ;
    function makeMeSayHello() external view returns (string memory); 
}

// inherits sayhello, the constructor for Hello calls the constructor for sayhello
contract InterfaceHello is ISayHello {
   uint256 public age;
    function getAge() public pure override returns (uint256) {
      return 33;
   }
   function setAge(uint256 _age) public override {
      age = _age;
   }
   function makeMeSayHello() public pure override returns (string memory) {
      return "Hello again";
   }
}