export default {
  async scheduled(event, env, ctx) {
    const url = "https://neteasemusicdl.onrender.com";
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Render-KeepAlive/1.0" }
      });
      console.log(`Ping 成功: 状态码 ${res.status}`);
    } catch (err) {
      console.error("Ping 失败:", err);
    }
  }
};
