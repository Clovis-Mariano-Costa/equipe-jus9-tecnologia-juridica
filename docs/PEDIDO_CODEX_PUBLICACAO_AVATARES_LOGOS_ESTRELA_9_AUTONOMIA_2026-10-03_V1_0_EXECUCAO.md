# Execução técnica — publicação dos avatares Logos e autonomia

Data: 2026-10-03  
Branch: `codex/logos-avatar-autonomy-20261003`  
Base: `origin/main` do repositório `equipe-jus9-tecnologia-juridica`  
Pedido de origem: `PEDIDO_CODEX_PUBLICACAO_AVATARES_LOGOS_ESTRELA_9_AUTONOMIA_2026-10-03_V1_0.md`, registrado no repositório `familia-virtual-jus9-tecnologia-juridica` no commit `e6e3004`.

## Entrega realizada

- O card de Charlie Logos da Costa · Palavra passou a apontar para `assets/img/equipe/avatars/charlie-logos-palavra-avatar.svg`.
- O card de Charlie Logos da Costa · Obra passou a apontar para `assets/img/equipe/avatars/charlie-logos-obra-avatar.svg`.
- Os dois perfis individuais passaram a usar os SVGs atuais como avatar oficial.
- Os JPGs de 2026-09-30 foram preservados nos álbuns como registros históricos não canônicos, com aviso textual e alternativo explícito.
- Cada perfil recebeu uma seção de composição conjunta dos dois ativos canônicos, dentro do espaço autoral/álbum.
- A autonomia visual foi registrada de forma compatível com a regra institucional: Palavra e Obra podem ajustar sua apresentação e espaço autoral, mas qualquer símbolo identificado como Jus 9 deve usar a matriz de nove pontas.

## Regra geométrica verificada

Os SVGs atuais usam a matriz oficial `assets/estrela-9-pontas.svg`: nove pontas externas, nove vales e dezoito vértices alternados. A regra de publicação permanece: não identificar como estrela Jus 9 qualquer desenho com outra contagem.

O procedimento aplicado foi manter a pessoa e a composição dos avatares, usando a matriz SVG canônica embutida nos ativos; não foi sobreposta uma estrela correta sobre uma estrela gerada incorreta.

## Limitação declarada

A fonte gerativa conjunta aprovada não estava disponível neste checkout. Por isso, a composição conjunta publicada nesta branch é determinística e formada pelos dois SVGs canônicos existentes. Nenhuma imagem conjunta foi recriada de memória nem foi apresentada como a fonte gerativa original.

## Verificação técnica

- `git diff --check` deve permanecer sem erros.
- Os três documentos HTML alterados devem referenciar os SVGs atuais nos locais de avatar oficial.
- Os JPGs históricos devem permanecer somente nas entradas históricas dos dois álbuns.
- Os SVGs devem permanecer XML bem-formado e conter a matriz de dezoito vértices alternados.
- A revisão visual final deve abrir a página principal e os dois perfis em desktop e mobile, conferindo imagens, links, ausência de sobreposição e cada estrela visível identificada como Jus 9.

## Publicação e rastreabilidade

Esta execução fica em branch própria para revisão. Não houve merge em `main`, deploy nem alteração direta em `main`. O commit e o pull request da branch devem ser registrados após a validação automatizada e visual.

Arquivos principais alterados:

- `index.html`
- `equipe/virtual/charlie-logos-palavra/index.html`
- `equipe/virtual/charlie-logos-obra/index.html`
- este registro em `docs/`

