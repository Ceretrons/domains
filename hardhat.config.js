require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url: process.env.url,
      accounts:[process.env.key]
    }
  }
};
