function getBitIndexAndValue(n) {
  return {
    index: n >> 5,
    flag: 1 << (n & 0x1f)
  };
}


function isNumber(num) {
  return typeof num === 'number';
}

/**
 * BitMap
 */
class BitMap {
  constructor(data = []) {
    this._data = {};
    if (Array.isArray(data) && data.length > 0) {
      const that = this;
      data.forEach(function (item) {
        if (isNumber(item)) {
          that.push(item);
        }
      });
    }
  }

  push(n) {
    const {index, flag} = getBitIndexAndValue(n);
    this._data[index] || (this._data[index] = 0);
    this._data[index] |= flag;
  }

  isExist(n) {
    if (!isNumber(n)) {
      return false;
    }
    const {index, flag} = getBitIndexAndValue(n);
    if (!this._data[index]) {
      return false;
    }

    return Boolean(this._data[index] & flag);
  }


  toString() {
    const that = this;
    const str = Object.keys(this._data).map(function (key) {
      return `${(that._data[key]).toString(2)}`;
    }).join(',');
    console.log(str);
  }
}

export default BitMap;
