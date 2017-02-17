
this.onmessage = function (message) {
  var data = message.data;
  var algorithm = new Algorithm();
  var args = null;
  if (data.function === undefined) throw new Error();

  if (data.args !== undefined) {
    args = data.args;
  }

  // var fnc = algorithm.checkFunction(data.function);
  var fnc = algorithm.callFunction(data.function);
  fnc();
};

function Algorithm() {
  this.functions = {
    fib: true,
    fibArray: true,
    generateRandArray: true,
    hashMakeList: true,
    linearSearch: true,
    binarySearch: true,
    hashSearch: true,
    quickSort: true,
    combi: true,
    primeFactorization: true,
    isPrimeNum: true
  };
}

Algorithm.prototype.checkFunction = function checkFunction(key) {
  var exist = this.functions[key];
  if (!exist) throw new Error();
  return true;
};

Algorithm.prototype.fib = function fib(n) {
  var sqrt = Math.sqrt(5);
  var phy = (1 + sqrt) / 2;
  return Math.round(Math.pow(phy, n) / sqrt);
};

Algorithm.prototype.fibArray = function fibArray(e) {
  var array = new Array(e);
  var i = 0;
  while (i < e) {
    array[i] = this.fib(i);
    i = (i + 1) | 0;
  }
  return (s > 0) ? array.slice(s) : array;
};

Algorithm.prototype.generateRandArray = function generateRandArray(length) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var randoms = [];
  for (var i = 0; i < length; i++) {
    randoms[i] = Math.floor(Math.random() * (0 - max) + max);
  }
  return randoms;
};

Algorithm.prototype.hashMakeList = function hashMakeList(list) {
  var hashlist = list.reduce((dir, v, idx) => {
    dir[v] = (dir[v] || []).concat(idx);
    return dir;
  }, {});
  return hashlist;
};

Algorithm.prototype.linearSearch = function linearSearch(list, n) {
  var idx = null;
  for (var i = 0; i < list.length; i++) {
    if (list[i] === n) {
      idx = i;
      break;
    }
  }
  return idx;
};

Algorithm.prototype.binarySearch = function binarySearch(array = [], n, isSort = false) {
  var list = isSort ? array.sort() : array;
  var idx = null;
  var head = 0;
  var tail = list.length;

  while (head <= tail) {
    var center = Math.floor((head + tail) / 2);
    var centerVal = list[center];

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
};

Algorithm.prototype.hashSearch = function hashSearch(list, n, makehash = true) {
  var hashlist = makehash ? this.hashMakeList(list) : list;
  return hashlist[n] ? hashlist[n] : null;
};

Algorithm.prototype.quickSort = function quickSort(array) {
  (function sort(start, end) {
    if (start >= end) return;

    var ref = array[start];
    var left = start + 1;
    var right = end;

    while (left < right) {
      if (array[left] > ref) {
        while (right > left) {
          if (array[right] <= ref) {
            var tmp = array[left];
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
    var center = (array[right] > ref) ? right - 1 : right;

    array[start] = array[center];
    array[center] = ref;
    sort(start, center - 1);
    sort(center + 1, end);
  })(0, array.length - 1);

  return array;
}

Algorithm.prototype.combi = function combi(n, r) {
  var p = null;
  for (var i = 1; i <= r;) {
    p = (p * ((n - i) + 1)) / i;
    i += 1;
  }
  return p;
}

Algorithm.prototype.primeFactorization = function primeFactorization(n) {
  var a = 2;
  var r = [];
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
};

Algorithm.prototype.isPrimeNum = function isPrimeNum(n) {
  var i = null;
  var lmt = null;
  if (n >= 2) {
    lmt = parseInt(Math.sqrt(n));
    for (i = lmt; i > 1;) {
      if (n % i === 0) break;
      i -= 1;
    }
    return (i === 1);
  }
  return null;
};
