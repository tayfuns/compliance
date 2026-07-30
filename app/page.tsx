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
          <a href="#blog">Blog</a>
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
            <a className="text-link" href="#blog">Son yazıları oku <span>→</span></a>
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

      <section className="section blog-section" id="blog">
        <div className="section-heading blog-heading">
          <div>
            <p className="eyebrow"><span /> UYGULAMA NOTLARI</p>
            <h2>Uyumu pratiğe<br /><em>çeviren yazılar.</em></h2>
          </div>
          <p>Saklama operasyonlarından piyasa yapıcılığına, teknik kavramları karar vericiler ve uygulayıcılar için sadeleştiriyoruz.</p>
        </div>

        <article className="feature-post" id="saklamada-ilklendirme">
          <div className="post-visual ceremony">
            <span className="post-index">01</span>
            <div className="key-ceremony" aria-hidden="true">
              <span className="key-core">KEY</span>
              <i className="key-node n1">A</i><i className="key-node n2">B</i><i className="key-node n3">C</i>
            </div>
          </div>
          <div className="post-content">
            <div className="post-meta"><span>SAKLAMA</span><time>8 dk okuma</time></div>
            <h3>Saklamada ilklendirme nedir?</h3>
            <p className="post-deck">Bir saklama sisteminin canlı kullanıma güvenli, kontrollü ve kanıtlanabilir biçimde hazırlanmasıdır. Cüzdan açmaktan çok daha fazlasını kapsar.</p>
            <div className="post-body">
              <p><b>İlklendirme</b>, kripto varlıkların saklanacağı altyapının ilk güven kökünün oluşturulduğu süreçtir. Anahtarların veya anahtar parçalarının üretilmesi; HSM, MPC ya da çoklu imza politikasının kurulması; yetkilerin dağıtılması ve bütün adımların değiştirilemez kanıtlarla kaydedilmesi bu sürecin merkezindedir.</p>
              <h4>İyi bir ilklendirme töreni neleri kapsar?</h4>
              <ul>
                <li><b>Önceden onaylı senaryo:</b> Katılımcılar, roller, eşikler, cihazlar ve başarısızlık adımları yazılıdır.</li>
                <li><b>Görevler ayrılığı:</b> Tek kişinin anahtara, yedeklere veya işlem onayına tek başına hâkim olması engellenir.</li>
                <li><b>Temiz ortam ve doğrulama:</b> Donanım bütünlüğü, yazılım sürümleri, entropi kaynakları ve ağ izolasyonu kontrol edilir.</li>
                <li><b>Yedekleme ve kurtarma:</b> Parçalar coğrafi ve kurumsal olarak ayrıştırılır; kontrollü bir kurtarma provası yapılır.</li>
                <li><b>Test ve mutabakat:</b> Küçük tutarlı yatırma-çekme işlemleri, adres beyaz listeleme ve muhasebe kayıtları uçtan uca denenir.</li>
              </ul>
              <p>Çıktı yalnızca çalışan bir cüzdan değildir. Kim-ne zaman-ne yaptı sorularını yanıtlayan tören tutanağı, anahtar envanteri, yetki matrisi, yapılandırma özetleri ve test sonuçlarından oluşan bir <b>kanıt paketi</b> üretilmelidir. Böylece operasyon, denetim ve olay müdahalesi aynı güven temelinde buluşur.</p>
            </div>
            <a className="read-more" href="/blog/saklamada-ilklendirme">Devamını oku <span>→</span></a>
          </div>
        </article>

        <article className="feature-post reverse" id="piyasa-yapici">
          <div className="post-visual market">
            <span className="post-index">02</span>
            <div className="order-book" aria-hidden="true">
              <div className="ask"><i /><i /><i /><i /></div>
              <span>SPREAD</span>
              <div className="bid"><i /><i /><i /><i /></div>
            </div>
          </div>
          <div className="post-content">
            <div className="post-meta"><span>PİYASA MİKROYAPISI</span><time>6 dk okuma</time></div>
            <h3>Piyasa yapıcı nedir?</h3>
            <p className="post-deck">Alış ve satış yönünde sürekli kotasyon vererek işlem yapılabilirliği destekleyen; bunu yaparken fiyat, envanter ve karşı taraf riski yöneten katılımcıdır.</p>
            <div className="post-body">
              <p>Piyasa yapıcı, belirli bir kripto varlıkta eşzamanlı alış ve satış emirleri bulundurarak likidite sağlar. Alış ile satış fiyatı arasındaki fark <b>spread</b> olarak adlandırılır. Rekabetçi ve derin bir emir defterinde spread genellikle daralır; yatırımcılar daha düşük fiyat etkisiyle işlem yapabilir.</p>
              <h4>Nasıl çalışır?</h4>
              <ul>
                <li><b>Kotasyon:</b> Belirlenen azami spread, asgari miktar ve süre kriterlerine göre çift yönlü emir üretir.</li>
                <li><b>Envanter yönetimi:</b> Fiyat hareketleriyle biriken varlık riskini limitler ve gerektiğinde başka piyasalarda dengeler.</li>
                <li><b>Teknoloji:</b> Düşük gecikmeli bağlantı, kesinti korumaları ve otomatik risk limitleriyle emirleri günceller.</li>
                <li><b>Gözetim:</b> Manipülatif işlem, yapay hacim, kendi kendine işlem ve çıkar çatışması riskleri izlenir.</li>
              </ul>
              <p>Piyasa yapıcılığı fiyatın yükselmesini garanti etmez; amaç düzenli bir alım-satım ortamını desteklemektir. Platform ile piyasa yapıcı arasındaki sözleşme, teşvikler, raporlama, olağanüstü piyasa koşulları ve fesih kuralları açık olmalıdır. Listeleme, gözetim ve çıkar çatışması kontrolleri organizasyon içinde birbirinden ayrıştırılmalıdır.</p>
            </div>
            <a className="read-more" href="/blog/piyasa-yapici">Devamını oku <span>→</span></a>
          </div>
        </article>
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
          <a href="#blog">Blog</a>
          <a href="#iletisim">İletişim</a>
        </div>
        <small>© 2026 Kripto Uyum Pusulası</small>
      </footer>
    </main>
  );
}
