O objetivo deste projeto é aplicar boas práticas de automação de testes, validando funcionalidades da aplicação através de testes **End-to-End (E2E)** e testes de **API**.

## 📋 Cenários automatizados

### 🔐 Login

- Login com credenciais válidas;
- Login com e-mail inválido;
- Login com senha inválida;
- Validação de mensagens de erro;
- Validação do comportamento após login;
- Testes da API de login.

### 🔎 Busca

- Busca por produto existente;
- Validação dos resultados apresentados.

### 🛒 Carrinho

- Adicionar produto ao carrinho;
- Validar produto adicionado;

## 🔌 Testes de API

Também são realizados testes diretamente nos endpoints da aplicação utilizando `cy.request()`.

- Status HTTP;
- Estrutura da resposta;
- Mensagens retornadas pela API;

### 1. Clonar o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Acessar a pasta

```bash
cd automation-exercise-cypress
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar o Cypress

Interface gráfica:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```
