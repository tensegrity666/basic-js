const chainMaker = {
  chain: [],

  getLength: function getLength() {
    return this.chain.length;
  },

  addLink: function addLink(value) {
    if (value === undefined) {
      this.chain.push(`( )`);
      return this;
    } else {
      this.chain.push(`( ${value} )`);
      return this;
    }
  },

  removeLink: function removeLink(position) {
    if (typeof position !== 'number' || position > this.getLength() || position <= 0) {
      this.chain = [];
      throw Error('Error!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain: function reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain: function finishChain() {
    const newArr = [...this.chain];
    this.chain = [];
    return newArr.join('~~');
  }
};

module.exports = chainMaker;
