# IA READ FIRST — EQUIPE JUS 9

SCHEMA = JUS9_REPO_ENTRY_V1
STATE = DRAFT_BRANCH
PRIMARY_READER = IA
CLASSIFICATION = PUBLICO
RULES = IA_FIRST + LINK_FIRST + EVIDENCE_FIRST + FAIL_CLOSED

## PURPOSE
Repositorio publico da equipe e perfis.
Alteracoes de membros, papeis, fotos, egressos e lideranca podem ter efeito publico; nao inferir estado atual de pessoas por lista antiga.

GITHUB_INVENTORY = https://docs.google.com/document/d/1MfktKZtfL9imoyZ9DWDmBe3-z2jE_2HkRcTXydPSrPI/edit

## WORKFLOW
.github/workflows/publicar-avatares-albuns-20260930.yml = PUBLICATION_AUTOMATION
CURRENT_MAIN_RISK = manual dispatch com contents:write e lista fixa de integrantes.
DRAFT_CHANGE = exigir confirmacao manual e impedir disparo automatico por alteracao do proprio workflow.

## RULES
PROFILE_UPDATE != IDENTITY_CREATION
STATIC_LIST != CURRENT_ROSTER
PUBLISH != APPROVAL
HUMAN_OR_COMPETENT_SOURCE_REQUIRED_FOR_ROSTER = TRUE

## SECURITY
Nao publicar dados pessoais desnecessarios, credenciais ou segredo.
