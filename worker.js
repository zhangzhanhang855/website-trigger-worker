export default {
  // 1. 响应浏览器/HTTP 请求（解决打开报 1101 的问题）
  async fetch(request, env, ctx) {
    const targetUrl = "https://neteasemusicdl.onrender.com";
    try {
      const res = await fetch(targetUrl, {
        headers: { "User-Agent": "Render-KeepAlive/1.0" }
      });
      return new Response(`Manual ping sent! Target responded with status: ${res.status}`, {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    } catch (err) {
      return new Response(`Ping failed: ${err.message}`, { status: 500 });
    }
  },

  // 2. 响应每 10 分钟的 Cron 定时触发器
  async scheduled(event, env, ctx) {
    const targetUrl = "https://neteasemusicdl.onrender.com";
    try {
      const res = await fetch(targetUrl, {
        headers: { "User-Agent": "Render-KeepAlive/1.0" }
      });
      console.log(`Cron Ping Success: ${res.status}`);
    } catch (err) {
      console.error(`Cron Ping Error: ${err.message}`);
    }
  }
};
