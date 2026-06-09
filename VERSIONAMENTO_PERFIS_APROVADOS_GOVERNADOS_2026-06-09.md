# VERSIONAMENTO - Perfis Aprovados Governados

Registrado em: 2026-06-09 07:24:10.03692

## Escopo

Atualiza a tela `revisao-perfis.html` para exibir a lista interna de perfis aprovados apos revisao humana.

## Alteracoes

- Criado bloco `Perfis aprovados`.
- O painel consulta `GET /api/governed-profiles` com sessao Google e cache desativado.
- A lista mostra nome, e-mail, perfil, escopo, modulo, origem, status e aprovador.
- Adicionado destaque visual discreto para perfis aprovados.

## Regra

A tela separa tres camadas: fila de solicitacoes, trilha de decisoes e identidade governada aprovada.
