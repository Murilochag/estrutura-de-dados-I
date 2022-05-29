

function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }
  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }
  keyValues() {
    return Object.values(this.table);
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return Object.keys(this.table).length;
  }
  clear() {
    this.table = {};
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString}\n${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

const dictsw = new Dictionary;


dictsw.set('força','A Força é o campo de energia que rege o universo e dá poderes a todos. O lado bom da Força está relacionado aos Jedis e preza pela liberdade de cada um. Já o lado sombrio é relacionado aos Siths e tem como objetivo impor um sistema de ditadura ao controlar toda a galáxia.')
dictsw.set('jedi','Os Jedis são cavaleiros que possuem poder especial para combater o mal do universo a fim de restaurar a ordem. Obi-Wan Kenobi é um dos principais Jedis de toda a franquia Star Wars.')
dictsw.set('padawan','Padawans são os aprendizes Jedi, sendo treinados por um Cavaleiro ou por um Mestre Jedi até ser graduado Cavaleiro Jedi. São conhecidos como "Aprendizes", ou "Alunos Padawan".')


console.log(dictsw.toString())