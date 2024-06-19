const frase = "O time da SAP é o melhor time para trabalhar";


function contarPalavras(string) {
/* Pega a frase recebida como parâmetro da função e coloca tudo em lower case (para facilitar
a comparação de caracteres) e separa a frase em palavras armazenando-as em um array na constante
"palavras".
*/
  const palavras = string.toLowerCase().split(" ");
// Contador para a quantidade de vezes em que a palavra é encontrada na iteração a seguir.
  let counter = 0;
/* Inicialmente, eu estava armazenando o resultado em um array de arrays (em que cada array
aninhado possuia o termo e a quantidade de vezes que aparecia.) Porém, como eu queria mostrar o
termo e o resultado apenas uma vez, optei por criar um set armazenando uma string concatenando 
a palavra mais a quantidade de vezes que ela apareceu - e como esse tipo de dados impede a
duplicidade, achei mais adequado para a necessidade */  
  const resultado = new Set();

/* Aqui, utilizei a hof forEach por conveniência, mas poderia ter sido utilizado um for simples. 
A minha ideia foi iterar sobre o array "palavras" e armazenar o termo iterado no momento na
variável "controle" e daí refazer a iteração num outro laço aninhado comparando o termo armazenado
com a palavra iterada no segundo loop. No loop interno, adicionei um if em que, sempre que a
variável de controle coincidisse com o termo iterado, o contador adicionasse mais um. Ao terminar
a iteração do array no loop interno é feita a concatenação da string da palavra iterada mais a 
quantidade de vezes em que ela apareceu e isso é armazenado no set. Depois, o contador é zerado e
o loop externo prossegue para o próximo elemento do array "palavras".
*/
  palavras.forEach((palavra) => {
    let controle = palavra;
    palavras.forEach((palavra) => {
      if (palavra === controle) {
        counter += 1;
      }
    });
    resultado.add(palavra + " - " + counter);
    counter = 0;
  });

  return resultado;
}

console.log(contarPalavras(frase));
