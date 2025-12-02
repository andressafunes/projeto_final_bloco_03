# 💊 **Farmácia --- Frontend (React + TypeScript)**

Uma aplicação moderna e responsiva desenvolvida em **React**, voltada
para o gerenciamento de **produtos** e **categorias** de uma farmácia
fictícia.\
O projeto consome uma **API REST** e apresenta uma interface amigável,
organizada e fácil de navegar.

------------------------------------------------------------------------

## ✨ **Recursos do Projeto**

-   🗂️ Listagem de categorias\
-   ➕ Cadastro e edição de categorias\
-   🛒 Listagem completa de produtos\
-   🖼️ Cards de produtos com imagem, preço e categoria\
-   📦 Relação Categoria → Produtos\
-   📱 Layout totalmente responsivo\
-   ⚡ Carregamento com Loader elegante\
-   🪟 Popups modais com **reactjs-popup**

------------------------------------------------------------------------

## 🛠️ **Tecnologias Utilizadas**

  Tecnologia             Função
---------------------- -----------------------
  **React + Vite**       Estrutura do frontend
  **TypeScript**         Tipagem e manutenção
  **Axios**              Consumo da API
  **React Router DOM**   Navegação
  **TailwindCSS**        Estilização
  **React Icons**        Ícones para interface
  **ReactJS-Popup**      Modais e popups
  **React Spinners**     Loaders

------------------------------------------------------------------------

## 🧩 **Modelos das Entidades**

### 📁 **Categoria**

Representa uma categoria de produtos (ex: Antibióticos, Vitaminas,
Higiene).

  Atributo     Tipo          Descrição
------------ ------------- ------------------------------
  `id`         number        Identificador da categoria
  `nome`       string        Nome da categoria
  `produtos`   Produto\[\]   Lista de produtos associados

------------------------------------------------------------------------

### 🛒 **Produto**

Item disponível para compra.

  Atributo      Tipo        Descrição
------------- ----------- --------------------------
  `id`          number      Identificador do produto
  `nome`        string      Nome do produto
  `preco`       number      Preço
  `foto`        string      URL da imagem
  `categoria`   Categoria   Categoria associada

------------------------------------------------------------------------

## 🔗 **Relacionamento**

    Categoria (1) ───── (N) Produto

------------------------------------------------------------------------

## 📂 **Estrutura Recomendada**

    src/
     ├── assets/
     ├── components/
     │     ├── navbar/
     │     ├── footer/
     │     ├── cardproduto/
     │     ├── cardcategoria/
     │     └── modal/
     ├── pages/
     │     ├── produtos/
     │     └── categorias/
     ├── services/
     │     └── Service.ts
     ├── contexts/
     ├── models/
     │     ├── Produto.ts
     │     └── Categoria.ts
     ├── App.tsx
     └── main.tsx

------------------------------------------------------------------------

## 🚀 **Como Rodar o Projeto**

### 1️⃣ Clonar o repositório

``` bash
git clone https://github.com/seuusuario/farmacia-frontend.git
```

### 2️⃣ Entrar no diretório

``` bash
cd farmacia-frontend
```

### 3️⃣ Instalar dependências

``` bash
npm install
```

### 4️⃣ Executar

``` bash
npm run dev
```

### 5️⃣ Acessar no navegador

    http://localhost:5173

------------------------------------------------------------------------

## 🌐 **Integração com Backend**

O frontend se conecta com a API:

### 🗂️ Categorias

-   `GET /categorias`
-   `POST /categorias`
-   `PUT /categorias`
-   `DELETE /categorias/{id}`

### 🛒 Produtos

-   `GET /produtos`
-   `POST /produtos`
-   `PUT /produtos`
-   `DELETE /produtos/{id}`

------------------------------------------------------------------------

## 👩‍💻 **Autora**

**Andressa Funes**\
Aplicação desenvolvida como parte do aprendizado em **React + Java
(API)**.

------------------------------------------------------------------------

## ⭐ **Sugestões Futuras**

-   Autenticação com JWT\
-   Carrinho de compras\
-   Tela de detalhes do produto\
-   Upload de imagem direta no frontend
