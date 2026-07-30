import { ContactForm } from "./ContactForm";

const spkListUrl =
  "https://spk.gov.tr/kurumlar/kripto-varlik-hizmet-saglayicilar/faaliyette-bulunanlar-listesi";

const obligations = [
  {
    no: "01",
    title: "Yetkilendirme ve kurumsal yapı",
    text: "Kuruluş, faaliyet izni, ortaklık yapısı, pay devirleri, yönetici yeterliliği ve organizasyon SPK’nın III-35/B.1 çerçevesinde ele alınır.",
    tags: ["SPK izni", "Yönetişim", "Asgari sermaye"],
  },
  {
    no: "02",
    title: "Faaliyet, saklama ve sermaye yeterliliği",
    text: "Sunulabilecek hizmetler; listeleme, alım-satım, transfer ve saklama akışları ile likidite ve sermaye yeterliliği III-35/B.2 kapsamında yönetilir.",
    tags: ["Müşteri varlığı", "Saklama", "Listeleme"],
  },
  {
    no: "03",
    title: "MASAK ve finansal suçlarla mücadele",
    text: "Müşterini tanı, gerçek faydalanıcı, uzaktan kimlik tespiti, seyahat kuralı, şüpheli işlem bildirimi ve risk temelli sıkılaştırılmış tedbirler birlikte işletilir.",
    tags: ["KYC / KYB", "ŞİB", "Travel Rule"],
  },
  {
    no: "04",
    title: "Bilgi sistemleri ve operasyonel dayanıklılık",
    text: "Erişim kontrolleri, görevler ayrılığı, anahtar yönetimi, olay müdahalesi, iş sürekliliği ve düzenli bağımsız denetim kanıtlanabilir olmalıdır.",
    tags: ["Siber güvenlik", "İş sürekliliği", "Denetim izi"],
  },
  {
    no: "05",
    title: "Müşteri koruması ve kayıt düzeni",
    text: "Müşteri varlıklarının ayrıştırılması, mutabakat, ücret ve risk açıklamaları, emir kayıtları, şikâyet yönetimi ve rezerv kanıtı süreçleri uçtan uca tasarlanır.",
    tags: ["Ayrıştırma", "Mutabakat", "Rezerv kanıtı"],
  },
  {
    no: "06",
    title: "Veri, gizlilik ve pazarlama",
    text: "KVKK yükümlülükleri, saklama süreleri, açık rıza gerektiren alanlar ve yanıltıcı olmayan tanıtım dili; ürün ve büyüme akışlarının parçasıdır.",
    tags: ["KVKK", "Aydınlatma", "Şeffaf iletişim"],
  },
];

const timeline = [
  ["02.07.2024", "7518 sayılı Kanun", "Kripto varlık hizmet sağlayıcılar SPK düzenleme ve denetimine alındı."],
  ["13.03.2025", "İki temel SPK Tebliği", "III-35/B.1 ve III-35/B.2 yürürlüğe girdi."],
  ["12.06.2025", "Uzaktan kimlik tespiti", "MASAK Genel Tebliği değişikliğiyle KVHS usulleri netleştirildi."],
  ["Sürekli", "Risk bazlı uyum", "Rehberler, kurul kararları ve faaliyet listeleri düzenli izlenmeli."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Kripto Uyum Pusulası ana sayfa">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>Kripto Uyum<br /><b>Pusulası</b></span>
        </a>
        <nav aria-label="Ana menü">
          <a href="/mevzuat">Mevzuat</a>
          <a href="/fraud">Fraud</a>
          <a href="/blog">Blog</a>
          <a href="#iletisim">İletişim</a>
        </nav>
        <a className="nav-cta" href={spkListUrl} target="_blank" rel="noreferrer">
          SPK faaliyet listesi <span>↗</span>
        </a>
      </header>

      <section className="hero" id="ust">
        <div className="hero-copy">
          <p className="eyebrow"><span /> TÜRKİYE KRİPTO UYUM REHBERİ</p>
          <h1>Kripto işinizi<br />mevzuatla <em>uyumlu</em><br />büyütün.</h1>
          <p className="hero-lead">
            Türkiye’de faaliyet gösteren kripto varlık platformları ve saklama kuruluşları için
            güncel düzenlemeleri, operasyonel yükümlülükleri ve uygulama notlarını tek yerde izleyin.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/mevzuat">Mevzuatı incele <span>→</span></a>
            <a className="text-link" href="/blog">Son yazıları oku <span>→</span></a>
          </div>
        </div>
        <div className="hero-orbit" aria-label="SPK, MASAK, KVKK ve bilgi sistemleri uyum alanları">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-center">
            <small>UYUM</small>
            <strong>360°</strong>
            <span>mevzuattan<br />operasyona</span>
          </div>
          <div className="orbit-pill pill-spk"><b>SPK</b><span>Yetkilendirme</span></div>
          <div className="orbit-pill pill-masak"><b>MASAK</b><span>AML / CFT</span></div>
          <div className="orbit-pill pill-kvkk"><b>KVKK</b><span>Veri güvenliği</span></div>
          <div className="orbit-pill pill-tech"><b>BT</b><span>Dayanıklılık</span></div>
        </div>
      </section>

      <section className="notice">
        <span className="notice-icon">i</span>
        <p><b>Önemli not:</b> SPK “Faaliyette Bulunanlar Listesi” geçici niteliktedir. Listede yer almak, kuruluşun yetkilendirildiği anlamına gelmez.</p>
        <a href={spkListUrl} target="_blank" rel="noreferrer">Güncel listeyi görüntüle <span>↗</span></a>
      </section>

      <section className="section" id="mevzuat">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> UYUM ÇERÇEVESİ</p>
            <h2>Temel yükümlülükler,<br /><em>net bir çerçevede.</em></h2>
          </div>
          <p>Uyum, tek bir kontrol listesi değildir. Lisanslamadan müşteri varlıklarının korunmasına, finansal suçlarla mücadeleden bilgi sistemlerine uzanan bütünsel bir işletim modelidir.</p>
        </div>
        <div className="obligation-grid">
          {obligations.map((item) => (
            <article className="obligation-card" key={item.no}>
              <span className="card-no">{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="legal-note">Bu içerik genel bilgilendirme amaçlıdır; hukuki görüş veya yetkilendirme değerlendirmesi değildir. Somut durum için güncel mevzuat ve uzman görüşü esas alınmalıdır.</p>
      </section>

      <section className="roadmap" id="yol-haritasi">
        <div className="roadmap-intro">
          <p className="eyebrow light"><span /> DÜZENLEME YOL HARİTASI</p>
          <h2>Dönüm noktalarını<br /><em>kaçırmayın.</em></h2>
          <p>Mevzuat hızla gelişiyor. Kurum içi sorumluları, politika güncellemelerini ve kanıt setlerini her değişiklikte yeniden eşleyin.</p>
          <a href="https://mevzuat.spk.gov.tr/" target="_blank" rel="noreferrer">SPK Mevzuat Sistemi <span>↗</span></a>
        </div>
        <div className="timeline">
          {timeline.map(([date, title, body], index) => (
            <div className="timeline-item" key={date}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div>
                <time>{date}</time>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-fraud">
        <div className="home-fraud-intro">
          <p className="eyebrow light"><span /> FRAUD KURAL KÜTÜPHANESİ</p>
          <h2>Şüpheli davranışı<br /><em>erken yakalayın.</em></h2>
          <p>Kimlikten zincir üstü transfere, hesap ele geçirmeden piyasa suistimaline kadar kripto platformlarında kullanılan fraud kontrollerini tek bir kütüphanede topladık.</p>
          <a href="/fraud">30 kuralın detaylarını incele <span>→</span></a>
        </div>
        <div className="home-fraud-groups">
          <a href="/fraud#ID"><span>01</span><b>Kimlik & Hesap Açılışı</b><small>Çoklu kimlik, sentetik profil, cihaz ilişkisi</small></a>
          <a href="/fraud#ATO"><span>02</span><b>Hesap Ele Geçirme</b><small>MFA, yeni cihaz, şifre ve API anomalileri</small></a>
          <a href="/fraud#PAY"><span>03</span><b>Para Yatırma & Ödeme</b><small>Üçüncü kişi, parçalı fonlama, chargeback</small></a>
          <a href="/fraud#CHAIN"><span>04</span><b>Transfer & Zincir Üstü</b><small>Yüksek riskli cüzdan, mixer ve bridge kullanımı</small></a>
          <a href="/fraud#BEH"><span>05</span><b>Müşteri Davranışı & Scam</b><small>Mule, uzaktan erişim ve yatırım dolandırıcılığı</small></a>
          <a href="/fraud#MKT"><span>06</span><b>Piyasa Suistimali</b><small>Wash trading, spoofing ve pump-and-dump</small></a>
        </div>
      </section>

      <section className="section blog-section" id="blog">
        <div className="section-heading blog-heading">
          <div>
            <p className="eyebrow"><span /> UYGULAMA NOTLARI</p>
            <h2>Uyumu pratiğe<br /><em>çeviren yazılar.</em></h2>
          </div>
          <p>Saklama operasyonlarından piyasa yapıcılığına, teknik kavramları karar vericiler ve uygulayıcılar için sadeleştiriyoruz.</p>
        </div>

        <div className="home-blog-grid">
          <article className="feature-post home-post" id="saklamada-ilklendirme">
            <div className="post-visual ceremony">
              <span className="post-index">01</span>
              <div className="key-ceremony" aria-hidden="true">
                <span className="key-core">KEY</span>
                <i className="key-node n1">A</i><i className="key-node n2">B</i><i className="key-node n3">C</i>
              </div>
            </div>
            <div className="post-content">
              <div className="post-meta"><span>SAKLAMA</span><time>12 dk okuma</time></div>
              <h3>Saklamada ilklendirme nedir?</h3>
              <p className="post-deck">Bir saklama sisteminin ilk güven kökünün oluşturulduğu; anahtarların, yetkilerin ve kontrol politikalarının canlı kullanıma hazırlandığı süreçtir.</p>
              <a className="read-more" href="/blog/saklamada-ilklendirme">Devamını oku <span>→</span></a>
            </div>
          </article>

          <article className="feature-post home-post" id="piyasa-yapici">
            <div className="post-visual market">
              <span className="post-index">02</span>
              <div className="order-book" aria-hidden="true">
                <div className="ask"><i /><i /><i /><i /></div>
                <span>SPREAD</span>
                <div className="bid"><i /><i /><i /><i /></div>
              </div>
            </div>
            <div className="post-content">
              <div className="post-meta"><span>PİYASA MİKROYAPISI</span><time>11 dk okuma</time></div>
              <h3>Piyasa yapıcı nedir?</h3>
              <p className="post-deck">İki yönlü kotasyon vererek işlem yapılabilirliği destekleyen; spread, envanter, teknoloji ve uyum risklerini yöneten profesyonel katılımcıdır.</p>
              <a className="read-more" href="/blog/piyasa-yapici">Devamını oku <span>→</span></a>
            </div>
          </article>
        </div>
        <a className="all-posts-link" href="/blog">Tüm blog yazılarını görüntüle <span>→</span></a>
      </section>

      <section className="sources">
        <div>
          <p className="eyebrow"><span /> RESMİ KAYNAKLAR</p>
          <h2>Doğrudan kaynağa gidin.</h2>
        </div>
        <div className="source-links">
          <a href={spkListUrl} target="_blank" rel="noreferrer"><span>01</span><b>SPK Faaliyette Bulunanlar Listesi</b><i>↗</i></a>
          <a href="https://mevzuat.spk.gov.tr/" target="_blank" rel="noreferrer"><span>02</span><b>SPK Mevzuat Sistemi</b><i>↗</i></a>
          <a href="https://masak.hmb.gov.tr/haberler/kripto-varlik-hizmet-saglayicilar-rehberi-guncellendi-ve-yayimlandi-2" target="_blank" rel="noreferrer"><span>03</span><b>MASAK KVHS Rehberi</b><i>↗</i></a>
        </div>
      </section>

      <section className="contact" id="iletisim">
        <div className="contact-copy">
          <p className="eyebrow light"><span /> İLETİŞİM</p>
          <h2>Uyum yolculuğunuzu<br /><em>birlikte netleştirelim.</em></h2>
          <p>Mevzuat haritalama, saklama operasyonları veya uyum programı hakkında konuşmak için formu doldurun.</p>
          <div className="contact-detail">
            <span>@</span>
            <div><small>E-POSTA</small><a href="mailto:merhaba@kriptouyumpusulasi.com">merhaba@kriptouyumpusulasi.com</a></div>
          </div>
        </div>
        <ContactForm />
      </section>

      <footer>
        <a className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>Kripto Uyum<br /><b>Pusulası</b></span>
        </a>
        <p>Türkiye kripto ekosistemi için bağımsız bilgilendirme platformu.</p>
        <div>
          <a href="/mevzuat">Mevzuat</a>
          <a href="/blog">Blog</a>
          <a href="#iletisim">İletişim</a>
        </div>
        <small>© 2026 Kripto Uyum Pusulası</small>
      </footer>
    </main>
  );
}
