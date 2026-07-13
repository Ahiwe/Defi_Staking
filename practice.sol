// practice session 

// event approved(
    
//     address indexed _owner;
//     address indexed spender;
//     uint value;
// )


// event transfer(
//     address  indexed _from,
//     address indexed _to,
//     uint _amount
//     )
//  function tranferEth(address _to, uint _value) public returns (bool success){
//  require(balanceOf[msg.sender]>= _value "insufficient funds");
//  balanceOf[msg.sender] =- _value;
//  balanceOf[_to] =+ _value;

//     emit transfer( msg.sender,  _to, _value(msg.sender);
//     )
//     return true;
//  }
//  function approval(address _owner, address spender uint value) public returns(bool success){
//     require(msg.sender = _owner, "you are not permited to call this function");
    
//  }