# DATASETS.md — Regulatory Data Inventory

> What we've scraped, where it lives, when it was last updated. Owner: Lucas.

---

## Sources to scrape (Tuesday May 5)

### CMF — Comisión para el Mercado Financiero

| Item | URL | Format | Status |
|------|-----|--------|--------|
| NCG 502 — Registro Prestadores Fintec | https://www.cmfchile.cl/normativa/ncg_502_2024.pdf | PDF | ⬜ |
| NCG 503 — Requisitos competencia roles | https://www.cmfchile.cl/portal/principal/613/w3-propertyname-702.html | HTML/PDF | ⬜ |
| NCG 504 — Disposiciones Art. 65 LMV | (search via portal) | PDF | ⬜ |
| NCG 514 — Sistema Finanzas Abiertas | https://www.cmfchile.cl/normativa/ncg_514_2024.pdf | PDF | ⬜ |
| Manual SIF (ciberseguridad) | (CMF portal) | PDF | ⬜ |
| Registro Prestadores Fintec (RPSF) | https://www.cmfchile.cl/institucional/estadisticas/seg_rgpsf.php | HTML | ⬜ |
| Alertas al público | https://www.cmfchile.cl/portal/principal/613/w3-propertyvalue-43545.html | HTML | ⬜ |
| CMF Educa (educación financiera) | https://www.cmfchile.cl/educa/ | HTML | ⬜ |
| Normativa buscable (índice) | https://www.cmfchile.cl/portal/principal/613/w3-propertyname-702.html | HTML | ⬜ |

**Note:** CMF has no public REST API. Use Firecrawl, respect 1 req/sec rate limit, cache aggressively.

### SII — Servicio de Impuestos Internos

| Item | URL | Format | Status |
|------|-----|--------|--------|
| Régimen Pro Pyme (10 Letra D) | https://www.sii.cl/normativa_legislacion/ | HTML | ⬜ |
| FAQ criptomonedas | https://www.sii.cl/preguntas_frecuentes/criptomonedas/arbol_faqs_criptomonedas_1653.htm | HTML | ⬜ |
| Res. Ex. 113/2025 (DJ 1963 cripto no residentes) | (sii.cl) | PDF | ⬜ |
| Res. Ex. 114/2025 (DJ 1964 cripto residentes) | https://www.sii.cl/normativa_legislacion/resoluciones/2025/reso114.pdf | PDF | ⬜ |
| Inicio de actividades — guía | https://www.sii.cl/ | HTML | ⬜ |
| Boleta y factura electrónica — guía | https://www.sii.cl/ | HTML | ⬜ |
| IVA básico (mensual F29) | https://www.sii.cl/ | HTML | ⬜ |
| Renta anual F22 | https://www.sii.cl/ | HTML | ⬜ |
| Tipos de sociedad (SpA, Ltda, EIRL, SA) | https://www.sii.cl/ | HTML | ⬜ |

### BCN — Biblioteca del Congreso Nacional

| Item | URL | Format | Status |
|------|-----|--------|--------|
| Ley 21.521 (Fintec) full text | https://www.bcn.cl/leychile/navegar?idNorma=1187323 | HTML | ⬜ |
| Ley 21.398 (Pro Consumidor) | https://www.bcn.cl/leychile/navegar?idNorma=1170464 | HTML | ⬜ |
| Ley 21.719 (Datos Personales nuevos) | https://www.bcn.cl/leychile/navegar?idNorma=1209272 | HTML | ⬜ |
| Ley 21.459 (Delitos Informáticos) | https://www.bcn.cl/leychile/navegar?idNorma=1177743 | HTML | ⬜ |
| Ley 21.663 (Marco Ciberseguridad / ANCI) | https://www.bcn.cl/leychile/navegar?idNorma=1202434 | HTML | ⬜ |
| BCN API Ley Fácil | https://www.bcn.cl/api-leyfacil/ | JSON API | ⬜ |

**Ley Fácil API is the unlock** — gratis, JSON, official plain-language summaries of laws. This IS the citizen-translation layer.

### SERNAC

| Item | URL | Format | Status |
|------|-----|--------|--------|
| SERNAC Financiero overview | https://www.sernac.cl/portal/618/w3-propertyvalue-27771.html | HTML | ⬜ |
| Derechos del consumidor financiero (guía) | (sernac.cl) | HTML | ⬜ |

### Caja Los Andes (public benefits docs)

| Item | URL | Format | Status |
|------|-----|--------|--------|
| Crédito Social — términos y tasas | https://www.cajalosandes.cl/creditos/credito-social | HTML | ⬜ |
| APV — guía afiliados | https://mismetas.cajalosandes.cl/productos/ahorro-apv | HTML | ⬜ |
| Subsidio cesantía | https://www.cajalosandes.cl/apoyo-social/subsidio-de-cesantia | HTML | ⬜ |

### Templates PDF para wow moment (Files API)

Estos son los formularios oficiales que Chispla pre-rellena con datos del usuario y entrega adjuntos en WhatsApp.

| Template | Para qué | URL oficial | Status |
|------|------|------|------|
| F4415_PJ.pdf | SII inicio actividades persona jurídica | https://www.sii.cl/formularios/imagen/F4415_PJ.pdf | ⬜ |
| F4415_PN.pdf | SII inicio actividades persona natural | https://www.sii.cl/formularios/imagen/F4415_PN.pdf | ⬜ |
| F4415.pdf (general) | SII inicio actividades formato unificado | https://www.sii.cl/formularios/imagen/F4415.pdf | ⬜ |
| Material informativo SII PJ | Guía oficial de inicio de actividades para personas jurídicas | https://www.sii.cl/material_inf/inicio_actividad_juridica.pdf | ⬜ |
| Patente Providencia (F-A1) | Solicitud patente comercial e industrial autocompletable | https://providencia.cl/provi/site/docs/20191017/20191017122917/solicitud_de_patente_comercial_e_industrial_01_01_2020_autocompletable.pdf | ⬜ |
| Patente Santiago (R-91) | Nueva patente Santiago | https://www.santiagoenlinea.cl/wp-content/uploads/2014/05/R-91-FORMULARIO-NUEVA-PATENTE-2017-V1-3.pdf | ⬜ |

**Storage:** los templates descargados viven en `app/templates/pdfs/` versionados en el repo. El backend los abre con `pdf-lib`, llena los campos desde el JSON que devuelve Claude, y sube el PDF resultante a Anthropic Files API. El `file_id` retornado va en la respuesta a Kapso.

**Disclaimer obligatorio en cada PDF entregado:** marca de agua "Borrador no oficial · Chispla · Verifica en SII / municipio antes de presentar · No es asesoría legal."

**Nota legal:** Ley 21.210 obliga a presentar inicio de actividades en SII por internet (Mi SII) salvo excepciones. El PDF Chispla sirve como **checklist visual de qué información tener lista** + respaldo para personas que llenan en papel. Las patentes municipales sí se siguen presentando vía formulario PDF en muchas comunas.

---

## Storage layout

After ingestion, data lives in Supabase:

```sql
regulations (
  id uuid pk,
  source text, -- 'cmf' | 'sii' | 'bcn' | 'sernac' | 'caja_los_andes'
  doc_type text, -- 'ncg' | 'circular' | 'ley' | 'guia' | 'beneficio'
  identifier text, -- e.g. 'NCG-502', 'Ley-21521'
  title text,
  url text,
  full_text text,
  language text default 'es',
  published_at date,
  scraped_at timestamptz default now()
)

regulation_chunks (
  id uuid pk,
  regulation_id uuid references regulations,
  chunk_index int,
  chunk_text text,
  section text, -- e.g. 'Artículo 5°', 'Considerando'
  embedding vector(1536)
)
```

Indexes:
- `idx_chunks_embedding` — ivfflat on `embedding` for vector search
- `idx_regulations_source_type` — btree on `(source, doc_type)`

---

## Ingestion script

`scripts/ingest.ts` does:
1. Read this DATASETS.md (or a YAML mirror)
2. For each URL:
   - Firecrawl → clean Markdown
   - Chunk at ~500 tokens preserving section boundaries
   - OpenAI embed each chunk
   - Upsert to Supabase
3. Log status to console + update this file's checkboxes

**Run:** `pnpm ingest` from the product repo. Estimated cost: ~$2 in Firecrawl + $0.05 in OpenAI embeddings. Estimated time: 30-45 min.

---

## Update protocol

After ingestion, update the Status column above:
- ⬜ not yet ingested
- 🟡 ingesting
- ✅ ingested and verified
- ❌ failed (with note)

If a URL changes or returns errors, log it in BLOCKERS.md.

---

**Last updated:** 2026-05-05 — Luca — initial inventory
