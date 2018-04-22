pragma solidity ^0.4.2;

contract BitBoard {
    address public owner;
    uint public minimumBet = 100 finney;
    uint public minIncrement = 50 finney;
    address[] public  bidders;
    address public winner;
    string public winnerAd;
    uint public endingBlock;
    uint public currentBet;
    

    
    
    struct Bidder {
        uint256 amountBet;
        string imgUrl;
    }
    
    event winnerMade (
        string winningUrl
    );
    event newHighBet (
        address highBetter,
        string newImgUrl
    );

    modifier recentlyEnded() {
        assert(endingBlock + 100 < block.number);
        _;
    }

    mapping(address => Bidder) public playerInfo;

    function BitBoard (uint256 _minimumBet) public {
        owner = msg.sender;
        winnerAd = 'http://fillmurray.com/200/300';
        endingBlock = 0;
        if(_minimumBet > 0 ) minimumBet = _minimumBet;
    }
    function kill() public {
      if(msg.sender == owner) selfdestruct(owner);
    }
    
    function bet (string _imgUrl) public payable recentlyEnded {
        currentBet = msg.value;
        if(playerInfo[msg.sender].amountBet > 0) {
            currentBet += playerInfo[msg.sender].amountBet;
        }

        assert(currentBet > minimumBet + minIncrement);
        if(playerInfo[msg.sender].amountBet == 0){
                    bidders.push(msg.sender);
        }
        minimumBet = msg.value;
        playerInfo[msg.sender].amountBet = msg.value;
        playerInfo[msg.sender].imgUrl = _imgUrl;
        winner = msg.sender;
        newHighBet(msg.sender, playerInfo[msg.sender].imgUrl);
    }

    function callWinner() public payable {

        assert(msg.sender == owner);

            winnerAd = playerInfo[msg.sender].imgUrl;
            endingBlock = block.number;
            owner.transfer(currentBet);

            for(uint j = 0; j < bidders.length; j++) {
                if(bidders[j] != winner) {
                    bidders[j].transfer(playerInfo[bidders[j]].amountBet);
                }
            }
        winnerMade(winnerAd);

    }
}