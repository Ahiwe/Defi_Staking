const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

require('chai')
.use(require('chai-as-promised'))
.should()

contract('decentralBank', ([owner, customer]) => {
     //this is a session for testing 

     // for the sake of reusablity we have to use the 
     // before method to wrap some of our code like 
     // the rwd and tether
     let tether, rwd, decentralBank;

     function tokens(number){
          return web3.utils.toWei(number, 'ether');
     }

     before(async () => {
          /*This where we load our contracts and deploy them to the blockchain before we run our tests */
          tether = await Tether.new();
          rwd = await RWD.new();
          decentralBank = await DecentralBank.new(rwd.address, tether.address);
          // I used await because I didn't delare the transfer function
          await rwd.transfer(decentralBank.address, tokens('1000000'));
          //for the sake of testing we are going to transfer 100 tether tokens to the investor
          //this looks like exactly what we did in the deployement 
          //script but we are now adding where the token is coming from using our "from" object 
           await tether.transfer(customer, tokens('100'), {from: owner} )
     })

     describe('Mock Tether Deployement', () => {
          it('matches name successfully', async () => {
              
               const name = await tether.name();
               assert.equal(name, 'Tether');
          });
     } );

     describe('Reward Token Deployment ', () => {
          it('matches name successfully ', async() =>{
           
               const name = await rwd.name();
               assert.equal(name, 'Reward Token');
          } )
     })

     
     describe('DecentralBank Deployment', () => {
          it('matches name successfully', async () => {
               const name = await decentralBank.name();
               assert.equal(name, 'Decentral Bank');
          });

          it('contract has tokens', async () => {
               let balance = await rwd.balanceOf(decentralBank.address)
               assert.equal(balance, tokens('1000000'))
          })
     });


})






// const simpleStorage = artifacts.require("simpleStorage")

// contract  ('simpleStorage', () => {
 
//      it('should store small value successully', async () =>{
//           const simpleStorageInstance = await simpleStorage.deployed();
//           await simpleStorageInstance.set('this');
//           const result = await simpleStorageInstance.get();
//           assert.equal(result === 'this');

//      });  
// });                         


// const RWD = artifacts.require('Reward token');