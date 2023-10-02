// contracts/FunToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ZialinkToken is ERC20 {

    // Initialize a variable with the number of token you want to mint 
    uint256 constant NumOfToken = 1000000 * (10**18);

    // Write a constructor that will mint the tokens immediately the contract is deployed
    constructor() ERC20("ZialinkToken", "ZIA") {
        _mint(msg.sender, NumOfToken);
    }
}