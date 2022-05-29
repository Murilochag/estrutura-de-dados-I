
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


  //////////// usando a classe dicionário

  const dictsw = new Dictionary;

  dictsw.set('força','A Força é o campo de energia que rege o universo e dá poderes a todos. O lado bom da Força está relacionado aos Jedis e preza pela liberdade de cada um. Já o lado sombrio é relacionado aos Siths e tem como objetivo impor um sistema de ditadura ao controlar toda a galáxia.')
  dictsw.set('jedi','Os Jedis são cavaleiros que possuem poder especial para combater o mal do universo a fim de restaurar a ordem. Obi-Wan Kenobi é um dos principais Jedis de toda a franquia Star Wars.')
  dictsw.set('padawan','Jedi Padawan: Padawans são os aprendizes Jedi, sendo treinados por um Cavaleiro ou por um Mestre Jedi até ser graduado Cavaleiro Jedi. São conhecidos como "Aprendizes", ou "Alunos Padawan".')
  dictsw.set('império','O Império Galáctico, também conhecido como a Nova Ordem, o Primeiro Império Galáctico ou simplesmente o Império, era o governo que subiu ao poder ao fim das Guerras Clônicas, substituindo a República Galáctica.')
  dictsw.set('sith','Os Sith são uma ordem de guerreiros seguidores do Lado Sombrio da Força que se opõem aos Jedi no universo fictício de Star Wars.')
  dictsw.set('república','A República Galáctica governava a galáxia antes das Guerras Clônicas e a ascensão do Império Galáctico. A República era aliada da Ordem Jedi e gerenciava o universo através do Senado Galáctico.')
  dictsw.set('rebelião','A rebelião era uma rede de células rebeldes que operava pela galáxia, com várias células trabalhando em oposição ao Império Galáctico.')
  dictsw.set('rebeldes','A Aliança pela Restauração da República, comumente conhecida como Aliança Rebelde, Aliança ou Rebelião, foi um movimento de resistência formado por Bail Organa e Mon Mothma para opor a ordem do Império Galáctico.')

  function procurar() {
    termo = document.getElementById('palavra').value;
    if (dictsw.hasKey(termo)) {
        document.getElementById('termo').innerHTML = termo
        document.getElementById('sig').innerHTML = dictsw.get(termo)
    }
    else if (dictsw.isEmpty()) {
      document.getElementById('termo').innerHTML = 'erro!!! dicionário vazio'
    }
    else {
        document.getElementById('termo').innerHTML = ' '
        document.getElementById('sig').innerHTML = 'desculpe, não conseguimos encontrar uma definição para o termo <i>"' + termo +'"</i>';
    }
  }