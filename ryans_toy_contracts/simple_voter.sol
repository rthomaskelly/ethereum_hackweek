// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//
// SimpleVoter allows addresses to place votes for given options.
// An address can only vote once.
contract SimpleVoter {
    struct OptionIndex {
        uint index;
        bool exists;
    }

    uint[] public votes;
    string[] public votingOptions;
    mapping (address => bool) addressHasVoted;
    mapping (string => OptionIndex) votingOptionIndicesByName;

    //
    // Pass in the list of options, like ["pizza", "burgers"]
    // or ["coffee", "tea"]
    constructor(string[] memory newOptions) {
        votingOptions = newOptions;

        for (uint i = 0; i < votingOptions.length; i++) {
            OptionIndex memory currentIndex = OptionIndex(i, true);
            string memory optionName = votingOptions[i];
            votingOptionIndicesByName[optionName] = currentIndex;
            votes.push(0);
        }
    }

    //
    // Cast a vote based on the index of the option (0, 1, 2, etc.)
    function vote(uint option) public {
        require(option < votingOptions.length, "Invalid Option!");
        require(!addressHasVoted[msg.sender], "Account has already voted!");

        votes[option] = votes[option] + 1;
        addressHasVoted[msg.sender] = true;
    }

    //
    // Cast a vote based on the name of the option ("pizza", "tea", etc.)
    function vote(string memory optionName) public {
        require(votingOptionIndicesByName[optionName].exists, "Option does not exist!");

        vote(votingOptionIndicesByName[optionName].index);
    }

    function getVotes() public view returns (uint[] memory) {
        return votes;
    }

    function getVotingOptions() public view returns (string[] memory) {
        return votingOptions;
    }
}
