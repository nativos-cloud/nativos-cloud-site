# nativos.cloud

Site institucional da [nativos.cloud](https://nativos.cloud) — consultoria especializada em Cloud, DevOps e FinOps para empresas brasileiras.

## Stack

- HTML, CSS e JavaScript puros — sem frameworks ou dependências de build
- [EmailJS](https://www.emailjs.com/) para envio do formulário de contato
- [Simple Icons](https://simpleicons.org/) para os logos de tecnologia no marquee

## Estrutura

```
index.html                      # Página principal
404.html                        # Página de erro customizada
politica-de-privacidade.html    # Política de privacidade (LGPD)
favicon.svg                     # Favicon (crawlável pelo Google)
og-image.png                    # Imagem Open Graph (redes sociais / cards)
robots.txt                      # Diretivas para crawlers
sitemap.xml                     # Sitemap para indexação
serve.py                        # Servidor local de desenvolvimento
```

## Desenvolvimento local

```bash
python3 serve.py
```

Abre em `http://localhost:8080`. A página 404 customizada também funciona localmente.

## Deploy

O site é estático — qualquer CDN ou hosting de arquivos funciona (Cloudflare Pages, Netlify, GitHub Pages, S3 + CloudFront, etc.). Basta servir a raiz do repositório.
