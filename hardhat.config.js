require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();


const projectId = "0a7f360917cd43f48c673dec5ed03fbd";

module.exports = {
  
networks:{
  hardhat:{
    chainId:1337
    },

  mumbai: { 
    url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
    accounts:[privateKey]
  },
  mainnet: {
    url:`https://polygon-mainnet.io/v3/${projectId}`,
    accounts:[privateKey]
  }
 

},

  solidity: "0.8.4",
};
