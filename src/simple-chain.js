const chainMaker = {
  chain: [],

  getLength: function getLength() {
    return this.chain.length;
  },

  addLink: function addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink: function removeLink(position) {
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain: function reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain: function finishChain() {
    return this.chain.join('~~');
  }
};

module.exports = chainMaker;
