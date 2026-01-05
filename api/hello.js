// دالة بسيطة للترحيب
export default function handler(req, res) {
  res.status(200).json({ message: "مرحباً بك في مشروع Mister-AI على Vercel!" });
}
