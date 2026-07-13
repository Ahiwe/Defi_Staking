// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.5.17;

contract Tether{
    string public name = 'Tether';
    string public symbol = 'USDT';
    uint public totalSupply = 1000000000000000000000000000;
    uint public decimals = 18;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint _value
    );

    event Approved(
        address indexed _owner,
        address indexed _spender,
        uint value
    );

    mapping(address => uint) public balanceOf;
    mapping(address => mapping(address => uint)) public allowance;
    constructor() public{
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint _value) public returns (bool success){
        require(balanceOf [msg.sender] >= _value, "insufficient balance");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approved(address _spender, uint _value) public returns(bool success){
        allowance[msg.sender][_spender] =_value;
        emit Approved(msg.sender, _spender, _value);
        return true;
        
    }

    function transferFrom(address _from, address _to, uint _value) public returns (bool success){
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);
        //adding balance for tranfer from
        balanceOf[_to] += _value;
        balanceOf[_from] -= _value;
        // add your allowance 
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }


}