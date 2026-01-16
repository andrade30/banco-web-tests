# Projeto de Testes Automatizados com Cypress

## 📌 Objetivo do Projeto

Este projeto tem como principal objetivo **demonstrar aos alunos da Mentoria 2.0** como estruturar, desenvolver e executar **testes automatizados utilizando Cypress com JavaScript**, aplicando boas práticas de automação de testes.

Aqui você encontrará exemplos reais de:
- Automação de **testes de API**
- Automação de **testes Web (E2E)**
- Organização do código utilizando **Custom Commands**
- Geração de **relatórios automatizados** de execução

O foco do projeto é **didático**, servindo como base de estudo, referência e evolução para alunos que estão aprendendo automação de testes do zero ou em nível intermediário.

---

## 🧱 Componentes do Projeto

Este projeto é composto pelos seguintes elementos:

### 🔹 Cypress
Framework principal de automação utilizado para:
- Testes End-to-End (E2E)
- Testes de API
- Execução local e em modo headless

### 🔹 JavaScript
Linguagem base utilizada para escrever os testes, comandos customizados e configurações.

### 🔹 Custom Commands
Os **Custom Commands** do Cypress são utilizados para:
- Reutilização de código
- Melhor legibilidade dos testes
- Padronização de ações comuns (login, criação de dados, chamadas de API, etc.)

Eles estão centralizados na pasta:
```
cypress/support/commands.js
```

### 🔹 Relatórios – Mochawesome
O projeto utiliza o **cypress-mochawesome-reporter** para gerar relatórios detalhados de execução dos testes, contendo:
- Status dos cenários (pass/fail)
- Tempo de execução
- Evidências

Os relatórios são gerados automaticamente após a execução dos testes.

### 🔹 Aplicações Dependentes
Para que os testes funcionem corretamente, é necessário que as seguintes aplicações estejam em execução:

- **API**: `banco-api`
- **Aplicação Web**: `banco-web`

> ⚠️ Os testes **não sobem** a aplicação automaticamente. Elas devem estar rodando previamente.

---

## 📂 Estrutura do Projeto

Estrutura base do projeto de automação:

```
├── cypress
│   ├── e2e                # Testes automatizados (API e Web)
│   ├── fixtures           # Massa de dados estática
│   ├── support
│   │   ├── commands.js    # Custom Commands
│   │   └── e2e.js         # Configurações globais
│   └── reports            # Relatórios gerados
├── node_modules
├── cypress.config.js      # Configuração do Cypress
├── package.json           # Dependências e scripts
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- **Node.js** (versão LTS recomendada)
- **npm** ou **yarn**
- **Git**

Além disso, certifique-se de que estão em execução:
- `banco-api`
- `banco-web`

---

## 📥 Instalação do Projeto

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:
```bash
cd nome-do-projeto
```

3. Instale as dependências:
```bash
npm install
```

> 📌 Todas as dependências necessárias já estão configuradas no `package.json`.

---

## ▶️ Execução dos Testes

### 🔹 Abrir o Cypress em modo interativo
```bash
npx cypress open
```

Esse modo é ideal para:
- Aprendizado
- Depuração
- Execução manual dos testes

### 🔹 Executar os testes em modo headless
```bash
npx cypress run
```

Esse modo é ideal para:
- Execuções automatizadas
- Pipelines CI/CD
- Geração de relatórios

---

## 📊 Relatórios de Testes

Após a execução em modo headless, os relatórios são gerados automaticamente utilizando o **Mochawesome**.

📁 Local padrão dos relatórios:
```
cypress/reports
```

Os relatórios incluem:
- Cenários executados
- Status (sucesso/falha)
- Logs
- Evidências

---

## 🧪 Testes Automatizados

Os testes estão localizados na pasta:
```
cypress/e2e
```

Eles podem incluir:
- Testes de API (ex: login, criação de recursos, validações de contrato)
- Testes Web (ex: fluxos de usuário, validação de telas e comportamentos)

Os testes são escritos de forma clara e didática, visando o entendimento dos alunos da Mentoria 2.0.

---

## 🧩 Custom Commands

Os **Custom Commands** ficam definidos em:
```
cypress/support/commands.js
```

### Exemplos de uso:
- Login via API
- Criação de usuários/dados dinâmicos
- Requisições HTTP reutilizáveis
- Ações repetitivas na interface

Benefícios:
- Redução de código duplicado
- Testes mais limpos e legíveis
- Facilidade de manutenção

---

## 🎓 Mentoria 2.0

Este projeto faz parte do conteúdo prático da **Mentoria 2.0**, sendo utilizado como:
- Material de estudo
- Base para exercícios
- Referência para projetos reais

Sinta-se à vontade para explorar, modificar e evoluir os testes.

---

## 📌 Observações Finais

- Sempre valide se a API e o Frontend estão rodando antes de executar os testes
- Utilize os Custom Commands para manter os testes organizados
- Consulte os relatórios para análise de falhas

🚀 Bons testes e bons estudos!

