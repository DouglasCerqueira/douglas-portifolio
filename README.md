# 💻 Portfólio Pessoal

Site de portfólio de **Douglas Alves Cerqueira**, profissional de TI formado em Análise e Desenvolvimento de Sistemas e estudante de Defesa Cibernética, com foco em **segurança da informação** (Red Team e Pentest) e desenvolvimento seguro.

🔗 **Acesse online:** [douglascerqueira.github.io/douglas-portifolio](https://DouglasCerqueira.github.io/douglas-portifolio)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Funcionalidades

- **Tela de carregamento** com animação de digitação estilo terminal
- **Navegação fixa** com menu responsivo para dispositivos móveis
- **Animações de revelação** ao rolar a página (scroll reveal)
- **Seções:** Home, Sobre Mim, Projetos e Contato
- **Formulário de contato funcional**, com envio de e-mails via [EmailJS](https://www.emailjs.com/) (sem back-end próprio)
- **Tema escuro** com destaque em azul/ciano, fontes *Space Grotesk* e *JetBrains Mono*
- **Layout responsivo**, pensado para desktop e mobile

## 🛠️ Tecnologias

| Categoria | Ferramentas |
| --- | --- |
| Interface | React 19, TypeScript |
| Build | Vite |
| Estilo | Tailwind CSS 4 |
| Contato | EmailJS |
| Qualidade | ESLint, typescript-eslint |
| Deploy | GitHub Pages (`gh-pages`) |

## 📁 Estrutura do projeto

```
├── public/                     # Favicon e ícones estáticos
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Home.tsx        # Apresentação
│   │   │   ├── About.tsx       # Habilidades, formação e experiência
│   │   │   ├── Projects.tsx    # Projetos em destaque
│   │   │   └── Contact.tsx     # Formulário de contato (EmailJS)
│   │   ├── LoadingScreen.tsx   # Tela de carregamento inicial
│   │   ├── Navbar.tsx          # Barra de navegação
│   │   ├── MobileMenu.tsx      # Menu para telas pequenas
│   │   └── RevealOnScroll.tsx  # Animação ao rolar a página
│   ├── App.tsx
│   ├── index.css               # Tailwind + animações customizadas
│   └── main.tsx
├── index.html
├── vite.config.ts
└── package.json
