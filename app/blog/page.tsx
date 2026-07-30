import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../components/DetailHeader";

export const metadata: Metadata = {
  title: "Blog | Kripto Uyum Pusulası",
  description: "Kripto saklama, piyasa yapısı, uyum ve operasyon konularında kapsamlı uygulama yazıları.",
};

const posts = [
  {
    no: "01",
    category: "SAKLAMA OPERASYONLARI",
    time: "12 dk okuma",
    title: "Saklamada ilklendirme nedir?",
    description: "Anahtar üretimi, HSM/MPC, görevler ayrılığı, test ve kanıt paketini kapsayan güvenli canlıya geçiş sürecini adım adım inceleyin.",
    href: "/blog/saklamada-ilklendirme",
    visual: "ceremony",
  },
  {
    no: "02",
    category: "PİYASA MİKROYAPISI",
    time: "11 dk okuma",
    title: "Piyasa yapıcı nedir?",
    description: "Kotasyon, spread, envanter riski, sözleşme, gözetim ve piyasa kalitesi metrikleriyle piyasa yapıcılık modelini keşfedin.",
    href: "/blog/piyasa-yapici",
    visual: "market",
  },
];

function PostVisual({ type, no }: { type: string; no: string }) {
  if (type === "ceremony") {
    return (
      <div className="post-visual ceremony">
        <span className="post-index">{no}</span>
        <div className="key-ceremony" aria-hidden="true">
          <span className="key-core">KEY</span>
          <i className="key-node n1">A</i><i className="key-node n2">B</i><i className="key-node n3">C</i>
        </div>
      </div>
    );
  }

  return (
    <div className="post-visual market">
      <span className="post-index">{no}</span>
      <div className="order-book" aria-hidden="true">
        <div className="ask"><i /><i /><i /><i /></div>
        <span>SPREAD</span>
        <div className="bid"><i /><i /><i /><i /></div>
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
        <p>Saklama operasyonlarından piyasa mikroyapısına, teknik ve düzenleyici kavramları karar vericiler ile uygulayıcılar için derinleştiriyoruz.</p>
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
