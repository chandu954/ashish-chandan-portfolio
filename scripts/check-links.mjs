const URLS = [
  "https://github.com/chandu954",
  "https://www.linkedin.com/in/ashish-chandan-4421a2259",
  "https://github.com/chandu954/Research-Swarm",
  "https://github.com/chandu954/Eleva",
  "https://github.com/chandu954/ai-workflow-infrastructure-platform",
  "https://github.com/chandu954/QuickCart",
  "https://github.com/chandu954/khetika-webapp",
  "https://github.com/chandu954/QuickChat",
  "https://research-swarm-omega.vercel.app/",
  "https://eleva-beige.vercel.app/eleva",
  "https://quick-cart-woad-omega.vercel.app",
  "https://khetika-webapp.vercel.app",
  "https://quick-chat-client.vercel.app",
];

const TIMEOUT_MS = 10000;

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let res = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: controller.signal,
    });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, { method: "GET", redirect: "follow", signal: controller.signal });
    }
    return { url, status: res.status, ok: res.ok };
  } catch (err) {
    return { url, status: err.name === "AbortError" ? "timeout" : "error", ok: false };
  } finally {
    clearTimeout(timer);
  }
}

const results = await Promise.all(URLS.map(check));

let failed = 0;
for (const r of results) {
  const mark = r.ok ? "✓" : "✗";
  console.log(`${mark} ${r.status} ${r.url}`);
  if (!r.ok) failed++;
}

console.log(`\n${results.length - failed}/${results.length} links reachable`);
process.exit(failed > 0 ? 1 : 0);
