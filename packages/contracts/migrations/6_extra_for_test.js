const user = "0xcec56f1d4dc439e298d5f8b6ff3aa6be58cd6fdf";
module.exports = function(deployer, network, accounts) {
  web3.eth.sendTransaction({
    from: accounts[0],
    to: user,
    value: web3.toWei(1, "ether")
  });
};