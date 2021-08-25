"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
const config = {
    paths: {
        sources: './test/contracts',
    },
    solidity: {
        version: '0.7.6',
        settings: {
            outputSelection: {
                '*': {
                    '*': ['storageLayout'],
                },
            },
        },
    },
};
exports.default = config;
//# sourceMappingURL=hardhat.config.js.map