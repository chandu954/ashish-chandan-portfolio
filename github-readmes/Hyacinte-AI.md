# Hyacinte AI — Multi-Tenant RAG Backend

Production RAG infrastructure for a bilingual (EN/FR) executive-intelligence platform — tenant-isolated retrieval, source-grounded generation, and fully async document ingestion.

> Built as a 2-month freelance engagement (May–Jun 2026) for a Ghana-based client serving the ECOWAS region. This repository contains the backend prototype: retrieval, APIs, ingestion, and containerized deployment.

## Why it exists

Organizations in the region needed a question-answering system over their own documents — market reports, policy briefs, news digests — in English and French, with the hard guarantee that **no tenant ever sees another tenant's data**.

## Features

- **Multi-tenant RAG** — FastAPI + Qdrant + PostgreSQL + Redis.
- **Tenant isolation at the query layer** — JWT + RBAC scoping with tenant IDs in vector metadata; no cross-org leakage.
- **Source-grounded generation** — Mistral Large 2 via AWS Bedrock, grounded strictly in retrieved, cited context.
- **Async document ingestion** — OCR → semantic chunking → embeddings run as Redis + Dramatiq background jobs, off the request path.
- **Bilingual answers** — EN/FR retrieval and generation from a single pipeline.
- **Dockerized handoff** — all services containerized with an ops runbook.

## Architecture

```
QUERY PATH                          INGESTION PATH
user query                          documents
   │                                   │
   ▼                                   ▼
JWT + tenant ID                    OCR
   │                                   │
   ▼                                   ▼
Qdrant retrieval (tenant-scoped)   semantic chunking
   │                                   │
   ▼                                   ▼
retrieved context                  embeddings
   │                                   │
   ▼                                   ▼
Mistral Large 2 · AWS Bedrock      Qdrant (tenant-tagged)
   │
   ▼
cited response
```

## Metrics

| Metric | Value |
| --- | --- |
| RAGAS faithfulness | measured on bilingual eval set |
| RAGAS context precision | measured on bilingual eval set |
| Cross-tenant leaks (client security audit) | 0 |
| Cost per grounded query | tracked per run (Bedrock) |
| Languages | EN / FR |

*Fill in the measured values from your RAGAS runs before sharing this README.*

## Tech stack

- **AI**: Mistral Large 2 · AWS Bedrock · Sentence Transformers
- **Backend**: FastAPI · SQLAlchemy 2.0 · asyncpg
- **Data**: PostgreSQL · Qdrant · Redis
- **Processing**: OCR · Semantic Chunking · Embeddings · Dramatiq
- **Infrastructure**: Docker

## Getting started

> The codebase was delivered to the client under a freelance agreement and is not public. Contact me to discuss the work — or fork the public RAG projects (Research-Swarm, Eleva) for reference implementations of the patterns above.

## Roadmap

- [ ] Automated RAGAS CI eval on every ingestion change
- [ ] Hybrid search (BM25 + vector)
- [ ] Streamed responses

## Links

- Case study: part of [ashishchandan.com](https://ashishchandan.com/#case-study) (Hyacinte AI)
