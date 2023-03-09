require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/CHLM_jYFDt1xDXvcvALUWxJ6gaOfkv0r",
      accounts:["e5d828337bbd2989e4412f0bf8e87b56e819eb1612feb1adbca5f2d466a85258"]
    }
  }
};

//https://eth-goerli.g.alchemy.com/v2/CHLM_jYFDt1xDXvcvALUWxJ6gaOfkv0r
//https://eth-goerli.g.alchemy.com/v2/CHLM_jYFDt1xDXvcvALUWxJ6gaOfkv0r