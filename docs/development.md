# Programação de Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| A aplicação deve permitir a navegação para página de fazer login | Natã | index.html |
|RF-002| A aplicação deve permitir a navegação para página de fazer cadastro | Natã | index.html |
|RF-003| A aplicação deve permitir a navegação para sessão "quem somos" | Natã | index.html |
|RF-004| A aplicação deve permitir a navegação para o envio de email no footer | Natã | index.html |
|RF-005| A aplicação deve permitir a navegação para o LinkedIn de cada integrante  | Natã | index.html |
|RF-006| A aplicação deve permitir a criação de usuário por Nome,Email e Senha | Lucas | criar-cadastro.html |
|RF-007| A aplicação deve permitir a navegação para página de fazer login | Lucas | criar-cadastro.html |
|RF-010| A aplicação deve permitir a navegação para o envio de email no footer | Lucas | criar-cadastro.html |
|RF-011| A aplicação deve permitir a inserção de login por Email e Senha | João | fazer-log.html |
|RF-012| A aplicação deve permitir a navegação para página de fazer cadastro  | Lucas | fazer-log.html |
|RF-013| A aplicação deve permitir a navegação para o envio de email no footer | Lucas | fazer-log.html |
|RF-014| A aplicação deve permitir a navegação para primeira página deslogada  | Leandra | usu-logado.html |
|RF-015| A aplicação deve permitir a navegação para página de cada roadmap (front-end, back-end e data-science) | Leandra | usu-logado.html |
|RF-016| A aplicação deve permitir a navegação para o envio de email no footer | Leandra | usu-logado.html |
|RF-017| A aplicação deve permitir a navegação para o a página do quiz | Leandra | usu-logado.html |
|RF-018| A aplicação deve permitir a seleção entre três opções das oito perguntas  | Ana | quiz.html |
|RF-019| A aplicação deve permitir a navegação para primeira página deslogada  | Ana | quiz.html |
|RF-020| A aplicação deve permitir a navegação para o envio de email no footer | Ana | quiz.html |
|RF-021| A aplicação deve permitir a navegação para a página de roadmap sugerido após o envio de todas respostas | Ana | quiz.html |
|RF-019| A aplicação deve permitir a navegação para primeira página deslogada  | Anna | map-dados.html |
|RF-020| A aplicação deve permitir a navegação para o envio de email no footer | Anna | map-dados.html |
|RF-021| A aplicação deve permitir a navegação para a playlist ou vídeo aula indicada ao usuário | Anna | map-dados.html |
|RF-022| A aplicação deve permitir a navegação para primeira página deslogada  | Natã | map-back.html |
|RF-023| A aplicação deve permitir a navegação para o envio de email no footer | Natã | map-back.html |
|RF-024| A aplicação deve permitir a navegação para a playlist ou vídeo aula indicada ao usuário |  Natã | map-back.html |
|RF-025| A aplicação deve permitir a navegação para primeira página deslogada  | Leandra | map-front.html |
|RF-026| A aplicação deve permitir a navegação para o envio de email no footer | Leandra | map-front.html |
|RF-027| A aplicação deve permitir a navegação para a playlist ou vídeo aula indicada ao usuário | Leandra | map-front.html |
|RF-028| A aplicação deve permitir que o usuário edite e faça a alteração dos seus dados | João| crud.html |















## Descrição das estruturas:

## Quiz
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | INT  | Identificador de página          | Primeira  parte do quiz                                          |
| Pergunta         | String            | Pergunta do quiz                        | Como você prefere abordar a resolução de problemas?                                 |
| Alternativa 1     | Char (1)            | Resposta da pergunta                      | Organizando e gerenciando as informações para eficiência e fácil acesso (Administração de Banco de Dados)
| Alternativa 2     | Char (1)            | Resposta da pergunta                      | Desenvolvendo funcionalidades complexas para garantir o funcionamento perfeito (Desenvolvimento Back-End)     |
| Alternativa 3     | Char (1)            | Resposta da pergunta                      | Criando a aparência e a interatividade de websites ou aplicativos (Desenvolvimento Front-End)     |

## Cadastro de usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | String  | Nome do estudante        | Marcos Paulo                                       |
| Email         | String            | Endereço de e-mail do usuário                      | marcos.paulo@gmail.com                                 |
| Senhar     | Varchar (25)            | Senha para criação e acesso de login                   | 1234Senha                                   |                             

