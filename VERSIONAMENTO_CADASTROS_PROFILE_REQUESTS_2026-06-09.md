# Versionamento - cadastros com envio governado

Data: 2026-06-09

## Alteracao

A pagina `cadastros.html` da Equipe passou a tentar envio governado para:

`https://jus9tecnologia.com.br/api/profile-requests`

## Comportamento

- Sempre salva rascunho local no navegador.
- Se houver sessao Google autorizada, registra solicitacao no backend central.
- O protocolo retornado fica visivel no rascunho local.
- Sem sessao, permanece como rascunho local para revisao humana.

## Limite

Imagem/avatar ainda nao e enviado como arquivo binario. O cadastro registra apenas sinal/politica de imagem para revisao posterior.
