// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.5.17;

import './RWD.sol';
import './Tether.sol';

contract DecentralBank {
   string public name = "Decentral Bank";
    address public owner;
    Tether public tether;
    RWD public rwd;
// this is basically  the bank code structure withiut any functionality yet

address[] public stakers;

mapping(address => uint) public stakingBalance;
mapping(addres => bool) public hasStaked;
mapping(addres => bool) public isStaking;




constructor(RWD _rwd, Tether _tether) public{
    rwd = _rwd;
    tether = _tether;
}


//This is how we write our function for staking tokens 
function depositTokens(uint _amount) public {
    tether.transferFrom(msg.sender, address(this), _amount);
    //require()(_amount > 0, "amount cannot be 0");
    // We are using tranferFrom function because we are allowing third party app to transfer
     //from user wallet to the bank smart contract. The user must first approve the bank smart contract to spend their tokens before they can deposit them. This is a common pattern in ERC20 token contracts to allow for secure transfers of tokens between different addresses. */

    //updating our staking balance 
    stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

    if(!hasStaked) {
        stakers.push[msg.sender];
    }

    // updating staking balance
    isStaking[msg.sender] = true;
    hasStaked[msg.sender] = true;





}

}