# Projeto: Sorteio de Amigo Secreto

Este é um projeto em JavaScript para realizar sorteios de "Amigo Secreto". Ele permite adicionar nomes, realizar o sorteio e exibir o nome do sorteado, além de resetar a lista para um novo sorteio.

## Funcionalidades

- Adicionar nomes à lista de participantes.
- Realizar o sorteio aleatório de um participante.
- Evitar sorteios quando há menos de dois participantes.
- Resetar a lista para realizar novos sorteios.

## Tecnologias Utilizadas

- HTML: Para a estrutura da interface do usuário.
- CSS: Para a estilização da interface, garantindo um design visual atrativo.
- JavaScript: Para manipulação de DOM e lógica do sorteio.

## Como Utilizar

1. Clone ou faça o download deste repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. No campo de texto, insira os nomes dos participantes e clique em "Adicionar Amigo".
4. Após adicionar pelo menos dois nomes, clique em "Sortear Amigo" para realizar o sorteio.
5. O nome sorteado será exibido.
6. Para limpar a lista de participantes e o resultado, clique em "Resetar Lista".

## Estrutura do Projeto

- `index.html`: Arquivo principal com a interface do usuário.
- `styles.css`: Arquivo contendo as regras de estilização para a página.
- `script.js`: Contém o código JavaScript para manipulação e lógica do sorteio.

## Exemplo de Código

### Adicionar Amigo
```javascript
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo").value.trim();
    if (inputNome === "") {
        alert("Por favor, insira um nome válido.");
    } else {
        nomes.push(inputNome);
        // Atualiza a lista visual
    }
}
