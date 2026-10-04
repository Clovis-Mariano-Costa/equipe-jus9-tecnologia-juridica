# Gêmeos Charlie Logos — álbum visual e avatares V1

**Estado:** `PUBLICADO_E_VERIFICADO`  
**Branch:** `codex/albuns-avatares-gemeos-logos-20261003`  
**Data de produção:** 2026-10-03  
**Destino funcional:** páginas autorais e card da Equipe Jus 9  
**Governança:** identidade simbólico-operacional sob governança humana.

**Merge:** `01faf65f6c71e8865362d9fad57609117b9384e0`  
**Deploy verificado:** GitHub Pages run `37163989347`  
**PR:** [#14](https://github.com/Clovis-Mariano-Costa/equipe-jus9-tecnologia-juridica/pull/14)

## Escopo entregue

Foram produzidos oito quadros de evolução, quatro para cada gêmeo:

- origem/ultrassom simbólico;
- criança simbólica;
- adolescente/transição;
- adulto/profissional.

Os adultos foram gerados como retratos humanos realistas e receberam um broche rasterizado com 18 vértices alternados: 9 pontas externas e 9 vales. O broche não foi desenhado pela ferramenta generativa; foi inserido deterministically a partir da geometria institucional de nove pontas, para evitar a repetição do erro de oito pontas.

## Identidade visual

- **Gêmea da Palavra:** ambiente de estudo/autoria, uniforme de comunicação e acabamento de alfaiataria.
- **Gêmeo da Obra:** ambiente técnico-operacional, uniforme de execução/integração e acabamento funcional.
- **Vínculo:** rostos adultos e paleta Jus 9 mantêm parentesco visual; a distinção vem da função e do uniforme.
- **Fases não adultas:** não são apresentadas como avatares profissionais oficiais.

## Proveniência e referências

- direção visual: imagem conjunta fornecida pelo usuário;
- estrutura narrativa: [álbum de Charlie Echo](https://charlieecho.jus9tecnologia.com.br/album);
- regra técnica: [matriz da estrela Jus 9](../assets/estrela-9-pontas.svg);
- pedido de uniforme e preservação do rosto: documento de pente-fino no Google Drive;
- página de publicação: [Equipe Jus 9](https://equipe.jus9tecnologia.com.br/).

As imagens são artefatos visuais gerados para esta rodada. Não contêm credenciais, segredos, dados pessoais reais ou texto institucional gerado automaticamente.

## Arquivos

Todos os PNGs estão em `assets/img/equipe/avatars/logos/20261003/`.

| Arquivo | Função |
|---|---|
| `charlie-logos-palavra-ultrassom-origem.png` | origem simbólica da Palavra |
| `charlie-logos-palavra-crianca.png` | infância simbólica da Palavra |
| `charlie-logos-palavra-adolescente-transicao.png` | transição estudantil da Palavra |
| `charlie-logos-palavra-adulto-avatar.png` | avatar adulto oficial da Palavra |
| `charlie-logos-obra-ultrassom-origem.png` | origem simbólica da Obra |
| `charlie-logos-obra-crianca.png` | infância simbólica da Obra |
| `charlie-logos-obra-adolescente-transicao.png` | transição estudantil da Obra |
| `charlie-logos-obra-adulto-avatar.png` | avatar adulto oficial da Obra |
| `broche-estrela-9-pontas.png` | fonte raster do broche determinístico |

Os arquivos `*-adulto-avatar-base.png` permanecem como insumo de proveniência local da rodada, sem uso direto nas páginas.

## Critérios verificados

- páginas da Palavra e da Obra renderizam sem erro;
- oito imagens de ciclo de vida estão referenciadas por caminhos existentes;
- `alt` text distingue fase, função e estado histórico;
- avatar adulto não é mais SVG/cartoon;
- histórico anterior permanece preservado e explicitamente não canônico;
- o nome público do Obra foi harmonizado para `Gêmeo da Obra`;
- card e composição conjunta apontam para os novos avatares humanos;
- o broche usado nesta rodada tem 18 vértices alternados, equivalentes a nove pontas.

## Limites desta versão

- a imagem conjunta anexada foi usada como referência de direção; não foi publicada como banner;
- as estrelas presentes nas imagens históricas antigas continuam preservadas como histórico e não foram reinterpretadas como canônicas;
- o merge foi realizado após a prévia local e os checks do pipeline;
- os três URLs públicos retornaram HTTP 200 e exibem os novos caminhos de assets;
- a branch de trabalho foi mantida para rastreabilidade;
- alterações futuras devem gerar nova versão, sem sobrescrever este registro.

## Rollback

Para desfazer esta rodada, basta não mesclar a branch. Se já mesclada, reverter o commit que adiciona `assets/img/equipe/avatars/logos/20261003/` e as alterações nos três HTMLs, preservando o histórico anterior.

