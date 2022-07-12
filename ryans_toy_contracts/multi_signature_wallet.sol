// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//
// MultiSignatureWallet takes a list of Approvers needed to sign a transaction
// Which sends the balance of the Contract over to the given Beneficiary.
contract MultiSignatureWallet {
    uint mininumNumberOfApprovers;

    address payable beneficiary;
    address payable owner;

    mapping (address => bool) approvalsByAddress;
    mapping (address => bool) canApproveByAddress;
    uint numberOfApprovals;

    constructor(address[] memory approvers,
                uint theMininumNumberOfApprovers,
                address payable theBeneficiary) payable {
        require(theMininumNumberOfApprovers <= approvers.length,
            "Not enough approvers! Mininum number of approvers larger than number of approvers given!");

        mininumNumberOfApprovers = theMininumNumberOfApprovers;
        beneficiary = theBeneficiary;
        owner = payable(msg.sender);

        for (uint i = 0; i < approvers.length; i++) {
            address approverAddress = approvers[i];
            canApproveByAddress[approverAddress] = true;
        }
    }

    function approve() public {
        require(canApproveByAddress[msg.sender], "This account is not authorized to approve!");

        if (!approvalsByAddress[msg.sender]) {
            numberOfApprovals++;
            approvalsByAddress[msg.sender] = true;
        }

        if (numberOfApprovals >= mininumNumberOfApprovers) {
            beneficiary.send(address(this).balance);
            selfdestruct(owner);
        }
    }

    function reject() public {
        require(canApproveByAddress[msg.sender], "This account is not authorized to reject!");

        selfdestruct(owner);
    }
}
