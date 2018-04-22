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
const address = '0xdeadbeef123456789000000000000';

function initContract(contract) {
  const MiniToken = contract(abi);
  const miniToken = MiniToken.at(address);
  listenForClicks(miniToken);
}

function listenForClicks (miniToken) {
  var button = document.querySelector('button.bidsubmit')
  button.addEventListener('click', function() {
    miniToken.transfer(toAddress, value, { from: addr })
    .then(function (txHash) {
      console.log('Transaction sent')
      console.dir(txHash)
      waitForTxToBeMined(txHash)
    })
    .catch(console.error)
  })
}
