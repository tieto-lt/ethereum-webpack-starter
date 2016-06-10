

module.exports = {

  currentAccount: undefined,

  setCurrentAccount: function(newAccount) {
    this.currentAccount = newAccount;
  },

  getCurrentAccount: function() {
    return this.currentAccount;
  },
}
