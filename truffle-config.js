require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name riot still hospital install lonely forget gasp'; 
let testAccounts = [
"0x0a4483946499f98aadc5b5f4ac37bfa4c6f5b284029d410c1384e379c4f923b4",
"0x4b62970b9ef0db5ad0e18b65af0d3c9ab17891abf0851b9307fcf83a13271479",
"0xa6e0a929508b687bc8ccf760779b1eb873eef929742c754589e1639267880d7e",
"0x4ba1ff970a1b350b48fdc6b74f48ebd81e1b7dd39d376c734208bc05333fbe40",
"0xc7abf6e55964d72b9cd36d7e9e58a3d0a66b78502347b13759f340c25b837b7a",
"0xbb41ab611197e50fb9970ab4c5a273a001596001d5bf9f958f4168b17e2fd74e",
"0x54be57964dca7ff0e06a8d748dae7deafc4b2d3f4cfa5dedaac1ac6924fac256",
"0x8d01e97d582587ef80c1893b3314ad4bf95a89061ce3fac456e93efab3eeef7a",
"0xd061db8c0f69b086fa6dd30806c1fbf9621053e264262b63e169e7dfb6f739d7",
"0x1dc561b8b4d96b3dc1f79f5851ab12385725e124efeece9d5f4144f89061f61b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
