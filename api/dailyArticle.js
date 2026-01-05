import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    // جلب آخر الأخبار الجزائرية من Google News RSS (مثال)
    const rssUrl = "https://news.google.com/rss/search?q=الجزائر&hl=ar&gl=DZ&ceid=DZ:ar";
    const rssResponse = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
    const rssData = await rssResponse.json();

    // اختيار أهم 5 أخبار
    const topNews = rssData.items.slice(0, 5).map(item => `- ${item.title}`).join("\n");

    // توليد مقال يومي تلقائي
    const article = {
      title: `ملخص أخبار الجزائر اليوم – Mister-AI`,
      body: `شهدت الجزائر اليوم عدة تطورات بارزة. أبرز الأخبار: \n${topNews}\n\n` +
            `هذا المقال تم إنشاؤه تلقائيًا بواسطة Mister-AI باستخدام مصادر إخبارية موثوقة.` 
    };

    res.status(200).json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ title: "خطأ", body: "حدث خطأ أثناء توليد المقال." });
  }
}
