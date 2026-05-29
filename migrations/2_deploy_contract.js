const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

module.exports = async function(deployer){

    //deploy Tether
    await deployer.deploy(Tether)

    //deploy RWD
    await deployer.deploy(RWD)

    //deploy Decentral Bank
    await deployer.deploy(DecentralBank)
};
