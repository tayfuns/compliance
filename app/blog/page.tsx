import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../components/DetailHeader";

export const metadata: Metadata = {
  title: "Blog | Kripto Uyum Pusulası",
  description: "Kripto saklama, GRC, yönetişim, risk yönetimi, uyum ve operasyon konularında kapsamlı uygulama yazıları.",
};

const posts = [
  {
    no: "01",
    category: "MÜŞTERİ EDİNİMİ & KYC",
    time: "15 dk okuma",
    title: "Kripto borsalarında müşteri edinimi",
    description: "Uzaktan, yüz yüze ve Türk uyruklu olmayan müşterilerin kabulünde kimlik tespiti, gerekli veriler, risk kontrolleri ve güncel 2026 kurallarını inceleyin.",
    href: "/blog/kripto-borsalarinda-musteri-edinimi",
    visual: "onboarding",
  },
  {
    no: "02",
    category: "YÖNETİŞİM & UYUM",
    time: "14 dk okuma",
    title: "GRC nedir?",
    description: "Yönetişim, risk yönetimi ve uyumluluğu ortak bir karar sisteminde buluşturan GRC modelini; roller, kontroller, teknoloji ve güncel standartlarla inceleyin.",
    href: "/blog/grc-nedir",
    visual: "grc",
  },
];

function PostVisual({ type, no }: { type: string; no: string }) {
  if (type === "onboarding") {
    return (
      <div className="post-visual onboarding">
        <span className="post-index">{no}</span>
        <div className="onboarding-model" aria-hidden="true">
          <div className="profile-card"><i /><b>KYC</b><span>DOĞRULANDI</span></div>
          <span className="onboarding-step s1">01</span>
          <span className="onboarding-step s2">02</span>
          <span className="onboarding-step s3">03</span>
        </div>
      </div>
    );
  }

  return (
    <div className="post-visual grc">
      <span className="post-index">{no}</span>
      <div className="grc-model" aria-hidden="true">
        <span className="grc-node gov">G</span>
        <span className="grc-node risk">R</span>
        <span className="grc-node comp">C</span>
        <b>GRC</b>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <main>
      <DetailHeader />
      <section className="detail-hero blog-index-hero">
        <div>
          <p className="eyebrow"><span /> UYGULAMA NOTLARI</p>
          <h1>Uyumu pratiğe<br /><em>çeviren yazılar.</em></h1>
        </div>
        <p>Müşteri ediniminden GRC’ye, teknik ve düzenleyici kavramları karar vericiler ile uygulayıcılar için derinleştiriyoruz.</p>
      </section>

      <section className="blog-index-list">
        {posts.map((post) => (
          <article className="blog-index-post" key={post.href}>
            <PostVisual type={post.visual} no={post.no} />
            <div className="blog-index-copy">
              <div className="post-meta"><span>{post.category}</span><time>{post.time}</time></div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href={post.href}>Yazının tamamını oku <span>→</span></a>
            </div>
          </article>
        ))}
      </section>

      <section className="blog-index-cta">
        <p className="eyebrow light"><span /> KONU ÖNERİSİ</p>
        <h2>Hangi uyum konusunu<br /><em>derinleştirelim?</em></h2>
        <p>Yeni yazı önerilerinizi veya danışmanlık ihtiyaçlarınızı bizimle paylaşın.</p>
        <a href="/#iletisim">İletişime geçin <span>→</span></a>
      </section>
      <DetailFooter />
    </main>
  );
}
