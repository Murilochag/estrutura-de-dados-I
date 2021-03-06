
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
        objString = `${objString},${valuePairs[i].toString()}`;
      }
      return objString;
    }
  }


  //////////// usando a classe dicion??rio

  const dictsw = new Dictionary;

  dictsw.set('for??a','A For??a ?? o campo de energia que rege o universo e d?? poderes a todos. O lado bom da For??a est?? relacionado aos Jedis e preza pela liberdade de cada um. J?? o lado sombrio ?? relacionado aos Siths e tem como objetivo impor um sistema de ditadura ao controlar toda a gal??xia.')
  dictsw.set('jedi','Os Jedis s??o cavaleiros que possuem poder especial para combater o mal do universo a fim de restaurar a ordem. Obi-Wan Kenobi ?? um dos principais Jedis de toda a franquia Star Wars.')
  dictsw.set('padawan','Jedi Padawan: Padawans s??o os aprendizes Jedi, sendo treinados por um Cavaleiro ou por um Mestre Jedi at?? ser graduado Cavaleiro Jedi. S??o conhecidos como "Aprendizes", ou "Alunos Padawan".')
  dictsw.set('imp??rio','O Imp??rio Gal??ctico, tamb??m conhecido como a Nova Ordem, o Primeiro Imp??rio Gal??ctico ou simplesmente o Imp??rio, era o governo que subiu ao poder ao fim das Guerras Cl??nicas, substituindo a Rep??blica Gal??ctica.')
  dictsw.set('sith','Os Sith s??o uma ordem de guerreiros seguidores do Lado Sombrio da For??a que se op??em aos Jedi no universo fict??cio de Star Wars.')
  dictsw.set('rep??blica','A Rep??blica Gal??ctica governava a gal??xia antes das Guerras Cl??nicas e a ascens??o do Imp??rio Gal??ctico. A Rep??blica era aliada da Ordem Jedi e gerenciava o universo atrav??s do Senado Gal??ctico.')
  dictsw.set('rebeli??o','A rebeli??o era uma rede de c??lulas rebeldes que operava pela gal??xia, com v??rias c??lulas trabalhando em oposi????o ao Imp??rio Gal??ctico.')
  dictsw.set('rebeldes','A Alian??a pela Restaura????o da Rep??blica, comumente conhecida como Alian??a Rebelde, Alian??a ou Rebeli??o, foi um movimento de resist??ncia formado por Bail Organa e Mon Mothma para opor a ordem do Imp??rio Gal??ctico.')

  function procurar() {
    termo = document.getElementById('palavra').value;
    if (dictsw.hasKey(termo)) {
        document.getElementById('termo').innerHTML = termo
        document.getElementById('sig').innerHTML = dictsw.get(termo)
    }
    else if (dictsw.isEmpty()) {
      document.getElementById('termo').innerHTML = 'erro!!! dicion??rio vazio'
    }
    else {
        document.getElementById('termo').innerHTML = ' '
        document.getElementById('sig').innerHTML = 'desculpe, n??o conseguimos encontrar uma defini????o para o termo <i>"' + termo +'"</i>';
    }
  }