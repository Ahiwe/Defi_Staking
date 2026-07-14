const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

module.exports = async function(deployer,network, accounts){

    //deploy Tether
    await deployer.deploy(Tether)
    const tether = await Tether.deployed()

    //deploy RWD
    await deployer.deploy(RWD)
    const rwd = await RWD.deployed()

    //deploy Decentral Bank
    // we are adding rwd.sol and tether.sol
    // because Decentral Bank depends on them
    // in programming this is called dependency injection
    await deployer.deploy(DecentralBank, rwd.address, tether.address)
    const decentralBank = await DecentralBank.deployed()


    //tranfer RWD tokens to Decentral Bank (1 million)
   
    await rwd.transfer(decentralBank.address, '100000000000') 

    //Distribute 100 tether tokens to investor
    await tether.transfer(accounts[1], '100000000000000000000')

};

