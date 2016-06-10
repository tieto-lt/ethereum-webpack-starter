var $ = require('jquery');

var contractConnector = require('services/ContractConnector');
var accountsService = require('services/Accounts');


function buildAccountsHtml(accounts) {
  var accountsList = "";
  accounts.forEach(function(acc) {
    accountsList += "<li>" + acc + "</li>"
  });
  document.getElementById("accounts-list").innerHTML = accountsList;
  currentAccount = accounts[0];
  setCurrentAccount(currentAccount);

  onAccountSelected(function(accountHash) {
    setCurrentAccount(accountHash);
    refreshAccountData(accountHash);
  });
}

function setCurrentAccount(accountHash) {
  accountsService.setCurrentAccount(accountHash);
  document.getElementById("current-account").innerHTML = accountHash;
  $('#accounts-list > li').removeClass("selected");
  $("#accounts-list > li:contains('" + accountHash + "')").addClass("selected");
}

function refreshAccountData(accountHash) {
  console.log(accountHash);
  var data = contractConnector.getData(accountHash);
  document.getElementById("current-account-data").innerHTML = data;
}

function init() {
  contractConnector.getAccounts(function(accounts) {
    buildAccountsHtml(accounts);
  });

  $('#send-data').on('click', function(e) {
    var acc = accountsService.getCurrentAccount();
    var newData = document.getElementById("new-data-input").value;
    contractConnector.setData(newData, acc);
    refreshAccountData(acc);
  });
}

function onAccountSelected(callback) {
  $('#accounts-list > li').on('click', function(e) {
    callback(e.target.innerText);
  });
}

module.exports = init;
