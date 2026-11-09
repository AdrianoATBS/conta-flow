# ContaFlow

**Interface web para gerenciamento de usuários integrada a uma API REST desenvolvida por mim.**

## Preview

<!-- Adicione aqui as capturas de tela do projeto -->
<!-- Exemplo: ![ContaFlow - Painel](./public/screenshots/painel.png) -->

## Descrição

O **ContaFlow** é uma aplicação frontend desenvolvida para fornecer uma interface visual à minha própria API de Gerenciamento de Usuários.

O projeto surgiu com o objetivo de colocar em prática os conhecimentos adquiridos no desenvolvimento de APIs REST e dar continuidade ao projeto de backend, criando uma aplicação capaz de consumir seus recursos e oferecer uma experiência de utilização por meio de uma interface web.

A aplicação permite que os usuários criem uma conta, realizem login e gerenciem suas informações pessoais, incluindo a atualização de dados, desativação, reativação e exclusão da conta.

Mais do que desenvolver uma interface, o ContaFlow representa uma oportunidade de trabalhar com as duas partes de uma aplicação: **desenvolvimento de uma API própria e sua integração com um frontend.**

## Funcionalidades

- [x] Cadastro de usuários.
- [x] Login e autenticação de usuários.
- [x] Consulta das informações do usuário autenticado.
- [x] Atualização do nome do usuário.
- [x] Atualização do endereço de e-mail.
- [x] Desativação da conta.
- [x] Reativação da conta.
- [x] Exclusão da conta.
- [x] Visualização das informações do perfil.
- [x] Interface para gerenciamento das configurações da conta.

## Stack Tecnológica

As tecnologias utilizadas no desenvolvimento foram:

| Tecnologia | Aplicação |
|---|---|
| React | Construção de interfaces e componentes reutilizáveis. |
| Next.js | Framework utilizado para estruturação da aplicação e gerenciamento de rotas. |
| TypeScript | Tipagem estática e maior segurança durante o desenvolvimento. |
| Tailwind CSS | Estilização e construção de layouts responsivos. |
| React Icons | Utilização de ícones na interface. |
| Fetch API | Comunicação com a API REST. |

## Decisões Técnicas

Durante o desenvolvimento, algumas decisões foram tomadas para melhorar a organização, a manutenção e a evolução da aplicação.

### Feature-Based Architecture

A aplicação foi organizada utilizando uma arquitetura baseada em funcionalidades (*Feature-Based*), agrupando componentes, hooks, serviços e tipos de acordo com suas respectivas responsabilidades.

Essa abordagem foi escolhida para manter o código relacionado a uma mesma funcionalidade próximo, facilitando a manutenção e a evolução do projeto.

### Shared Components

Foi criada uma estrutura `shared` para armazenar componentes e recursos que podem ser reutilizados em diferentes partes da aplicação.

Essa separação evita duplicação de código e facilita a padronização visual.

### Componentização

A interface foi dividida em componentes menores, cada um responsável por uma parte específica da aplicação.

Essa decisão facilita a reutilização, a manutenção e a organização do código, além de permitir que diferentes partes da interface evoluam de maneira independente.

### Custom Hooks

Foram utilizados Hooks personalizados para organizar a lógica relacionada às funcionalidades, separando responsabilidades da interface e evitando concentrar toda a lógica dentro dos componentes.

### Consumo centralizado da API

Foi criado um mecanismo de comunicação com a API utilizando a Fetch API, centralizando a URL base, o envio de requisições e o tratamento de respostas.

O mecanismo também permite incluir o token JWT no cabeçalho `Authorization` das requisições autenticadas.

### Design responsivo

A interface foi desenvolvida considerando diferentes tamanhos de tela, utilizando uma abordagem Mobile First e breakpoints do Tailwind CSS para adaptar a apresentação em dispositivos maiores.

## Arquitetura

O projeto utiliza uma organização baseada em funcionalidades (*Feature-Based Architecture*), complementada por uma estrutura compartilhada (`shared`).

A pasta `features` concentra as funcionalidades da aplicação. Cada funcionalidade possui seus próprios componentes, hooks, serviços, tipos e demais recursos necessários.

A pasta `shared` concentra componentes e recursos reutilizáveis entre diferentes funcionalidades.

Essa organização busca manter as responsabilidades bem definidas e reduzir o acoplamento entre as funcionalidades.

## Estrutura de Pastas

```text
src/
├── app/
│   └── (rotas)/
│       ├── autenticacao/
│       └── configuracoes/
│
├── features/
│   ├── autenticacao/
│   │   ├── cadastro/
│   │   ├── login/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── schema/
│   │   ├── services/
│   │   └── types/
│   │
│   └── painel/
│       ├── components/
│       ├── configuracoesPage/
│       │   └── components/
│       ├── const/
│       ├── hooks/
│       ├── painelPage/
│       │   └── components/
│       ├── services/
│       ├── types/
│       └── utils/
│
├── lib/
│   ├── api.ts
│   └── fetcher.ts
│
└── shared/
    ├── components/
    │   ├── feedback/
    │   ├── layout/
    │   └── ui/
    ├── constants/
    ├── hooks/
    ├── types/
    └── utils/
```

**Responsabilidade das principais pastas:**

- `app`: organização das rotas e estrutura de entrada da aplicação.
- `features`: funcionalidades e seus respectivos recursos.
- `lib`: configurações e recursos de integração, como a comunicação com a API.
- `shared`: componentes, hooks, tipos e utilitários compartilhados.

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- API Gerenciador de Usuários configurada e em execução.

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO_FRONTEND
```

### 2. Acesse a pasta do projeto

```bash
cd conta-flow
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure a URL da API

No arquivo `src/lib/api.ts`, configure o endereço da API:

```typescript
export const BASE_URL = "https://localhost:7212";
```

Ajuste o endereço conforme a configuração do ambiente em que a API estiver sendo executada.

### 5. Execute a aplicação

```bash
npm run dev
```

### 6. Acesse no navegador

```text
http://localhost:3000
```

**Importante:** a API também precisa estar em execução para que as funcionalidades de autenticação e gerenciamento de usuários funcionem corretamente.

## API utilizada

Um dos principais diferenciais do ContaFlow é utilizar uma API REST desenvolvida por mim, em um projeto anterior de backend.

**Repositório da API:** [Gerenciador de Usuários](https://github.com/AdrianoATBS/gerenciador-de-usuario-api)

A API foi desenvolvida utilizando C# e .NET 8, com autenticação JWT, Entity Framework Core e SQL Server.

O frontend consome os endpoints disponibilizados pela API para realizar as operações de cadastro, autenticação e gerenciamento de usuários.

### Endpoints utilizados

| Método | Endpoint | Descrição |
|---|---|---|
| POST | `/api/usuarios` | Cadastro de usuário. |
| POST | `/api/usuarios/login` | Autenticação do usuário. |
| GET | `/api/usuarios/{id}` | Consulta de usuário por identificador. |
| GET | `/api/usuarios/me` | Consulta dos dados do usuário autenticado. |
| PUT | `/api/usuarios/nome` | Atualização do nome. |
| PUT | `/api/usuarios/email` | Atualização do e-mail. |
| PUT | `/api/usuarios/desativar` | Desativação da conta autenticada. |
| PUT | `/api/usuarios/reativar` | Reativação da conta autenticada. |
| DELETE | `/api/usuarios/deletar` | Exclusão da conta autenticada. |



## Desafios encontrados

Durante o desenvolvimento do ContaFlow, alguns dos principais desafios foram:

- Integrar o frontend com uma API desenvolvida anteriormente, compreendendo o fluxo de requisições, respostas e autenticação.
- Implementar o envio e a utilização do token JWT nas requisições autenticadas.
- Organizar a aplicação utilizando Feature-Based Architecture e componentes compartilhados.
- Separar a lógica das funcionalidades da estrutura visual por meio de Hooks personalizados.
- Trabalhar com tipagem estática utilizando TypeScript durante o consumo dos dados da API.
- Construir uma interface responsiva, adaptando a organização dos componentes para diferentes tamanhos de tela.


## Objetivos de aprendizado

O desenvolvimento deste projeto permitiu colocar em prática e aprofundar conhecimentos em:

- React Hooks e Custom Hooks.
- Next.js App Router.
- Componentização e reutilização de código.
- Consumo de APIs REST.
- TypeScript.
- Gerenciamento de estado.
- Autenticação JWT no frontend.
- Organização de projetos utilizando Feature-Based Architecture.
- Desenvolvimento de interfaces responsivas.
- Separação de responsabilidades e boas práticas de desenvolvimento frontend.

## Portfólio

No meu portfólio você encontrará um vídeo demonstrativo desta aplicação, além de outros projetos desenvolvidos por mim.

**Portfólio:** [Adriano ATBS](https://adriano-atbs.vercel.app/)