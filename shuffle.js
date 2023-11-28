// Cria um array de URLs para vitrines de forma dinâmica
const vitrineURLs = Array.from({ length: 100 }, (_, i) => `vitrine${i + 1}.html`);

// Função para redirecionar para um URL aleatório
function redirecionarParaURLAleatorio() {
   // Gera um número aleatório dentro dos limites do array de URLs
   const indiceAleatorio = Math.floor(Math.random() * vitrineURLs.length);
   
   // Redireciona para o URL correspondente ao índice aleatório gerado
   window.location = vitrineURLs[indiceAleatorio];
}
