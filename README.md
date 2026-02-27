# 💳 Identificador de Bandeira de Cartão de Crédito

## 📌 Desafio de Projeto

Este projeto consiste no desenvolvimento de uma aplicação simples em **JavaScript** capaz de identificar a **bandeira de um cartão de crédito** (Visa, MasterCard, Elo, entre outras) com base no número informado.

Durante o desenvolvimento, foi utilizado o **GitHub Copilot** como assistente de codificação, explorando como a inteligência artificial pode acelerar o desenvolvimento, sugerir trechos de código e melhorar a produtividade.

---

## 📖 Contexto

Sistemas financeiros utilizam padrões numéricos para identificar automaticamente a bandeira dos cartões de crédito.  
Cada bandeira possui prefixos específicos e, em alguns casos, quantidade fixa de dígitos.

Este projeto aplica essas regras para:
- Reconhecer a bandeira do cartão.
- Consolidar conhecimentos em JavaScript.
- Demonstrar o uso do GitHub Copilot no processo de desenvolvimento.

---

## 🎯 Objetivo

Criar uma aplicação que:
- Receba um número de cartão como entrada.
- Identifique automaticamente a bandeira correspondente.
- Utilize regras reais de mercado.
- Sirva como projeto educacional e de portfólio.

---

## 🛠️ Tecnologias Utilizadas

- JavaScript
- GitHub Copilot
- Node.js (opcional)
- Visual Studio Code

---

## ⚙️ Funcionamento

O programa analisa:
- Os primeiros dígitos do número do cartão (prefixo).
- A quantidade total de dígitos (quando necessário).
- Aplica regras condicionais para identificar a bandeira correta.

---

## ✅ Bandeiras Suportadas

| Bandeira | Número inicial |
|----------|----------------|
| Visa | Começa com 4 |
| MasterCard | Começa entre 51 a 55 ou entre 2221 a 2720 |
| Elo | Pode começar com vários intervalos como 4011, 4312, 4389, entre outros |
| American Express | Inicia com 34 ou 37 |
| Discover | Começa com 6011, 65, ou entre 644 a 649 |
| Hipercard | Geralmente começa com 6062 |
| Diners Club | Inicia com 300 a 305, 36 ou 38 |
| EnRoute | Inicia com 2014 ou 2149 |
| JCB | Inicia entre 3528 a 3589 |
| Voyager | Começa com 8699 |
| Aura | Normalmente começa com 50 |
| Visa (16 dígitos) | Começa com 4 e possui exatamente 16 dígitos |

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta do projeto:
```bash
cd seu-repositorio
```

3. Coloque o número do cartão no fim do código.

4. Execute o arquivo JavaScript:
```bash
node src/index.js
```

## 🧪 Exemplo de Sáida
```text
{ valid: true, brand: 'Hipercard' }
```

## 🧠 Uso do GitHub Copilot

- O GitHub Copilot foi utilizado para:
- Sugerir estruturas condicionais.
- Auxiliar na implementação das regras de prefixo.
- Acelerar o desenvolvimento.
- Melhorar a legibilidade do código.
- Apoiar a documentação do projeto.

---

## 🔮 Melhorias Futuras

- Implementar validação pelo algoritmo de Luhn.
- Criar interface web (HTML e CSS).
- Transformar em API REST.
- Criar testes automatizados.
- Refatorar o código para melhor modularização.
