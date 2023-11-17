var paulo = {
    nome: 'Paulo',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var rafa = {
    nome: 'Rafa',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var gui = {
    nome: 'Gui',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var bruno = {
    nome: 'Bruno',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}

var elementoTabela = document.getElementById('tabelaJogadores')

exibirNaTela()

function exibirNaTela() {
    elementoTabela.innerHTML = `
        <tr>
            <td>${bruno.nome}</td>
            <td>${bruno.vitoria}</td>
            <td>${bruno.empate}</td>
            <td>${bruno.derrota}</td>
            <td>${bruno.pontos}</td>
            <td><button onClick="adicionarVitoria(bruno)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(bruno)">Empate</button></td>
            <td><button onClick="adicionarDerrota(bruno)">Derrota</button></td>
        </tr>
    `
}

function adicionarVitoria(jogador) {
    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirNaTela()
}

function adicionarEmpate(jogador) {
    jogador.empate++
    jogador.pontos++
    exibirNaTela()
}

function adicionarDerrota(jogador) {
    jogador.derrota++
    exibirNaTela()
}
