import { ContactForm } from "./ContactForm";
import { DisclaimerModal } from "./components/DisclaimerModal";

const spkListUrl =
  "https://spk.gov.tr/kurumlar/kripto-varlik-hizmet-saglayicilar/faaliyette-bulunanlar-listesi";

const sectorRegulations = [
  {
    no: "01",
    title: "Ödemelerde Kripto Varlıkların Kullanılmamasına Dair Yönetmelik",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=38569&MevzuatTur=7&MevzuatTertip=5",
  },
  {
    no: "02",
    title: "6362 Sayılı Sermaye Piyasası Kanunu",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6362&MevzuatTur=1&MevzuatTertip=5",
  },
  {
    no: "03",
    title: "Kripto Varlık Hizmet Sağlayıcıların Kuruluş ve Faaliyet Esasları Hakkında Tebliğ (III-35/B.1)",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=42329&MevzuatTur=9&MevzuatTertip=5",
    gazetteUrl: "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-5.htm",
  },
  {
    no: "04",
    title: "Kripto Varlık Hizmet Sağlayıcıların Çalışma Usul ve Esasları ile Sermaye Yeterliliği Hakkında Tebliğ (III-35/B.2)",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=42327&MevzuatTur=9&MevzuatTertip=5",
    gazetteUrl: "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-6.htm",
  },
  {
    no: "05",
    title: "Aracı Kurumlar, Portföy Yönetim Şirketleri ve Kripto Varlık Hizmet Sağlayıcılar Tarafından Kullanılacak Uzaktan Kimlik Tespiti Yöntemlerine ve Elektronik Sözleşme İlişkisinin Kurulmasına İlişkin Tebliğ (III-42.1)",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=39408&MevzuatTur=9&MevzuatTertip=5",
  },
  {
    no: "06",
    title: "Bilgi Sistemleri Bağımsız Denetim Tebliği (III-62.2)",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=24295&MevzuatTur=9&MevzuatTertip=5",
    gazetteUrl: "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-7.htm",
  },
  {
    no: "07",
    title: "Bilgi Sistemleri Yönetimine İlişkin Usul ve Esaslar Tebliği (VII-128.10)",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=42464&MevzuatTur=9&MevzuatTertip=5",
    gazetteUrl: "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-8.htm",
  },
  {
    no: "08",
    title: "Kripto Varlık Hizmet Sağlayıcıların Bilgi Sistemleri ve Teknolojik Altyapılarına İlişkin Kriterler",
    relatedUrl: "https://bilgem.tubitak.gov.tr/wp-content/uploads/sites/8/TUBITAK-KVHS-Bilgi-Sistemleri-ve-Teknolojik-Altyapi-Kriterleri_25.10.25_r1.1.pdf",
  },
  {
    no: "09",
    title: "Kripto Varlık Merkezi Kayıt Sistemi İş ve İşlem Kuralları Yönergesi",
    relatedUrl: "https://www.mkk.com.tr/sites/default/files/2025-07/KVMKS_Is_ve_Islem_Kurallari_Yonergesi_1.pdf",
  },
  {
    no: "10",
    title: "Suç Gelirlerinin Aklanmasının ve Terörün Finansmanının Önlenmesine Dair Tedbirler Hakkında Yönetmelik",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=200713012&MevzuatTur=21&MevzuatTertip=5",
  },
  {
    no: "11",
    title: "Suç Gelirlerinin Aklanmasının ve Terörün Finansmanının Önlenmesine İlişkin Yükümlülüklere Uyum Programı Hakkında Yönetmelik",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=12426&MevzuatTur=7&MevzuatTertip=5",
  },
  {
    no: "12",
    title: "Mali Suçları Araştırma Kurulu Başkanlığı Elektronik Tebligat Sistemine İlişkin Usul ve Esaslar Hakkında Yönetmelik",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=20631&MevzuatTur=7&MevzuatTertip=5",
  },
  {
    no: "13",
    title: "Mali Suçları Araştırma Kurulu Genel Tebliği (Sıra No: 29)",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=42465&MevzuatTur=9&MevzuatTertip=5",
  },
  {
    no: "14",
    title: "Mali Suçları Araştırma Kurulu Genel Tebliği (Sıra No: 19)",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=38566&MevzuatTur=9&MevzuatTertip=5",
  },
  {
    no: "15",
    title: "Mali Suçları Araştırma Kurulu Genel Tebliği (Sıra No: 21)",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=39833&MevzuatTur=9&MevzuatTertip=5",
  },
  {
    no: "16",
    title: "Ceza Muhakemesi Kanunu",
    relatedUrl: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=5271&MevzuatTur=1&MevzuatTertip=5",
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
          <a href="/seyahat-kurali">Seyahat Kuralı</a>
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
            güncel düzenlemeleri, yükümlülükleri ve uygulama notlarını tek yerde izleyin.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/mevzuat">Mevzuatı incele <span>→</span></a>
            <a className="text-link" href="/blog">Son yazıları oku <span>→</span></a>
          </div>
        </div>
        <div className="hero-orbit" aria-label="SPK, MASAK ve TÜBİTAK uyum alanları">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-center">
            <small>UYUM</small>
            <strong>360°</strong>
            <span>mevzuattan<br />operasyona</span>
          </div>
          <div className="orbit-pill pill-spk"><b>SPK</b><span>Yetkilendirme</span></div>
          <div className="orbit-pill pill-masak"><b>MASAK</b><span>AML / CFT</span></div>
          <div className="orbit-pill pill-tubitak"><b>TÜBİTAK</b><span>Teknoloji kriterleri</span></div>
        </div>
      </section>

      <section className="turkiye-crypto-preview">
        <div>
          <p className="eyebrow"><span /> TÜRKİYE’DE KRİPTO</p>
          <h2>Düzenlemelerle olgunlaşan<br /><em>bir ekosistem.</em></h2>
        </div>
        <div className="turkiye-crypto-copy">
          <p>Türkiye’de kripto varlık ekosistemi, hızlı büyüme döneminin ardından adım adım denetime tabi, daha kurumsal ve disiplinli bir yapıya dönüştü.</p>
          <p>Kripto varlıklara ilişkin ilk temel düzenlemelerden biri, Türkiye Cumhuriyet Merkez Bankası tarafından 16 Nisan 2021’de yayımlandı. Bu düzenlemeyle kripto varlıkların ödemelerde doğrudan veya dolaylı biçimde kullanılması ve bu kullanıma yönelik hizmet sunulması yasaklandı.</p>
          <a href="/turkiyede-kripto">Devamını oku <span>→</span></a>
        </div>
      </section>

      <section className="section" id="mevzuat">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> UYUM ÇERÇEVESİ</p>
            <h2>Temel yükümlülükler.</h2>
          </div>
          <p>Uyum, tek bir kontrol listesi değildir. Lisanslamadan müşteri varlıklarının korunmasına, finansal suçlarla mücadeleden bilgi sistemlerine uzanan bütünsel bir işletim modelidir.</p>
        </div>
        <div className="obligation-grid">
          {sectorRegulations.map((item) => (
            <article className="obligation-card regulation-card" key={item.no}>
              <span className="card-no">{item.no}</span>
              <h3>{item.title}</h3>
              <div className="regulation-card-links">
                <a href={item.relatedUrl} target="_blank" rel="noreferrer">İlgili link <span>↗</span></a>
                {item.gazetteUrl && (
                  <a href={item.gazetteUrl} target="_blank" rel="noreferrer">Resmî Gazete Linki <span>↗</span></a>
                )}
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
          <p>Müşteri ediniminden GRC’ye, teknik kavramları karar vericiler ve uygulayıcılar için sadeleştiriyoruz.</p>
        </div>

        <div className="home-blog-grid">
          <article className="feature-post home-post" id="musteri-edinimi">
            <div className="post-visual onboarding">
              <span className="post-index">01</span>
              <div className="onboarding-model" aria-hidden="true">
                <div className="profile-card"><i /><b>KYC</b><span>DOĞRULANDI</span></div>
                <span className="onboarding-step s1">01</span>
                <span className="onboarding-step s2">02</span>
                <span className="onboarding-step s3">03</span>
              </div>
            </div>
            <div className="post-content">
              <div className="post-meta"><span>MÜŞTERİ EDİNİMİ &amp; KYC</span><time>15 dk okuma</time></div>
              <h3>Kripto borsalarında müşteri edinimi</h3>
              <p className="post-deck">Uzaktan, yüz yüze ve yabancı müşteri kabulünde kimlik tespiti, alınacak veriler ve risk kontrollerinin nasıl kurulacağını inceleyin.</p>
              <a className="read-more" href="/blog/kripto-borsalarinda-musteri-edinimi">Devamını oku <span>→</span></a>
            </div>
          </article>

          <article className="feature-post home-post" id="grc-nedir">
            <div className="post-visual grc">
              <span className="post-index">02</span>
              <div className="grc-model" aria-hidden="true">
                <span className="grc-node gov">G</span>
                <span className="grc-node risk">R</span>
                <span className="grc-node comp">C</span>
                <b>GRC</b>
              </div>
            </div>
            <div className="post-content">
              <div className="post-meta"><span>YÖNETİŞİM &amp; UYUM</span><time>14 dk okuma</time></div>
              <h3>GRC nedir?</h3>
              <p className="post-deck">Yönetişim, risk yönetimi ve uyumluluğu ortak hedefler, kontroller ve kanıtlar etrafında buluşturan bütünleşik yönetim yaklaşımıdır.</p>
              <a className="read-more" href="/blog/grc-nedir">Devamını oku <span>→</span></a>
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
          <DisclaimerModal />
        </div>
        <small>© 2026 Kripto Uyum Pusulası</small>
      </footer>
    </main>
  );
}
