# Versionamento - revisao de perfis governados

Data: 2026-06-09

## Alteracao

Criada a tela `revisao-perfis.html` para listar solicitacoes persistidas em `JUS9_PROFILE_REQUESTS`.

## Regras

- A tela consulta `GET https://jus9tecnologia.com.br/api/profile-requests`.
- A listagem exige sessao Google autorizada e permissao de auditoria.
- A tela nao aprova perfil, cargo, cofre ou permissao definitiva.
- Cada item exibido e uma solicitacao interna pendente de revisao humana.

## Publicacao

Incluidos links em:

- `index.html`;
- `cadastros.html`;
- `sitemap.xml`.

## Seguranca

Nenhum segredo, token, cookie, chave ou dado de cofre foi publicado.
