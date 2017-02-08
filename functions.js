
class Util {
  /**
  * フィボナッチ数列
  * @param  {Number} n [description]
  * @return {Number}   [description]
  */
  static fib(n) {
    const sqrt = Math.sqrt(5);
    const phy = (1 + sqrt) / 2;
    return Math.round(Math.pow(phy, n) / sqrt);
  }

  /**
   * フィボナッチ数列(配列)
   * @param  {Number} e     [配列数]
   * @param  {Number} [s=1] [description]
   * @return {Array}        [description]
   */
  static fibArray(e, s = 0) {
    const array = new Array(e);
    let i = 0;
    while (i < e) {
      array[i] = this.fib(i);
      i = (i + 1) | 0;
    }
    return (s > 0) ? array.slice(s) : array;
  }

  /**
  * 乱数の配列
  * @param  {Number} length    [配列の長さ]
  * @param  {Number} [max=100] [最大数]
  * @return {Array}            [description]
  */
  static generateRandArray(length, max = 100) {
    const randoms = [];
    for (let i = 0; i < length; i++) {
      randoms[i] = Math.floor(Math.random() * (0 - max) + max);
    }
    return randoms;
  }

  /**
  * hashのlist作成
  * @param  {Array} list [description]
  * @return {Object}      [description]
  */
  static hashMakeList(list) {
    const hashlist = list.reduce((dir, v, idx) => {
      dir[v] = (dir[v] || []).concat(idx);
      return dir;
    }, {});
    return hashlist;
  }

  /**
  * リニアサーチ（線形探索法）
  * @param  {Array} list [description]
  * @param  {Number} n    [description]
  * @return {Number}      [description]
  */
  static linearSearch(list, n) {
    let idx = null;
    for (let i = 0;i < list.length;i++) {
      if (list[i] === n) {
        idx = i;
        break;
      }
    }
    return idx;
  }

  /**
   * バイナリサーチ（二分探索法）
   * @param  {Array}  array          [description]
   * @param  {Number}  n              [description]
   * @param  {Boolean} [isSort=false] [description]
   * @return {Number}                 [description]
   */
  static binarySearch(array = [], n, isSort = false) {
    const list = isSort ? array.sort() : array;
    let idx = null;
    let head = 0;
    let tail = list.length;

    while (head <= tail) {
      const center = Math.floor((head + tail) / 2);
      const centerVal = list[center];

      if (centerVal === n) {
        idx = center;
        break;
      }
      if (centerVal < n) {
        head = center + 1;
      } else {
        tail = center - 1;
      }
    }
    return idx;
  }

  /**
  * ハッシュ探索法
  * @param  {Array}  list             [description]
  * @param  {Number}  n               [description]
  * @param  {Boolean} [makehash=true] [description]
  * @return {Number}                  [description]
  */
  static hashSearch(list, n, makehash = true) {
    const hashlist = (makehash) ? this.hashMakeList(list) : list;
    let idx = null;
    if (hashlist[n]) idx = hashlist[n];
    return idx;
  }
}

module.exports = Util;
