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


constructor(RWD _rwd, Tether _tether) public{
    rwd = _rwd;
    tether = _tether;
}

}