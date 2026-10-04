# Padrão Jus 9 — estrela de nove pontas, variantes e aplicação em avatares

**STANDARD_ID:** JUS9-VISUAL-STAR-9-20261004  
**TITLE:** Estrela Jus 9 de nove pontas — matriz, escalas e broche  
**STATE:** PADRAO_VALIDADO_TECNICAMENTE  
**TYPE:** padrão visual e procedimento de publicação  
**OWNER:** Jus 9 Tecnologia Jurídica / Família Virtual  
**SOURCE_OBJECT:** `assets/estrela-9-pontas.svg`  
**CANONICAL_URL:** `https://equipe.jus9tecnologia.com.br/`  
**APPLIES_TO:** marca, materiais gráficos, cards, álbuns visuais e uniformes dos avatares  
**LAST_VALIDATED:** 2026-10-04  
**SUPERSEDES:** aplicações raster ou geradas sem contagem verificável  

## 1. Decisão central

A estrela não deve nascer como um detalhe confiado a uma imagem gerada por IA. A imagem pode conter uma estrela decorativa, mas essa estrela não é automaticamente a estrela institucional. A marca oficial é uma forma vetorial determinística, derivada de uma única matriz e aplicada depois da composição fotográfica quando houver risco de contagem, deformação ou ocultação.

Nesta versão foram criadas três escalas derivadas da mesma matriz:

- `assets/estrela-9-pontas-grande.svg` — marca grande, composição e materiais visuais;
- `assets/estrela-9-pontas-media.svg` — cards, banners e materiais intermediários;
- `assets/estrela-9-pontas-broche.svg` — broche do uniforme, com fundo de insígnia.

O broche foi colocado separadamente sobre os avatares adultos publicados da Gêmea da Palavra e do Gêmeo da Obra. As imagens anteriores continuam preservadas; a substituição é uma camada visual de publicação, não uma reescrita da história.

## 2. Construção geométrica

O padrão tem **9 pontas externas** e **9 vales internos**, totalizando **18 vértices alternados** no caminho fechado. O centro é o mesmo para todas as escalas e a ponta principal aponta para cima.

Para `n = 9`, o passo angular é `360° / 9 = 40°`. A sequência percorre:

1. um raio externo para cada ponta;
2. um raio interno para cada vale;
3. alternância externa/interna até retornar ao ponto inicial;
4. fechamento do caminho sem inserir ponto decorativo extra.

Em termos de modelo, para cada índice `i` são usados ângulos `θ_i = -90° + i × 20°`, alternando `R_externo` e `R_interno`. Assim, a contagem de pontas não depende de percepção humana, fonte, iluminação ou prompt. A matriz canônica existente conserva o mesmo caminho de 18 vértices, e as três variantes mudam somente escala, acabamento e contexto de uso.

## 3. Por que as IAs erram

Geradores de imagem têm dificuldade recorrente com símbolos repetitivos e contagens exatas. Os erros observados ou prevenidos neste projeto incluem:

- produzir uma estrela de 8 pontas quando o pedido é de 9;
- produzir 10, 12 ou uma forma irregular por simetria aproximada;
- contar apenas pontas visíveis e ignorar vales ocultos;
- desenhar estrelas decorativas no fundo e nenhuma estrela no uniforme;
- misturar uma estrela antiga, com outra geometria, à estrela institucional;
- colocar o broche no lugar errado, sobre o rosto, texto ou elemento funcional;
- alterar rosto, uniforme, letras e logotipo ao tentar corrigir somente o símbolo;
- criar uma estrela correta numa imagem, mas deformá-la em outra escala ou recorte;
- inserir letras ou palavras inventadas dentro do símbolo;
- confundir uma fotografia virtual, um desenho de formação e um avatar adulto oficial.

Por isso, o padrão não diz apenas “desenhe uma estrela de nove pontas”. Ele separa criação de personagem, composição, símbolo institucional e verificação. A IA pode propor a imagem, mas a geometria repetível deve ser uma camada controlada.

## 4. Modelo de aplicação escolhido

Escolha adotada para os gêmeos Logos:

- a fotografia base adulta permanece responsável pelo rosto, cabelo, postura e uniforme;
- o broche vetorial é inserido separadamente, em posição documentada para cada uniforme;
- o arquivo final pode ser rasterizado para distribuição, mas o SVG permanece como fonte pronta para verificação e reuso;
- o card de Equipe e o perfil autoral usam a base adulta sem a estrela embutida e sobrepõem `estrela-9-pontas-broche.svg`;
- os arquivos adultos anteriores com estrela embutida permanecem como histórico/rollback e não são apagados;
- a Palavra usa posição de broche própria e a Obra usa posição própria, pois os recortes e uniformes não são idênticos;
- a grande e a média são publicadas como espécimes do padrão e podem ser reutilizadas sem redesenho.

Essa separação evita a falsa solução de desenhar outra estrela por cima de uma estrela errada. Quando uma arte anterior tem geometria não canônica, ela é marcada como histórica ou não canônica e não é promovida silenciosamente.

## 5. Protocolo operacional para qualquer IA

Antes de gerar ou editar:

1. localizar a fonte canônica `assets/estrela-9-pontas.svg`;
2. ler este padrão e verificar a função da imagem: grande, média ou broche;
3. preservar o arquivo original e criar uma versão de trabalho;
4. não pedir ao gerador para resolver sozinho a geometria da marca;
5. gerar a fotografia/ilustração sem depender de texto ou símbolo perfeito;
6. inserir o SVG correto como camada separada;
7. verificar que há exatamente 9 pontas externas, 9 vales e 18 vértices alternados;
8. verificar orientação para cima, contraste e posição no peito;
9. verificar que rosto, uniforme, textos e logotipo não foram alterados indevidamente;
10. manter o histórico, registrar hash e somente então preparar publicação.

Quando não houver ferramenta vetorial disponível, a IA deve declarar a limitação e não afirmar que a estrela está correta apenas por aparência. Uma imagem bonita sem contagem verificável é uma proposta, não um ativo canônico.

## 6. Testes mínimos de aceitação

**Teste geométrico:** o `path` canônico deve conter 18 comandos de coordenada alternados, correspondentes a 9 máximos externos e 9 vales internos.  
**Teste semântico:** o texto alternativo deve dizer que o símbolo tem nove pontas, sem chamar uma versão histórica de canônica.  
**Teste de aplicação:** o broche aparece no peito do uniforme, não em fundo aleatório, cabelo, rosto ou elemento de navegação.  
**Teste de regressão:** os álbuns históricos e os textos autorais continuam acessíveis.  
**Teste de publicação:** os cards e os dois perfis carregam sem erro HTTP, e os SVGs retornam conteúdo vetorial.  
**Teste de reversão:** remover a camada de broche ou restaurar o commit anterior deve devolver a publicação anterior sem apagar os arquivos históricos.

Validação técnica não equivale a promulgação institucional, aprovação acadêmica ou autorização civil. Este arquivo registra um padrão de produção e publicação visual; qualquer decisão superior continua pertencendo à governança competente.

## 7. Casas e rastreabilidade

- **GitHub:** guarda o material acabado e pronto para uso, os SVGs, o CSS, os HTMLs publicados e a documentação versionada.
- **Google Drive — Biblioteca de modelos:** guarda este padrão como documento de produção reutilizável e suas versões ZIP quando houver pacote.
- **Casa-Lar:** guarda a proveniência autoral e imagens pessoais/históricas conforme a governança aplicável.
- **Faxineiro:** recebe registro de limpeza após a rodada; registro não é exclusão automática e não autoriza apagar histórico.

**Não copiar:** não copiar uma estrela observada em imagem gerada, não copiar uma estrela de 8 pontas de versão anterior e não redesenhar manualmente uma nova estrela para cada avatar.

**CONFIG_FIELDS:** `variant = grande | media | broche`; `source = assets/estrela-9-pontas.svg`; `points = 9`; `vertices = 18`; `orientation = top`; `overlay = true_for_uniform`; `history = preserve`.

**ACCEPTANCE_TEST:** `points == 9 AND vertices == 18 AND canonical_source_preserved == true AND uniform_brooch_visible == true`.

## 8. Entrega desta versão

O padrão foi acompanhado por três SVGs novos e pela aplicação do broche vetorial nos uniformes adultos publicados dos gêmeos Logos. A publicação deve manter a proveniência dos arquivos de 2026-10-03 e acrescentar esta versão como evolução técnica de 2026-10-04.

Assinatura técnica: **Gêmeo da Obra / Codex — aplicação técnica sob governança humana.**
