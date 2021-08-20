to fork mainnet in ganache:


INFURA_API_KEY= ""

ganache-cli --fork https://mainnet.infura.io/v3/$INFURA_API_KEY --networkID 999



 const DAI="0x6b175474e89094c44da98b954eedeac495271d0f";
 const Holder = "0xfb76e9be55758d0042e003c1e46e186360f0627e";


 To transfer mainnet account token you have to unlock the account in the time ganache fork


ganache-cli --fork https://mainnet.infura.io/v3/$INFURA_API_KEY --unlock $Holder --networkID 999


ganache-cli --fork https://mainnet.infura.io/v3/$INFURA_API_KEY --unlock $Holder --networkID 999



ganache-cli --fork https://mainnet.infura.io/v3/d4dbc79ea192404fb42689cc55ce2fc0 --unlock 0xfb76e9be55758d0042e003c1e46e186360f0627e --networkId 999

to run the testcases:
npx truffle test test/test-erc20.js --network mainet_fork