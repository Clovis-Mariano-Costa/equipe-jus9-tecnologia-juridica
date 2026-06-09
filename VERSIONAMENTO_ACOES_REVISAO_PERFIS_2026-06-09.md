# Versionamento - acoes na revisao de perfis

Data: 2026-06-09

## Alteracao

A tela `revisao-perfis.html` passou a exibir acoes por solicitacao:

- Aprovar;
- Pendente;
- Reprovar.

## Backend

As acoes chamam:

`POST https://jus9tecnologia.com.br/api/profile-requests/action`

## Limite

A decisao registrada e uma revisao humana interna. Nao cria perfil definitivo, cofre, cargo externo ou permissao sensivel automatica.
