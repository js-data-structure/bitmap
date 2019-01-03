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

  clear() {
    this._data = {};
  }

  toString() {
    const that = this;
    return Object.keys(this._data).map(function (key) {
      return `${(that._data[key]).toString(2)}`;
    }).join(',');
  }
}

export default BitMap;

/**
 * todo 2-Bitmap
 */
/**
 * 将bit-map扩展一下，采用2-Bitmap
 * （每个数分配2bit，00表示不存在，01表示出现一次，10表示多次，11无意义）进行，
 * 共需内存2^32 * 2 bit=1 GB内存，还可以接受。然后扫描这2.5亿个整数，
 * 查看Bitmap中相对应位，如果是00变01，01变10，10保持不变。所描完事后，查看bitmap，
 * 把对应位是01的整数输出即可
 */
