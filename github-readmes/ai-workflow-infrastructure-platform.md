# AI Code Review Platform

Production-grade AI code review for every pull request — five specialized agents (security, performance, quality, testing, architecture) orchestrated with LangGraph, backed by RAG over the codebase and a team-memory learning system.

## Why it exists

Human review misses defects under deadline pressure, and single-model review is just "LLM with a prompt." This platform makes review **context-aware**: agents see the actual codebase, learn from past reviews, and integrate directly with GitHub.

## Features

- **Five review agents** — security, performance, quality, testing, architecture — each with a narrow mandate.
- **Team-memory learning** — findings from past PRs inform future reviews; the system gets better on your codebase.
- **RAG over the codebase + AST analysis** — reviews reference real symbols, call paths, and dependency structure.
- **GitHub integration** — webhooks trigger review; results land as inline comments with approve/request-changes.
- **Observability** — review latency, agent findings, and quality scores tracked per PR.

## Architecture

```
GitHub webhook (PR opened)
   │
   ▼
[orchestrator — LangGraph] ── diff + codebase snapshot
   │
   ├──► security agent   ──► CVSS-scored findings
   ├──► performance agent ──► latency / N+1 / hot paths
   ├──► quality agent    ──► duplication / dead code
   ├──► testing agent    ──► missing edge cases
   └──► architect agent  ──► service boundary issues
   │
   ▼
[team memory] ◄── prior findings on this codebase
   │
   ▼
[GitHub inline comments + approval recommendation]
```

## Metrics

| Metric | Value |
| --- | --- |
| Agents per review | 5 |
| Avg review time | real-time, auto-triggered on PR events |
| Concurrency | webhook-scaled (Celery workers) |
| Evaluation | labeled PR set — recall + false positives per agent |

*Fill in measured benchmark numbers from your own eval runs on a labeled PR dataset.*

## Tech stack

- **Orchestration**: LangGraph (agent graph + shared state)
- **Backend**: FastAPI, Celery (async job queue)
- **Retrieval**: Qdrant (codebase RAG), AST parsing
- **Frontend**: Next.js 15
- **Infrastructure**: Kubernetes, Docker, GitHub Apps (webhooks)

## Getting started

```bash
git clone https://github.com/chandu954/ai-workflow-infrastructure-platform
cd ai-workflow-infrastructure-platform
docker compose up -d          # API, worker, Qdrant, Postgres
# configure the GitHub App credentials, then:
python -m review.cli --pr <number> --repo <owner/name>
```

## Roadmap

- [ ] Public eval suite with labeled defect dataset
- [ ] Auto-generated review summaries for non-technical stakeholders
- [ ] Multi-repo onboarding UI

## Links

- GitHub: [chandu954/ai-workflow-infrastructure-platform](https://github.com/chandu954/ai-workflow-infrastructure-platform)
