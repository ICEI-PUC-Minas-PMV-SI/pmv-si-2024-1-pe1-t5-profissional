# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT01 - Criar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa nome, e-mail, senha e clica no botão "Cadastrar" <br> 2) A aplicação verifica se os dados são válidos e informa ao usuário.
**Requisitos associados** | RF-006
**Resultado esperado** | Criação de vadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT02 - Acessar conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário informa Email, Senha e clica no botão "Entrar" <br> 2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam. <br> 
**Requisitos associados** | RF-011
**Resultado esperado** | Usuário logado.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Alterar dados da conta**
 :--------------: | ------------
**Procedimento**  | 1) Usuário logado clicará em "Editar Usuário" <br> 2) A aplicação verifica as alterações e edita os dados conforme informados. <br> 
**Requisitos associados** | RF-028
**Resultado esperado** | Usuário editado.
**Dados de entrada** | Inserção de dados válidos nas edições.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Acessar roadmap**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica no botão "Saiba Mais" do roadmap de sua correspondência <br> 2) A aplicação verifica e o encaminha para o roadmap correspondente. <br> 
**Requisitos associados** | RF-015
**Resultado esperado** | Visualização do roadmap selecionado.
**Dados de entrada** | Solicitação de visualização do roadmap selecionado.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT05 - Acessar quiz**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica no botão "Acessar Quiz"  <br> 2) A aplicação verifica e o encaminha para o quiz. <br> 
**Requisitos associados** | RF-017
**Resultado esperado** | Visualização do quiz.
**Dados de entrada** | Solicitação de visualização do quiz.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT06 - Responder quiz e visuzalizar sugestão**
 :--------------: | ------------
**Procedimento**  | 1) Usuário visualiza oito perguntas que apareceram em recorrência de suas respostas  <br> 2) Usuário seleciona uma, duas ou três das opções de resposta.  <br> 3)  A aplicação verifica suas respostas e o fornece a sugestão de roadmap. <br>
**Requisitos associados** | RF-018
**Resultado esperado** | Sugestão de roadmap.
**Dados de entrada** | Respostas do quiz.
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT07 - Acessar conteúdos do roadmap**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clicar no conteúdo que é de seu interesse  <br> 2) A aplicação o encaminha para o material do conteúdo correspondente  <br> 
**Requisitos associados** | RF-027
**Resultado esperado** | Visualização do conteúdo.
**Dados de entrada** | Solicitação de visualização do conteúdo
**Resultado obtido** | Sucesso

## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*CT01 - Criar conta*                                         |
|---|---|
|Requisito Associado | RF-006 - A aplicação deve permitir a criação de usuário por Nome,Email e Senha|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!Aqv2merruqSDgQ9SDmZxVexgScds

|*Caso de Teste*                                 |*CT02 - Acessar conta*                                        |
|---|---|
|Requisito Associado | RF-011 - A aplicação deve permitir a inserção de login por Email e Senha|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!Aqv2merruqSDgQ4CPF_AINvL5uei 

|*Caso de Teste*                                 |*CT03 - Editar Cadastro*                                        |
|---|---|
|Requisito Associado | RF-028 - A aplicação deve permitir que o usuário edite e faça a alteração dos seus dados|
|Link do vídeo do teste realizado: |  (Coloque o link do vídeo aqui)| 

|*Caso de Teste*                                 |*CT04 - Acessar roadmap*                                        |
|---|---|
|Requisito Associado | RF-015 - A aplicação deve permitir a navegação para página de cada roadmap (front-end, back-end e data-science)|
|Link do vídeo do teste realizado: |https://1drv.ms/v/s!Aqv2merruqSDgQ3EpQyXiV-FVVey?e=zAqaOz| 

|*Caso de Teste*                                 |*CT05 - Editar Cadastro*                                        |
|---|---|
|Requisito Associado | RF-028 - A aplicação deve permitir que o usuário edite e faça a alteração dos seus dados|
|Link do vídeo do teste realizado: |  (Coloque o link do vídeo aqui)| 

|*Caso de Teste*                                 |*CT06 - Acessar quiz*                                        |
|---|---|
|Requisito Associado | RF-017 - A aplicação deve permitir a navegação para o a página do quiz|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!Aqv2merruqSDgQwaNndlQ1sMq202?e=E5crHT

|*Caso de Teste*                                 |*CT05 - Responder quiz e visuzalizar sugestão*                                        |
|---|---|
|Requisito Associado | RF-018 -A aplicação deve permitir a seleção entre três opções das oito perguntas|
|Link do vídeo do teste realizado: |https://1drv.ms/v/s!Aqv2merruqSDgRLWiiRXvqyvCGLd| 

|*Caso de Teste*                                 |*CT05 - Acessar conteúdos do roadmap*                                        |
|---|---|
|Requisito Associado | RF-027 -A aplicação deve permitir a navegação para a playlist ou vídeo aula indicada ao usuário|
|Link do vídeo do teste realizado: | [https://1drv.ms/v/s!Aqv2merruqSDgRNpiY-FwDx6T5cV| 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja acessar diretamente o roadmap. Encontre o botão "Saiba Mais" e acesse. |
| 2             | Você é uma pessoa que deseja responder o quiz para receber uma indicação de roadmap Encontre o quiz e inicie o questionário. |



## Registro de Testes de Usabilidade

Cenário 2: Você é uma pessoa que deseja acessar diretamente o roadmap. Encontre o botão "Saiba Mais" e acesse.

| Usuário | Taxa de sucesso | Idade                | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|----------------------|---------------------------------|
| 1       | SIM             | 27                   | 5                    | 10.48 segundos                  |
| 2       | SIM             | 45                   | 5                    | 25.11 segundos                  |
| 3       | SIM             | 54                   | 5                    | 29.19 segundos                  |
|  |  |  |  |
| **Média**     | 100%      | 42                   | 5                    | 21.69 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 23 |                  | 6.23 segundos                   |


    Comentários dos usuários: "Muito bacana".


Cenário 2: Você é uma pessoa que deseja responder o quiz. Encontre o quiz e inicie o questionário.

| Usuário | Taxa de sucesso | Idade                | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|----------------------|---------------------------------|
| 1       | SIM             | 27                   | 5                    | 12.46 segundos                  |
| 2       | SIM             | 45                   | 5                    | 28.12 segundos                  |
| 3       | SIM             | 54                   | 5                    | 32.47 segundos                  |
|  |  |  |  |  
| **Média**     | 100%      |  42                  | 5                    | 24.35 segundos                  |
| **Tempo para conclusão pelo especialista** | SIM | 19 |                  | 7.57 segundos                   |


    Comentários dos usuários: A possibilidade de responder um quiz que permite um direcionamento para determinada área
    de estudo foi genial.

## Avaliação dos Testes de Usabilidade

Com base nos resultados obtidos, a aplicação web mostrou-se eficaz na interação com os usuários, com todos os cenários propostos sendo concluídos com sucesso.

Os usuários expressaram alta satisfação ao completar as tarefas, embora aqueles com maior idade tenham encontrado algumas dificuldades. Apesar disso, as avaliações desse grupo foram predominantemente positivas, com notas variando de 3 (regular) a 5 (ótimo).

Houve uma diferença notável no tempo de conclusão das tarefas entre os usuários comuns e os desenvolvedores. Essa diferença é esperada, já que os desenvolvedores possuem um conhecimento detalhado da interface, dos elementos e da organização das páginas.

Em resumo, o projeto recebeu avaliações muito positivas nos testes e no feedback dos usuários, mas ainda há espaço para melhorias, especialmente para torná-lo mais acessível a usuários com deficiência visual.


