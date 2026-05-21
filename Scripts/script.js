// ==========================================
// 1. CÓDIGO DO DARK MODE (MODO ESCURO)
// ==========================================

// Pegamos o botão do HTML e guardamos na variável
const botao = document.getElementById('theme-toggle');

// Função que liga/desliga a classe dark-mode no body
function alternarTema() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')){
        botao.innerHTML = "☀️ Modo Claro";
    }else {
        botao.innerHTML = "🌙 Modo Escuro";
    }
}

// Ouvinte de evento: quando clicar no botão, roda a função do tema
botao.addEventListener('click', alternarTema);


// ==========================================
// 2. CÓDIGO DO EFEITO DE DIGITAÇÃO SEQUENCIAL
// ==========================================

// Lista com os 3 textos que apagamos do HTML
const dicionario = {
     pt: {
        botaoLang: "🇺🇸 English",
        textos: [
        "Estudante de Desenvolvimento de Software Multiplataforma na FATEC Osasco, e foi lá que descobri que meu objetivo na tecnologia é grande: não quero ser um programador de uma área só. Minha meta é entender o ecossistema de software por completo, ir muito além do básico e ser aquele desenvolvedor que resolve problemas reais, não importa a linguagem.",

        "Minha jornada começou com a lógica pura em C e C++, passou pela versatilidade do Python e no momento estouaprendendo Java, focado em OOP, hoje mergulho na estrutura da Web com HTML, CSS e JavaScript. Também tenho facilidade com bancos de dados e ferramentas essenciais do dia a dia (como o Pacote Office). Para mim, cada tecnologia nova não é um peso, é mais uma ferramenta na minha caixa de ferramentas.",

        "Sou movido pela curiosidade, facilidade de aprendizado e por uma postura proativa. Domino o português, me viro bem com o inglês técnico e estou pronto para colaborar, aprender com quem tem mais experiência e contribuir ativamente para o crescimento do time"
]
},

    en:{
        botaoLang: "🇧🇷 Português",
        textos:[

    "Multiplatform Software Development student at FATEC Osasco, where I discovered that my goals in technology are vast: I don't want to be a single-field programmer. My goal is to understand the entire software ecosystem, go far beyond the basics, and be the developer who solves real-world problems, regardless of the language.",

    "My journey began with pure logic in C and C++, moved through the versatility of Python, and currently, I am learning Java with a focus on OOP, while diving deep into Web structure with HTML, CSS, and JavaScript. I also adapt quickly to databases and essential daily tools (like the Office Suite). To me, each new technology is not a burden, but another tool in my toolbox.",

    "I am driven by curiosity, fast learning, and a proactive mindset. Fluent in Portuguese, proficient in technical English, and ready to collaborate, learn from more experienced professionals, and actively contribute to the team's growth."
        ]
    }
};
     

// ==========================================
// 3. EFEITO DE DIGITAÇÃO E IDIOMA
// ==========================================
const IDs = ["paragrafo1", "paragrafo2", "paragrafo3"];
const botaoLang = document.getElementById('lang-toggle');

let idiomaAtual = 'pt'; // Começa em português
let posicaoParagrafo = 0;
let posicaoLetra = 0;
let digitacaoConcluida = false; // Controla se o efeito de digitação já terminou

function digitarTudo() {
    // Se o usuário mudar de idioma enquanto digita ou se já terminou, paramos a digitação manual
    if (digitacaoConcluida) return;

    const listaTextos = dicionario[idiomaAtual].textos;

    if (posicaoParagrafo < listaTextos.length) {
        const paragrafoAtualHTML = document.getElementById(IDs[posicaoParagrafo]);
        const textoAtual = listaTextos[posicaoParagrafo];

        if (posicaoLetra < textoAtual.length) {
            paragrafoAtualHTML.innerHTML += textoAtual.charAt(posicaoLetra);
            posicaoLetra++;
            setTimeout(digitarTudo, 50); // Digitação ligeiramente mais rápida
        } else {
            posicaoParagrafo++;
            posicaoLetra = 0;
            setTimeout(digitarTudo, 300);
        }
    } else {
        // Quando terminar de digitar todas as letras de todos os parágrafos pela primeira vez
        digitacaoConcluida = true;
    }
}

// Função para aplicar a tradução instantaneamente (sem redigitar)
function alternarIdioma() {
    // Inverte o idioma
    if (idiomaAtual === 'pt') {
        idiomaAtual = 'en';
        botaoLang.innerHTML = dicionario.en.botaoLang;
    } else {
        idiomaAtual = 'pt';
        botaoLang.innerHTML = dicionario.pt.botaoLang;
    }

    posicaoLetra = 0;
    posicaoParagrafo = 0;
    digitacaoConcluida = false;

    // Atualiza todos os 3 parágrafos direto na tela com o novo idioma
// 3. LIMPA OS PARÁGRAFOS na tela para não misturar os textos
    for (let i = 0; i < IDs.length; i++) {
        document.getElementById(IDs[i]).innerHTML = "";
    }
}

// Ouvinte do botão de idioma
botaoLang.addEventListener('click', alternarIdioma);

// Inicia a digitação da primeira vez que entra no site
digitarTudo();


// ==========================================
// 3. CÓDIGO DO POP-UP DE E-MAIL
// ==========================================

// Pegamos o botão, a janela do modal e o botão de fechar (X)
const btnEmail = document.getElementById('btn-email');
const modal = document.getElementById('email-modal');
const btnFecharModal = document.getElementById('close-modal');

// Quando clicar no botão de E-mail, abre o pop-up
btnEmail.addEventListener('click', function(evento) {
    evento.preventDefault(); // Impede a página de rolar para o topo ao clicar no '#'
    modal.classList.add('mostrar-modal'); // Ativa o modal
});

// Quando clicar no (X), fecha o pop-up
btnFecharModal.addEventListener('click', function() {
    modal.classList.remove('mostrar-modal');
});

// Se o usuário clicar fora da caixinha branca, também fecha o pop-up
window.addEventListener('click', function(evento) {
    if (evento.target === modal) {
        modal.classList.remove('mostrar-modal');
    }
});