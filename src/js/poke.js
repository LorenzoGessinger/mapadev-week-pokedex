const listaSelecaoPokemon = document.querySelectorAll('.pokemon');
const pokemonCard = document.querySelectorAll('.cartao-pokemon');


listaSelecaoPokemon.forEach(pokemon => {
    // vamos precisar trabalhar com um evento de clique feito pelo usuario ou na listagem de pokemon
    pokemon.addEventListener('click', () => {
    const cartaoPokemonAberto = document.querySelector('.aberto');
    cartaoPokemonAberto.classList.remove('aberto');
    // ao clicar em um pokemon da listagem pegamos o id desse pokemon para saber qual cartao ira mostrar
    const idPokemonSelecionado = pokemon.attributes.id.value;
    // utilizar o getelementbyid para buscar elementos dos pokemon pelo ip
    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
    cartaoPokemonParaAbrir.classList.add('aberto');
    // remover a classe do pokemon que foi selecionado
    const pokemonAtivoNaListagem = document.querySelector('.ativo');
    pokemonAtivoNaListagem.classList.remove('ativo');
    // adicionar a classe ativo no item da lista selecionado
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
    pokemonSelecionadoNaListagem.classList.add('ativo');
    })
})