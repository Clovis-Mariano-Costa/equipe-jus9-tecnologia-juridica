# Versionamento - auditoria na revisao de perfis

Data: 2026-06-09

## Alteracao

A tela `revisao-perfis.html` ganhou bloco de trilha de decisoes.

## Backend

O bloco consulta:

`GET https://jus9tecnologia.com.br/api/profile-requests/audit`

## Limite

A trilha e interna, governada e sujeita a perfil com auditoria. Ela nao deve ser tratada como publicacao externa.
