const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');

require('chai')
.use(require('chai-as-promised'))
.should()

contract('decentralBank', (accounts) => {
     //this is a session for testing 

     // for the sake of reusablity we have to use the 
     // before method to wrap some of our code like 
     // the rwd and tether
     let tether, rwd, decentralBank;

     before(async => () {
          let tether = await Tether.new()
          let rwd = await RWD.new();
     })

     describe('Mock Tether Deployement', () => {
          it('matches name successfully', async () => {
              
               const name = await tether.name();
               assert.equal(name, 'Tether');
          });
     } );

     describe('Reward Token', () => {
          it('matches name successfully ', async() =>{
           
               const name = await rwd.name();
               assert.equal(name, 'Reward Token');
          } )
     })

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