
function Algorithm() {}

Algorithm.prototype.fib = function fib(n) {
  const sqrt = Math.sqrt(5);
  const phy = (1 + sqrt) / 2;
  return Math.round(Math.pow(phy, n) / sqrt);
};

Algorithm.prototype.fibArray = function fibArray(e) {
  const array = new Array(e);
  let i = 0;
  while (i < e) {
    array[i] = this.fib(i);
    i = (i + 1) | 0;
  }
  return (s > 0) ? array.slice(s) : array;
};

Algorithm.prototype.generateRandArray = function generateRandArray(length, max = 100) {
  const randoms = [];
  for (let i = 0; i < length; i++) {
    randoms[i] = Math.floor(Math.random() * (0 - max) + max);
  }
  return randoms;
}

Algorithm.prototype.hashMakeList = function hashMakeList(list) {
  const hashlist = list.reduce((dir, v, idx) => {
    dir[v] = (dir[v] || []).concat(idx);
    return dir;
  }, {});
  return hashlist;
}

Algorithm.prototype.linearSearch = function linearSearch(list, n) {
  let idx = null;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === n) {
      idx = i;
      break;
    }
  }
  return idx;
}

Algorithm.prototype.binarySearch = function binarySearch(array = [], n, isSort = false) {
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

Algorithm.prototype.hashSearch = function hashSearch(list, n, makehash = true) {
  const hashlist = makehash ? this.hashMakeList(list) : list;
  return hashlist[n] ? hashlist[n] : null;
}

Algorithm.prototype.quickSort = function quickSort(array) {
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

Algorithm.prototype.combi = function combi(n, r) {
  let p = null;
  for (let i = 1; i <= r;) {
    p = (p * ((n - i) + 1)) / i;
    i += 1;
  }
  return p;
}

Algorithm.prototype.primeFactorization = function primeFactorization(n) {
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

Algorithm.prototype.isPrimeNum = function isPrimeNum(n) {
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
