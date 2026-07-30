# Rotas canônicas e resposta 404 — 2026-07-30

## Motivo

Uma auditoria pública encontrou caminhos recursivos como
`/origem-visual/origem-visual/...`. A página aninhada usava links e ativos
relativos ao diretório atual. Como não havia `404.html` na raiz, o Cloudflare
Pages aplicava o comportamento padrão de SPA e devolvia o `index.html` com
status 200 para rotas inexistentes.

Referência técnica consultada em 2026-07-30:

- https://developers.cloudflare.com/pages/configuration/serving-pages/

## Alterações

- caminhos de ativos e navegação de `/origem-visual/` passaram a ser absolutos;
- foi declarada URL canônica;
- o atalho de MVP passou a apontar para `https://jus9tecnologia.com.br/mvp`;
- foi criado `404.html` na raiz para respostas reais de página não encontrada;
- um e-mail pessoal exposto na página foi substituído pelo endereço
  institucional `vitor@jus9tecnologia.com.br`;
- a redação pública de liderança juvenil foi tornada prudente e não societária.

## Validação esperada

- `/origem-visual/` responde 200 e carrega CSS e imagens;
- `/origem-visual/origem-visual/` responde 404;
- uma rota aleatória responde 404;
- navegação “Origem Visual” não acrescenta segmentos repetidos;
- o console do navegador não registra falhas de ativos.

