# Quiz Alura — [Aulas](https://www.alura.com.br/imersao-react-next-js/aula01-react-nextjs-aluraquiz)

## Tarefas
- [ ] Crie seu próprio tema festivo, por exemplo de Halloween
- [x] Utilize o protótipo do Figma (link abaixo) e crie o CSS "do zero"
- [x] Desafio do Paulo: Implemente a meta tag og:image utilizando a mesma imagem do background
- [x] Desafio da Ju: Pensar em como passar da página inicial para a página de quiz
- [x] Configurar as regras de linting no arquivo ``.eslintrc``
- [x] Implementar o input e o botão com styled-components, como no protótipo do Figma
- [x] Pegar o nome passado no query param da URL e exibir na tela
- [x] Reutilizar o componente Widget para fazer a tela /quiz
- [x] Investigar os imports com ``{ }`` e a estrutura de tupla ``([ , ])``
  * Esse tipo de importação é conhecida como nomeada (named import), fazendo com que tudo aquilo que tem o que está dentro do ``{}`` seja importado
- [ ] Fazer a seleção das alternativas funcionar (no modo easy com alert() ou no modo hard com mudança de state)
- [x] Traga suas questões de JavaScript, de Java, de PHP ou do que mais quiser e vamos trocar conhecimento!
- [x] Comece a pensar na lógica por trás do quiz. Contagem de pontos? Como e quando finalizar o jogo? Quem ganha ou perde?
- [ ] Desafio do Paulo: Resolver a contagem de pontos utilizando um bitset (ou bitmap)!
- [x] Mais um desafio do Paulo: Publique seu quiz na Vercel e faça barulho nas redes, tageando o @rauchg!
- [ ] Desafio da Ju: Pegue o query ``param name`` e exiba o nome da pessoa que está jogando na tela de resultados. Dica: o Next.js tem uma lib pra te ajudar nisso!
- [ ] Desafio do Paulo: Refatorar a expressão regular que usamos para customizar os links dos quizes externos nos botões, para que funcionem em todos os corner cases.
- [x] Desafio do Soltinho: Reaproveitar os componentes da página de quiz para montar a página do quiz externo.
- [ ] Desafio de Ju: Deixar os botões para os quizes da galera desabilitados enquanto o usuário não preencher o nome no input.


# Aprendizado
* Iniciar um projeto com o **boilerplate** do React com **Next.js** e **styled-components**;
* Criar componentes React usando styled-components;
* Implementar tema (theme) para a interface;
* Fornecer as informações de tema e dados do quiz através de uma base de dados "mockada";
* Usaremos o Next.js para criar a tag ``<head>`` e as meta-infos necessárias;
* Faremos a publicação (deploy) na Vercel;
* Instalar e rodar o Eslint, biblioteca de linting para JS;
* Entender o que é uma SPA;
* Criar componentes complexos com styled-components;
* Utilizar props com os componentes;
* Capturar de eventos em formulários (como clique);
* Gerenciar estado (state) de componentes com hooks;
* Passar dados em URLs através de query params;
* Utilizar next/router para implementação de rotas;
* Criar o componente ``<Input>``;
* Trabalhar com as propriedades (props) dos componentes;
* Garantir a tipagem das propriedades com a biblioteca prop-types;
* Criar a página de quiz e seus componentes;
* Criar componente ``<LoadingWidget>`` a partir do ``<Widget>``;
* Exibir as perguntas e alternativas na tela a partir do arquivo db.json;
* Criar formulários para gerenciar as alternativas;
* Trabalhar com os estados (states) da página de quiz para alternar carregamento, questões e resultado;
* Entender o ciclo de vida dos componentes do React;
* utilizar ``useEffects()`` para adicionar ações ao componente da tela de quiz;
* Criar o componente ``<Input>``;
* Desenvolver o algoritmo de seleção de alternativa para cada pergunta;
* Statements x expressões no React;
* Ver mais sobre props do React e a prop key;
* Manejo de estados com a renderização de várias instâncias de um mesmo componente;
* Lógica da seleção de alternativas, habilitação do botão e troca de pergunta (utilizando estados, atributos do HTML e índices da array);
* Lógica da contagem de pontos com alteração de estado;
* Atualização dos pontos com o ciclo de atualização do React;
* Exibir a tela de resultados com a soma dos pontos e as alternativas escolhidas ao final das perguntas;
* Usar atributo ``data-[]`` para passar informações de estilo para o componente das alternativas;
* Criar lambda servers com Next.js para retornar endpoints;
* Passar configurações de CORS para poder acessar quizes externos;
* Listar endereços dos quizes da galera na página principal, a partir do arquivo db.json;
* Reaproveitar o componente de Widget;
* Acrescentar botões para os quizes da galera;
* Criar rotas com parâmetros dinâmicos com Next.js;
* Usar métodos de otimização por SSR para criar páginas dinâmicas;
* Trabalhar com promessas utilizando a Fetch API e Promises;
* Organizar o projeto com a pasta screens para definir leiautes de páginas;
* Passar para a página de quiz as props dos quizes externos;
* Usar o componente ``<Link>`` do Next.js para fazer a navegação no formato SPA;
* Usar o Framer Motion para criar animações de entrada para os widgets;