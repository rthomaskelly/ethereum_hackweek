pragma solidity ^0.8.15;


contract Lottery {
    address public manager;
    address[] public players;

    constructor(address sender) {
        manager = sender;

    }

    function enter() public payable restricted {
        require(msg.value > .001 ether); // this will auto convert from WEI sent
    }

    function random() private view returns (uint) { // uint alias for uint256
        return uint(keccak256((abi.encodePacked(players)))); // feeding into the keccak256 algo for rando
    }

    function pickWinner() public restricted{

        uint index = random() % players.length; // decides a random index (is pseudo random?)
        payable(players[index]).transfer(address(this).balance); // the qty is default in WEI (if you entered say 1)
        players = new address[](0); 
    }

    modifier restricted() {
        require(msg.sender == manager);
        _; // it doesnt have to be called restricted
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }
}