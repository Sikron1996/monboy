export default async function handler(req, res) {
  const url = encodeURIComponent("https://api.opensea.io/api/v2/collections/monboy/nfts?limit=50");
  const proxy = "https://corsproxy.io/?url=" + url;

  try {
    const r = await fetch(proxy);
    const json = await r.json();
    res.status(200).json(json);
  } catch (e) {
    res.status(500).json({error:"Failed to load"});
  }
}
