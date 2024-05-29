# Arquitetura de pasta MVVM

project-root

````
src
    │
    ├───presentation/
    │   ├───views/
    │   ├───view-models/
    │   └───components/
        |---routes/
        |
    │
    ├───core/
    │   ├───assets/
    │   ├───common/
    │   └───utils/
        |───config/
        |---domain/
        | interface
    │
    └───data/
        ├───repositories/
        ├───model/
        └───libs/

````

## Descrição dos Diretórios

````
  src/presentation/

  1 - Contém tudo relacionado à apresentação da UI, incluindo rotas, views, view-models e componentes de UI.
      * routes: Responsável por toda interação de navegação dentro do app. 
      * views: Componentes de tela (páginas) que utilizam os viewmodels para obter dados.
      * view-models: Lógica de apresentação que interage com os modelos e atualiza as views.
      * components/: Componentes reutilizáveis de UI.
  

  src/core/

  2 - Contém a lógica central da aplicação, como modelos, serviços e utilitários.
      * models: Definição dos modelos de dados.
      * config: Configuração sobre o projetos (chave-api, variaveis globais).
      * common: Contém....
      * assets: Contém images e icones para utilizar na aplicação.
      * domain: Resposável por toda a regra de negocio da aplicação.
      * styles: Responsácel por gerenciar a estilização da aplicação.
      * utils: Contém funções utilitárias e helpers.


    src/data/

  3 - Responsável por gerenciar dados, como repositórios, fontes de dados e comunicação com a rede externa como (API).
      * repositories: Abstrações para acesso aos dados, utilizando um client (axios ou fetch).
      * client: Contém as comunicação com serviços externo para conectar a um banco de dados online ou local.
      * libs: Contém as ferramentas utilizadas na aplicação.
      * interface: Contém definição abstrata que especifica um conjunto de métodos ou propriedades que uma classe ou func deve implementar.

````
