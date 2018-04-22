const Eth = require('ethjs-query');
const EthContract = require('ethjs-contract');

export function startApp(web3) {
  const eth = new Eth(web3.currentProvider);
  const contract = new EthContract(eth);
  initContract(contract);
}

const abi = [
  {
    constant: false,
    inputs: [
      {
        name: '_to',
        type: 'address',
      },
      {
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        name: 'success',
        type: 'bool',
      },
    ],
    payable: false,
    type: 'function',
  },
];

//FAKE DATA
const address = '0x98ee18d7a1f7510B78b36f5a16471c7CD0c1c531'; // I think this dictates where money is going to
// const toAddress = '0x5366fc68Ec44180E4a25b0Cd0E09A267D6Db3c71'; //CONTRACT
// const value = 3 //document.querySelector('input_0');
const addr = '0xe748cC8284205e7d30B9540D6BC9fE5815484212'; // TODO: convert this to users id/ where money is coming from
var inWei = web3.toWei('10', 'ether')
let miniToken;

function initContract(contract) {
  const MiniToken = contract(abi);
  miniToken = MiniToken.at(address);
}

export function listenForClicks(toAddress, value) {
  miniToken.transfer(toAddress, value, { from: addr })
    .then(function (txHash) {
      console.log('Transaction sent')
      console.dir(txHash)
      waitForTxToBeMined(txHash)
    })
    .catch(console.error);
}

async function waitForTxToBeMined(txHash) {
  let txReceipt
  while (!txReceipt) {
    try {
      txReceipt = await eth.getTransactionReceipt(txHash)
    } catch (err) {
      return indicateFailure(err)
    }
  }
  indicateSuccess()
}
