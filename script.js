function showScreen(id){
    document.querySelectorAll('.screen')
        .forEach(screen => screen.classList.remove('active'));

    document
        .getElementById(id)
        .classList.add('active');
}

function buscarCreators(){

    const produto =
        document.getElementById('produto').value;

    const categoria =
        document.getElementById('categoria').value;

    const publico =
        document.getElementById('publico').value;

    if(!produto || !categoria || !publico){
        alert("Preencha todos os campos.");
        return;
    }

    let creators = [];

    switch(categoria){

        case "Tecnologia":
            creators = [
                { nome: "TechBR", seguidores: "1.2M seguidores", score: "94%" },
                { nome: "DevMinutos", seguidores: "890K seguidores", score: "89%" },
                { nome: "Código Fácil", seguidores: "650K seguidores", score: "86%" }
            ];
            break;

        case "Educação":
            creators = [
                { nome: "Professor Online", seguidores: "1.1M seguidores", score: "95%" },
                { nome: "Aprenda Mais", seguidores: "870K seguidores", score: "90%" },
                { nome: "Educa Brasil", seguidores: "640K seguidores", score: "85%" }
            ];
            break;

        case "Marketing":
            creators = [
                { nome: "Marketing", seguidores: "980K seguidores", score: "93%" },
                { nome: "Growth", seguidores: "810K seguidores", score: "88%" },
                { nome: "VendaMais", seguidores: "590K seguidores", score: "84%" }
            ];
            break;

        case "Games":
            creators = [
                { nome: "GM", seguidores: "2.1M seguidores", score: "96%" },
                { nome: "Level", seguidores: "1.4M seguidores", score: "91%" },
                { nome: "PBR", seguidores: "820K seguidores", score: "87%" }
            ];
            break;

        case "Finanças":
            creators = [
                { nome: "Investidor", seguidores: "1.3M seguidores", score: "95%" },
                { nome: "Dinheirão", seguidores: "920K seguidores", score: "90%" },
                { nome: "Finanças Simples", seguidores: "680K seguidores", score: "85%" }
            ];
            break;

        default:
            creators = [
                { nome: "Creator", seguidores: "1.2M seguidores", score: "94%" },
                { nome: "InfluenceHub", seguidores: "890K seguidores", score: "89%" },
                { nome: "CreatorPlus", seguidores: "650K seguidores", score: "86%" }
            ];
    }

    document.getElementById('categoriaEscolhida').innerText = categoria;

    const cards = document.querySelectorAll('.creator');

    cards.forEach((card, index) => {
        if(creators[index]){
            card.querySelector('h3').innerText = creators[index].nome;
            card.querySelector('small').innerText =
                `${creators[index].seguidores} • ${categoria}`;
            card.querySelector('.score').innerText =
                creators[index].score;
        }
    });
    showScreen('resultado');
}
