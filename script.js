let perguntas = [
    {
        titulo: '1.O Banco de Dados SQL do Azure inclui um serviço de backup gerenciado?',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },

    {
        titulo: '10. Você deve aplicar regularmente as atualizações do sistema operacional aos bancos de dados SQL do Azure?',
        alternativas: ['SIM','NÃO'],
        correta: 1
    },

    {
        titulo: '5. Você pode usar o Microsoft SQL Server Management Studio (SSMS) para consultar um Data Warehouse do Azure Synapse Analytics?',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },

    {
        titulo: '3.O Banco de Dados SQL do Azure pode usar o Azure Defender.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '16. Se você tiver um banco de dados de plataforma como serviço (PaaS) no Azure, será responsável por aplicar as atualizações do sistema operacional.',
        alternativas: ['SIM','NÃO'],
        correta: 1
    },
    {
        titulo: '8. As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure fornecem opções de dimensionamento configuráveis.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '14. O Microsoft SQL Serve Management Studio (SSMS) permite que os usuários criem e usem notebooks SQL.',
        alternativas: ['SIM','NÃO'],
        correta: 1
    },
    {
        titulo: '18. Se você tiver um banco de dados de plataforma como serviço (PaaS) no Azure, você será responsável pela instalação do mecanismo de banco de dados.',
        alternativas: ['SIM','NÃO'],
        correta: 1
    },
    {
        titulo: '19. As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure exigem menos esforço de instalação e configuração do que as ofertas de banco de dados de infraestrutura como serviço (laaS).',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '21. Todas as ofertas de banco de dados de plataforma como serviço (PaaS) relacional e não relacional no Azure podem ser pausadas para reduzir custos.',
        alternativas: ['SIM','NÃO'],
        correta: 1
    },
    {
        titulo: '12. Você pode usar licenças existentes do Microsoft SQL Server para reduzir o custo dos bancos de dados SQL do Azure.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '7. As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure fornecem alta disponibilidade integrada.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '17. Se você tiver um banco de dados de plataforma como serviço (PaaS) no Azure, os backups serão executados automaticamente.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '11. Você precisa de uma assinatura do Microsoft 365 para criar um banco de dados SQL do Azure.',
        alternativas: ['SIM','NÃO'],
        correta: 1
    },
    {
        titulo: '9. As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure reduzem a sobrecarga administrativa para gerenciar o hardware.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '20. As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure fornecem aos usuários finais a capacidade de controlar e atualizar a versão do sistema operacional.',
        alternativas: ['SIM','NÃO'],
        correta: 1
    },
    {
        titulo: '2. A Base de Dados Azure SQL tem alta disponibilidade incorporada.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '13. O Azure Data Studio pode ser usado para consultar um banco de dados SQL do Azure de um dispositivo que executa o macOS.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '4. Você pode usar o Azure Data Studio para consultar um cluster de big data do Microsoft SQL Server.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '15. O Azure Data Studio pode ser usado para restaurar um banco de dados.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    {
        titulo: '6. Você pode usar o MySQL workbench para consultar o Banco de Dados do Azure para bancos de dados MariaDB.',
        alternativas: ['SIM','NÃO'],
        correta: 0
    },
    
]

let quiz ={
start: function(){
    this.Atualpos = 0;
    this.totalPontos = 0;
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach((element,index) =>{
        element.addEventListener('click', () =>{
            this.checaResposta(index);
        })
    })
    this.atualizaPontos();
    quiz.mostraquestão(perguntas[this.Atualpos]);
},

mostraquestão: function(q){
    this.qatual = q;
    // mostrando o titulo da questão
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;
    // mostrando as alternativas
    let alts = document.querySelectorAll('.alternativa');
    alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
    })

},

Proximaperg: function(){
    this.Atualpos++;
    if(this.Atualpos == perguntas.length){
        this.Atualpos = 0;
    }
},

checaResposta: function(user){

    if(this.qatual.correta == user){
        console.log("Correta")
        this.totalPontos++;
        this.mostraResposta();
    }
    else{
        console.log("Errada")
        this.mostraResposta();
    }
    this.atualizaPontos();
    this.Proximaperg();
    this.mostraquestão(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
    let scoreDiv = document.getElementById('pontos');
    scoreDiv.textContent = `Sua Pontuação é: ${this.totalPontos}`;
},

mostraResposta: function(correto){

    let resultDiv = document.getElementById('result');
    let result = '';
    //a msg exibida
    if(correto == true){
        result = "Resposta Correta!";
    }
    else{
        // obtendo a questão atual
        let pergunta = perguntas[this.Atualpos];
        // obtendo o indice da resposta correta da questao atual
        let cindice = pergunta.correta;
        // obtendo o texto da resposta correta da questão.
        let ctexto = pergunta.alternativas[cindice];
        result = `Incorreto! Resposta Correta: ${ctexto}`;

    }
    resultDiv.textContent = result;

}
    

};

quiz.start();