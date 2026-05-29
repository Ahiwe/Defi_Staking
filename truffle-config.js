require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/truffle_abis/",
  migration_directory: "./src/migrations/",
 
  compilers: {
    solc:{
        version: "^0.5.17",
        settings:{
              optimizer: {
            enabled: true,
            runs: 200

        }
        }
      
    }

  }
};