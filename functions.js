/**
 * 学習用
 */
 class Algorithm {

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
    for (let i = 0; i < list.length; i++) {
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
    const hashlist = makehash ? this.hashMakeList(list) : list;
    let idx = null;
    if (hashlist[n]) idx = hashlist[n];
    return idx;
  }

  /**
  * ハッシュ探索法
  * @param  {Array}  list             [description]
  * @param  {Number}  n               [description]
  * @param  {Boolean} [makehash=true] [description]
  * @return {Number}                  [description]
  */
  static hashSearchA(list, n, makehash = true) {
    const hashlist = makehash ? this.hashMakeList(list) : list;
    return hashlist[n] ? hashlist[n] : null;
  }

  /**
   * クイックソート
   * @param  {Array} array [description]
   * @return {[type]}       [description]
   */
  static quickSort(array) {
    (function sort(start, end) {
      if (start >= end) return;

      const ref = array[start];
      let left = start + 1;
      let right = end;

      while (left < right) {
        if (array[left] > ref) {
          while (right > left) {
            if (array[right] <= ref) {
              const tmp = array[left];
              array[left] = array[right];
              array[right] = tmp;
              right -= 1;
              break;
            }
            right -= 1;
          }
        }
        left += 1;
      }
      const center = (array[right] > ref) ? right - 1 : right;

      array[start] = array[center];
      array[center] = ref;
      sort(start, center - 1);
      sort(center + 1, end);
    })(0, array.length - 1);

    return array;
  }

  /**
   * 漸化式(nCr)
   * @param  {Number} n [description]
   * @param  {Number} r [description]
   * @return {Number}   [description]
   */
  static combi(n, r) {
    let p = null;
    for (let i = 1; i <= r;) {
      p = (p * ((n - i) + 1)) / i;
      i += 1;
    }
    return p;
  }

  /**
   * 素因数分解
   */
  /**
   * 素因数分解
   * @param  {Number} n [description]
   * @return {Array}   [description]
   */
  static primeFactorization(n) {
    let a = 2;
    const r = [];
    while (n >= (a * a)) {
      if ((n % a) === 0) {
        r.push(a);
        n = n / a;
      } else {
        a += 1;
      }
    }
    r.push(n);
    return r;
  }

  /**
   * 素数判定
   * @param  {Number}  n [description]
   * @return {Boolean}   [description]
   */
  static isPrimeNum(n) {
    let i = null;
    let lmt = null;
    if (n >= 2) {
      lmt = parseInt(Math.sqrt(n));
      for (i = lmt; i > 1;) {
        if (n % i === 0) break;
        i -= 1;
      }
      return (i === 1);
    }
    return null;
  }

  /**
   * あとで切り出す(ナンプレ)
   * 処理が重いため、気をつけて実行
   */
  static numpre() {
    const board=[
      0, 0, 5,  3, 0, 0,  0, 0, 0,
      8, 0, 0,  0, 0, 0,  0, 2, 0,
      0, 7, 0,  0, 1, 0,  5, 0, 0,
      4, 0, 0,  0, 0, 5,  3, 0, 0,
      0, 1, 0,  0, 7, 0,  0, 0, 6,
      0, 0, 3,  2, 0, 0,  0, 8, 0,
      0, 6, 0,  5, 0, 0,  0, 0, 9,
      0, 0, 4,  0, 0, 0,  0, 3, 0,
      0, 0, 0,  0, 0, 9,  7, 0, 0];
    const search = (n) => {
      for (let i = n + 1; i < 81;i++) {
        if (board[i] === 0) return i;
      }
      return false;
    };

    const valid = (n) => {
      const y = n / 9 | 0;
      const x = n % 9;
      const xbase = (x / 3 | 0) * 3;
      const ybase = (y / 3 | 0) * 3;

      for (let i = 0; i < 9; i++){
       if(board[(i * 9) + x] === board[n] &&
          (i * 9) + x !== n ||
          board[(i + y) * 9] === board[n] &&
          i + (y * 9) !== n ||
          board[xbase + (i % 3) + (ybase + ((i / 3 | 0)) * 9)] === board[n] &&
          xbase + (i % 3) + (ybase + (i / 3 | 0)) * 9 !== n) {
         return false;
       }
      }
      return true;
    };

    const solve = (pos) => {
      pos = search(pos);
      if (pos === false) return true;

      for (let i = 1; i < 10; i++) {
        board[pos] = i;

        if (valid(pos)) {
          if (!solve(pos)) {
            if (i != 9) {
              continue;
            } else {
              board[pos] = 0;
              return false;
            }
          } else {
            return true;
          }
        } else if (i === 9) {
          board[pos] = 0;
          return false;
        }
      }
    };
  }
}

module.exports = Algorithm;
