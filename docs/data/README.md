# docs/data — Snapshot del API del Impact Lab

Volcado de los endpoints de la plataforma `fintech.benditaia.cl/app` al **6-may-2026 ~12:30 CLT**, autenticado con la sesión de Edo (magic-link Supabase). No se autorefresca — es una foto.

## Archivos

| Archivo | Origen | Para qué sirve |
|---|---|---|
| `brief.md` | `/app/briefs/cmf-linea-01-...` (HTML SSR) | Brief CMF Línea 01 ("Tip de regulador") en markdown limpio. |
| `briefs-list.json` | `/api/briefs` | Listado de briefs disponibles (solo aparece el de CMF). |
| `me.json` | `/api/participante/me` | Perfil de Edo + equipo Chispla + entregables + miembros. |
| `leaderboard.json` | `/api/leaderboard/public` | Ranking en vivo · pesos reales: M1=10, M2=10, M3=18, M4=13, J1=17, J2=17, J3=15. |
| `recursos.json` | `/api/recursos` | Lista cruda de los 9 docs oficiales del Lab. |
| `recursos/*.md` | Idem, troceado por slug | Bases, rúbrica v3.3, técnica, legal-chile, educacion-financiera, comercial, evento, ciberseguridad, proteccion-datos. |

## Qué hacer con esto

- **Anclar fuentes y citas** para no alucinar regulación (M2 — datos responsables).
- **Verificar pesos de la rúbrica** — `leaderboard.json` tiene los pesos reales que usa el sistema (no los del dashboard original).
- **Plantilla de criterios** — los sub-checks A1-A6, B1-B4, J1.1-J3.4 de la rúbrica v3.3 se leen en `recursos/rubrica-impact-lab.md`.

## Cómo se regenera

```bash
# Sesión auth requerida (cookies.txt en .gitignore)
curl -sL -b cookies.txt "https://fintech.benditaia.cl/api/<endpoint>" -o docs/data/<archivo>
```

Endpoints útiles descubiertos en el JS del portal (`/_next/static/chunks/app/app/page-*.js`):

```
/api/briefs                       /api/recursos
/api/participante/me              /api/leaderboard/public
/api/participante/agenda          /api/agent/participante
/api/portal/me                    /api/portal/equipos
/api/bendi/dossier/:id            /api/bendi/pre-eval
```
