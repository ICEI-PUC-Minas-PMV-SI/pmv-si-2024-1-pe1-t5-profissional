# Especificações do Projeto

A área da tecnologia sofreu uma expansão que apesar de apresentar diversas trilhas para um estudante iniciante seguir, a ausência de uma orientação organizada baseada e qualificada em suas aptidões pessoais resulta em dúvidas e, por conseguinte, na desistência e desinteresse do estudante. 
Ao notar a persistência do problema, o objetivo do nosso projeto web é direcionar e encaminhar o interessado em tecnologia para o caminho que mais encaixa em seu perfil, além de auxiliar sua jornada por meio de roadmaps e uma contextualização profissional completa da área que será posteriormente identificada.

## Personas

1. Cláudia tem 58 anos, é professora aposentada. Tem interesse na área de programação e, recentemente, ingressou em uma nova faculdade no curso de Ciência da Computação.  Apesar de toda sua ansiedade em busca de conhecimento, não soube qual área deveria priorizar em sua nova jornada. Está buscando um site que redirecione qual área corresponde mais com sua personalidade e quais caminhos pode seguir na programação.

2. Otávio tem 22 anos, é estudante de Engenharia de Software. Desde sua infância foi fascinado por tecnologias e curioso pela perplexidade da computação. Já está inserido no mercado de trabalho há um ano e atuando como Desenvolvedor Mobile. Encontra-se insatisfeito com o ramo que está seguindo e gostaria de trocar de área, focando em uma que cumpra com suas metas e interesses. Está em busca de uma plataforma que o oriente sobre qual área mais se alinha com sua personalidade e quais trajetos pode seguir.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Estudante           | Criar   conta                      | Usar o sistema                         |
|Estudante           | Efetuar login                      | Acessar o sistema                      |
|Estudante           | Fazer o teste                      | Saber qual Roadmap seguir              |
|Estudante           | Ter acesso ao Roadmap              | Saber quais conteúdos estudar          |            
|Estudante           | Acessar o link                     | Ter acesso a vídeo aula                |
|Estudante           | Visualizar ideia de projeto        | Ter sugestão prática                   |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário crie uma conta | ALTA |  
|RF-002| A aplicação deve permitir que o usuário efetue login   | ALTA |  
|RF-003| A aplicação deve permitir que o usuário realize o teste com o intuito de indicar o Roadmap mais adequado a ele | ALTA |  
|RF-004| A aplicação deve permitir que o usuário tenha acesso ao Roadmap   | ALTA |
|RF-005| A aplicação deve permitir que o usuário tenha acesso aos links para ser redirecionados a tutoriais   | ALTA |
|RF-006| A aplicação deve permitir que o usuário possa visualizar ideias de projetos e dicas para aplicar os seus conhecimentos na prática.   | MÉDIA |
|RF-007| A aplicação deve permitir que o usuário efetue logout   | ALTA |  
|RF-008| A aplicação deve emitir um alerta depois de 3 dias que foi iniciado o Roadmap |  BAIXA | 



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva nos navegadores Chrome, Safari, Firefox e Edge, assegurando também responsividade em dispositivos móveis, incluindo smartphones e tablets com Android 8.0 Oreo ou superior, e iOS 13 ou versões mais recentes. | MÉDIA |
|RNF-002| A aplicação deve armazenar as informações de usuário de forma segura em um banco de dados local, utilizando técnicas de criptografia adequadas para proteger as credenciais e garantir a confidencialidade dos dados. | ALTA |
|RNF-003| A aplicação deve implementar políticas de controle de acesso rigorosas, garantindo que apenas usuários autenticados tenham permissão para acessar recursos específicos, visando prevenir acessos não autorizados e assegurar a integridade dos dados. | ALTA |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
