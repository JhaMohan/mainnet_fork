const IERC20 = artifacts.require("IERC20");
const { default: Web3 } = require('web3');

contract ("IERC20",(accounts)=>{

        const DAI="0x6b175474e89094c44da98b954eedeac495271d0f";
        const Holder = "0x6f3f68525e5edad6f06f8b0eae0dd7b9f695af13";



            it("get DAI Balance", async()=>{
                const dai = await IERC20.at(DAI);
                const bal = await dai.balanceOf(Holder);

                console.log("Balance",bal.toString());

            })


            it("transfer balance ",async()=>{
                const dai =  await IERC20.at(DAI);
                const bal =  await dai.balanceOf(Holder);
                await dai.transfer(accounts[0],bal.toString(),{from:Holder});
                const rbal =  await dai.balanceOf(Holder);
                console.log("remaing Balance",rbal.toString());
            })

})