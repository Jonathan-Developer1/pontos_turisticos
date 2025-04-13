let info = [
    {
        "id": 1,
        "imagem": "imgs/praias/alter-do-chao-para.webp",
        "titulo": "Alter do Chão (Pará)",
        "descricao": "Alter do Chão é conhecida como o “Caribe da Amazônia” e foi considerada pelo jornal “The Guardian” a praia mais bonita do Brasil. Conhecida como o 'Caribe Amazônico', Alter do Chão é um verdadeiro tesouro escondido no coração da Amazônia. Localizada às margens do Rio Tapajós, suas águas cristalinas e mornas contrastam com a vegetação exuberante da floresta. Durante a seca, bancos de areia surgem, formando verdadeiras 'praias fluviais' paradisíacas. Um destino ideal para quem quer curtir natureza, cultura ribeirinha e uma vibe tranquila."
    },
    {
        "id": 2,
        "imagem": "imgs/praias/Jericoacoara-ceara.webp",
        "titulo": "Jericoacoara (Ceará)",
        "descricao": "Jericoacoara, carinhosamente conhecida como Jeri, é uma pérola no litoral do Ceará, sinônimo de beleza e encantamento natural. Situada no meio de dunas e acessível apenas por veículos 4x4, encanta com sua paisagem exótica, céu estrelado, pôr do sol na Duna do Pôr do Sol, lagoas de água doce como a do Paraíso e do Coração, além do clima rústico e acolhedor da vila. Ideal para kitesurf, windsurf e conexão com a natureza."
    },
    {
        "id": 3,
        "imagem": "imgs/praias/praia-do-espelho-bahia.jpg",
        "titulo": "Praia do Espelho (Bahia)",
        "descricao": "A Praia do Espelho, famosa pelas suas piscinas naturais que refletem o céu azul como espelhos, é uma das melhores praias de Trancoso. Com falésias coloridas, coqueirais, águas calmas e piscinas naturais que espelham o céu (daí o nome), ela proporciona uma experiência de paz e contemplação. O local é mais isolado e preservado, ótimo para quem busca exclusividade. Dica: consulte a tábua da maré para aproveitar melhor as piscinas naturais!"
    },
    {
        "id": 4,
        "imagem": "imgs/montanhas/pico-agudo.jpg",
        "titulo": "Pico Agudo",
        "descricao": "Rampa para Voo Livre, Pico Agudo localizado na cidade de Santo Antônio do Pinhal, o visitante curte a natureza, se deslumbra com a vista e ainda tem a possibilidade de fazer um voo duplo de paraglider ou parapente. Situado em Santo Antônio do Pinhal, o Pico Agudo é um dos pontos mais altos do estado de São Paulo. O visual panorâmico da Serra da Mantiqueira é de tirar o fôlego! Além disso, é um dos melhores pontos do Brasil para a prática de voo livre, com vistas de até 1800 metros de altitude!"
    },
    {
        "id": 5,
        "imagem": "imgs/montanhas/pico-de-itapeva.jpg",
        "titulo": "Pico do Jaraguá",
        "descricao": "Se você está em busca de uma experiência emocionante e capaz de te deixar sem fôlego, que tal fazer uma visita ao Pico do Itapeva, na região da nossa Campos do Jordão? Este pode ser o passeio ideal para fazer durante sua viagem, seja ela entre amigos ou até mesmo com a sua outra cara-metade! Com fácil acesso, ele oferece uma das vistas mais amplas da Serra da Mantiqueira, podendo ver até 15 cidades em dias limpos. O local ainda conta com lavandas floridas que embelezam ainda mais o cenário. Ótimo para fotos e piqueniques!"
    },
    {
        "id": 6,
        "imagem": "imgs/montanhas/Serra_do_Mar.jpg",
        "titulo": "Serra do Mar",
        "descricao": "A Serra do Mar é uma região montanhosa que se estende por aproximadamente 1.500 quilômetros, ao longo do litoral do Sudeste e Sul do Brasil, de Santa Catarina ao Rio de Janeiro. Essa cadeia montanhosa abriga uma das maiores áreas contínuas de Mata Atlântica preservada no país. É uma região riquíssima em biodiversidade e trilhas ecológicas, com parques estaduais e nacionais como o Parque da Serra do Mar (SP) e o Parque Nacional da Serra dos Órgãos (RJ). Excelente para ecoturismo!"
    },
    {
        "id": 7,
        "imagem": "imgs/mergulho/naufrágios-em-Recife.jpg",
        "titulo": "Naufrágios em Recife (PE)",
        "descricao": "Conhecida como a Veneza Brasileira desde que o escritor francês Albert Camus esteve por lá, Recife é um dos destinos preferidos dos mergulhadores. O litoral guarda mais de 100 naufrágios, o que lhe rendeu o título de 'Capital Nacional do Mergulho em Naufrágios'. Essas embarcações, afundadas naturalmente ou propositalmente, viraram recifes artificiais e hoje abrigam rica vida marinha. É possível encontrar tartarugas, arraias, corais e até tubarões-lixa. Imperdível para quem ama mergulho técnico!"
    },
    {
        "id": 8,
        "imagem": "imgs/mergulho/arraial-do-cabo.png",
        "titulo": "Arraial do Cabo (RJ)",
        "descricao": "Pode ser até clichê, mas Arraial do Cabo faz mesmo jus à fama de capital brasileira do mergulho. Águas incrivelmente cristalinas e tons de azul que mais parecem Caribe! Arraial é famosa pelas suas praias deslumbrantes como a do Forno, Prainhas do Pontal do Atalaia e Praia do Farol. É um dos melhores pontos de mergulho do Brasil, com vida marinha vibrante. Perfeito para snorkeling, passeios de barco e curtir aquele visual cinematográfico!"
    },
    {
        "id": 9,
        "imagem": "imgs/mergulho/bombinhas-mergulho.png",
        "titulo": "Bombinhas (SC)",
        "descricao": "A beleza é exuberante na única península do Sul do país. Mesmo sendo a menor cidade de Santa Catarina, Bombinhas se destaca pelo litoral recortado, que dá origem a inúmeras praias, inclusive algumas das mais belas do país. A cidade oferece praias para todos os gostos: desde a tranquila Sepultura até a movimentada Bombas. A prática de mergulho, principalmente na Reserva Biológica Marinha do Arvoredo, é muito procurada. As trilhas, águas cristalinas e costões rochosos formam um paraíso no Sul do Brasil."
    }
];


var parametros = new URLSearchParams(location.search);
var id = parseInt(parametros.get('id'));
var detalhes = info.find(function (elem) {
    return elem.id === id;  
});

if (detalhes) {
    document.getElementById("titulo").innerText = detalhes.titulo;
    document.getElementById("imagem").src = detalhes.imagem;
    document.getElementById("imagem").alt = detalhes.titulo;
    document.getElementById("descricao").innerText = detalhes.descricao
} else {
    document.getElementById("titulo").innerText = "Não disponível";
    document.getElementById("imagem").src = "";
    document.getElementById("imagem").alt = "Imagem não disponível";
    document.getElementById("descricao").innerText = "Não disponível";
}
