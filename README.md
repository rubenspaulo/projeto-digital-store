# 🛍️ Digital Store — Projeto Final de Front-end | Geração Tech

Aplicação web de comércio eletrônico desenvolvida em **React**, com **Vite** e **React Router DOM**, como projeto final do curso de Front-end da **Geração Tech** (Digital College / IEL-CE).

---

## 👥 Integrantes da Equipe

- **Antonio Lucas da Costa Pereira**
- **Everton Lucas Fernandes**
- **Rubens Paulo Rodrigues Parente**

---

## 🚀 Sobre o Projeto

A **Digital Store** é uma loja virtual moderna focada na comercialização de calçados e vestuário esportivo/casual. O projeto foi construído em dupla, seguindo estritamente a documentação técnica oficial e mantendo fidelidade visual ao layout disponibilizado no **Figma**.

A aplicação conta com três páginas principais e rotas integradas:

1. **Página Inicial (Home):** Com carrossel de imagens (`Gallery`), seções de coleções em destaque e listagem de produtos em alta.
2. **Página de Listagem de Produtos (`/produtos`):** Com sistema de ordenação por preço, grupos de filtros por marca/categoria/gênero (`FilterGroup`) e busca integrada via *query strings*.
3. **Página de Visualização Individual (`/produto/:id`):** Exibição detalhada do produto selecionado com galeria de imagens, opções de compra (`BuyBox`), avaliações e produtos relacionados.

---

## 🛠️ Tecnologias Utilizadas

- **React 19:** Componentes funcionais e Hooks (`useState`, `useParams`, `useSearchParams`).
- **React Router DOM:** Gestão de rotas e navegação SPA.
- **Vite:** Empacotador e servidor de desenvolvimento ultrarrápido.
- **CSS3 / Flexbox / Variáveis CSS:** Estilização baseada na paleta oficial do projeto.

---

## 📂 Estrutura do Projeto

```text
src/
├── assets/         # Imagens, ícones SVG e logomarcas
├── components/     # Componentes reutilizáveis (Header, Footer, Layout, ProductCard, Gallery, etc.)
├── data/           # Base de dados centralizada (products.js)
├── pages/          # Páginas principais (HomePage, ProductListingPage, ProductViewPage)
├── App.jsx         # Configuração central de rotas
└── main.jsx        # Ponto de entrada da aplicação
```

---

## ⚙️ Instruções de Instalação e Execução

Certifique-se de ter o **Node.js** e o **npm** instalados na sua máquina.

### 1. Clone o repositório

```bash
git clone https://github.com/rubenspaulo/projeto-digital-store.git
cd projeto-digital-store
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o servidor de desenvolvimento

```bash
npm run dev
```

### 4. Acesse no navegador

Após executar o comando, o terminal exibirá o endereço local da aplicação, geralmente:

```text
http://localhost:5173
```