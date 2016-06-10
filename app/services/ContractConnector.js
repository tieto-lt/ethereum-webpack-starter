var contract = require('SampleContract.sol');

var web3 = contract.web3;
var SampleContract = contract.SampleContract;


var getAccounts = function(callback) {
  web3.eth.getAccounts(function(err, accounts) {
      if (err != null) {
        console.log("There was an error fetching your accounts.");
        return;
      }
      callback(accounts);
  });
}

var getData = function(account) {
  console.log("getting", account);
  return SampleContract.getData({from: account});
}

var setData = function(newData, account) {
  return SampleContract.setData.sendTransaction(newData, {from: account});
}

module.exports = {
  getAccounts: getAccounts,
  getData: getData,
  setData: setData
}
