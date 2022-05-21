class Set {
    constructor() {
      this.items = {};
    }
    add(element) {
      if (!this.has(element)) {
        this.items[element] = element;
        return true;
      }
      return false;
    }
    delete(element) {
      if (this.has(element)) {
        delete this.items[element];
        return true;
      }
      return false;
    }
    has(element) {
      return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    values() {
      return Object.values(this.items);
    }
    union(otherSet) {
      const unionSet = new Set();
      this.values().forEach(value => unionSet.add(value));
      otherSet.values().forEach(value => unionSet.add(value));
      return unionSet;
    }
    intersection(otherSet) {
      const intersectionSet = new Set();
      const values = this.values();
      const otherValues = otherSet.values();
      let biggerSet = values;
      let smallerSet = otherValues;
      if (otherValues.length - values.length > 0) {
        biggerSet = otherValues;
        smallerSet = values;
      }
      smallerSet.forEach(value => {
        if (biggerSet.includes(value)) {
          intersectionSet.add(value);
        }
      });
      return intersectionSet;
    }
    difference(otherSet) {
      const differenceSet = new Set();
      this.values().forEach(value => {
        if (!otherSet.has(value)) {
          differenceSet.add(value);
        }
      });
      return differenceSet;
    }
    isSubsetOf(otherSet) {
      if (this.size() > otherSet.size()) {
        return false;
      }
      let isSubset = true;
      this.values().every(value => {
        if (!otherSet.has(value)) {
          isSubset = false;
          return false;
        }
        return true;
      });
      return isSubset;
    }
    isEmpty() {
      return this.size() === 0;
    }
    size() {
      return Object.keys(this.items).length;
    }
    clear() {
      this.items = {};
    }
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      const values = this.values();
      let objString = `${values[0]}`;
      for (let i = 1; i < values.length; i++) {
        objString = `${objString},${values[i].toString()}`;
      }
      return objString;
    }
  }

  const set1 = new Set

  set1.add(1)
  set1.add(2)
  set1.add(3)
  set1.add(4)
  set1.add(5)
  console.log('set1: ' + set1.toString())

  const set2 = new Set

  set2.add(2)
  set2.add(3)
  set2.add(7)
  set2.add(8)
  console.log('set2: ' + set2.toString())

  const set3 = new Set

  set3.add(1)
  set3.add(2)
  set3.add(3)
  console.log('set3: ' + set3.toString())

  //union
  console.log('union: ' + set1.union(set2).toString())

  //intersection
  console.log('intersection: ' + set1.intersection(set2).toString())

  //difference
  console.log('difference: ' + set1.difference(set2).toString())

  //isSubsetOf
  console.log('isSubsetO set3 => sert1: ' + set3.isSubsetOf(set1).toString())
  console.log('isSubsetO set3 => sert2: ' + set3.isSubsetOf(set2).toString())
  