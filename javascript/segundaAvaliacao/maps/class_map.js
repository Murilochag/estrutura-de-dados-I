const map = new Map();

map.set('força','A Força é o campo de energia que rege o universo e dá poderes a todos. O lado bom da Força está relacionado aos Jedis e preza pela liberdade de cada um. Já o lado sombrio é relacionado aos Siths e tem como objetivo impor um sistema de ditadura ao controlar toda a galáxia.');
map.set('jedi','Os Jedis são cavaleiros que possuem poder especial para combater o mal do universo a fim de restaurar a ordem. Obi-Wan Kenobi é um dos principais Jedis de toda a franquia Star Wars.');
map.set('padawan','Padawans são os aprendizes Jedi, sendo treinados por um Cavaleiro ou por um Mestre Jedi até ser graduado Cavaleiro Jedi. São conhecidos como "Aprendizes", ou "Alunos Padawan".');


console.log(map.has('força'));
console.log(map.size);

console.log(map.keys());
console.log(map.values());
console.log(map.get('jedi'));

map.delete('padawan');

console.log(map.keys());
console.log(map.values());