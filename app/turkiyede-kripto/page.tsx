import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../components/DetailHeader";

export const metadata: Metadata = {
  title: "Türkiye’de Kripto | Kripto Uyum Pusulası",
  description: "Türkiye’de kripto varlık düzenlemelerinin gelişimi ve ilgili resmî kaynakların kronolojik listesi.",
};

const regulations = [
  {
    regulator: "TCMB",
    date: "16.04.2021",
    description: "Ödemelerde Kripto Varlıkların Kullanılmamasına Dair Yönetmelik",
    url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=38569&MevzuatTur=7&MevzuatTertip=5",
  },
  {
    regulator: "MASAK",
    date: "01.05.2021",
    description: "Suç Gelirlerinin Aklanmasının ve Terörün Finansmanının Önlenmesine Dair Tedbirler Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik",
    url: "https://www.resmigazete.gov.tr/eskiler/2021/05/20210501-5.pdf",
  },
  {
    regulator: "SPK",
    date: "02.07.2024",
    description: "Sermaye Piyasası Kanununda Değişiklik Yapılmasına Dair Kanun",
    url: "https://resmigazete.gov.tr/eskiler/2024/07/20240702-1.htm",
  },
  {
    regulator: "SPK",
    date: "02.07.2024",
    description: "Kripto Varlık Hizmet Sağlayıcılara İlişkin SPK Duyurusu",
    url: "https://spk.gov.tr/data/668412388f95db0c2c4e36d5/20240702_SPK_Duyuru.pdf",
  },
  {
    regulator: "SPK",
    date: "08.08.2024",
    description: "SPK 2024/38 Sayılı İlke Kararı",
    url: "https://spk.gov.tr/data/66b51e688f95db021892940c/2024-38.pdf",
  },
  {
    regulator: "SPK",
    date: "23.08.2024",
    description: "SPK 2024/42 Sayılı İlke Kararı",
    url: "https://spk.gov.tr/data/66c8d60f8f95db1c485d13be/2024-42.pdf",
  },
  {
    regulator: "SPK",
    date: "19.09.2024",
    description: "SPK 2024/48 Sayılı İlke Kararı",
    url: "https://spk.gov.tr/data/66ec7a468f95db223cb0e1a1/2024-48.pdf",
  },
  {
    regulator: "MASAK",
    date: "25.12.2024",
    description: "Suç Gelirlerinin Aklanmasının ve Terörün Finansmanının Önlenmesine Dair Tedbirler Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik",
    url: "https://www.resmigazete.gov.tr/eskiler/2024/12/20241225-1.pdf",
  },
  {
    regulator: "MASAK",
    date: "25.12.2024",
    description: "Mali Suçları Araştırma Kurulu Başkanlığı Elektronik Tebligat Sistemine İlişkin Usul ve Esaslar Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik",
    url: "https://www.resmigazete.gov.tr/eskiler/2024/12/20241225-3.htm",
  },
  {
    regulator: "MASAK",
    date: "25.12.2024",
    description: "Suç Gelirlerinin Aklanmasının ve Terörün Finansmanının Önlenmesine İlişkin Yükümlülüklere Uyum Programı Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik",
    url: "https://www.resmigazete.gov.tr/eskiler/2024/12/20241225-4.htm",
  },
  {
    regulator: "SPK",
    date: "13.03.2025",
    description: "Kripto Varlık Hizmet Sağlayıcıların Kuruluş ve Faaliyet Esasları Hakkında Tebliğ (III-35/B.1)",
    url: "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-5.htm",
  },
  {
    regulator: "SPK",
    date: "13.03.2025",
    description: "Kripto Varlık Hizmet Sağlayıcıların Çalışma Usul ve Esasları ile Sermaye Yeterliliği Hakkında Tebliğ (III-35/B.2)",
    url: "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-6.htm",
  },
  {
    regulator: "SPK",
    date: "13.03.2025",
    description: "Bilgi Sistemleri Bağımsız Denetim Tebliği (III-62.2)’nde Değişiklik Yapılmasına Dair Tebliğ",
    url: "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-7.htm",
  },
  {
    regulator: "SPK",
    date: "13.03.2025",
    description: "Bilgi Sistemleri Yönetimine İlişkin Usul ve Esaslar Tebliği (VII-128.10)",
    url: "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-8.htm",
  },
  {
    regulator: "TÜBİTAK",
    date: "30.04.2025",
    description: "Kripto Varlık Hizmet Sağlayıcıların Bilgi Sistemleri ve Teknolojik Altyapılarına İlişkin Kriterler",
    url: "https://bilgem.tubitak.gov.tr/wp-content/uploads/sites/8/TUBITAK-KVHS-Bilgi-Sistemleri-ve-Teknolojik-Altyapilarina-iliskin-Kriterler_r1_2.pdf",
  },
  {
    regulator: "SPK",
    date: "08.05.2025",
    description: "SPK 2025/29 Sayılı İlke Kararı",
    url: "https://spk.gov.tr/data/681d192e8f95db2864f99054/2025-29.pdf",
  },
  {
    regulator: "MASAK",
    date: "28.06.2025",
    description: "Mali Suçları Araştırma Kurulu Genel Tebliği (Sıra No: 29)",
    url: "https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=42465&MevzuatTur=9&MevzuatTertip=5",
  },
  {
    regulator: "SPK",
    date: "05.09.2025",
    description: "SPK 2025/47 Sayılı İlke Kararı",
    url: "https://spk.gov.tr/data/68bb33b78f95db2158bcacb9/2025-47.pdf",
  },
  {
    regulator: "SPK",
    date: "26.03.2026",
    description: "SPK 2026/18 Sayılı İlke Kararı",
    url: "https://spk.gov.tr/data/69c595a68f95db1e4440bc26/2026-18.pdf",
  },
];

export default function TurkiyedeKriptoPage() {
  return (
    <main>
      <DetailHeader />
      <section className="detail-hero turkiye-crypto-hero">
        <div>
          <p className="eyebrow"><span /> TÜRKİYE’DE KRİPTO</p>
          <h1>Serbest büyümeden<br /><em>düzenlenmiş pazara.</em></h1>
        </div>
        <p>Türkiye’de kripto varlık ekosisteminin düzenleyici dönüşümünü, temel dönüm noktaları ve doğrudan resmî kaynak bağlantılarıyla kronolojik olarak izleyin.</p>
      </section>

      <section className="turkiye-crypto-story">
        <div className="story-index">
          <span>2021</span>
          <i />
          <span>2026</span>
        </div>
        <div className="story-copy">
          <p className="article-lead">Türkiye’de kripto varlık ekosistemi, hızlı büyüme döneminin ardından adım adım denetime tabi, daha kurumsal ve disiplinli bir yapıya dönüştü.</p>
          <p>Kripto varlıklara ilişkin ilk temel düzenlemelerden biri, Türkiye Cumhuriyet Merkez Bankası tarafından 16 Nisan 2021’de yayımlandı. Bu düzenlemeyle kripto varlıkların ödemelerde doğrudan veya dolaylı biçimde kullanılması ve bu kullanıma yönelik hizmet sunulması yasaklandı.</p>
          <p>Kısa süre sonra, 1 Mayıs 2021’de yapılan mevzuat değişikliğiyle kripto varlık hizmet sağlayıcılar MASAK yükümlüsü kabul edildi. Böylece müşteri tanıma, gerçek faydalanıcının belirlenmesi, şüpheli işlem bildirimi ve kayıtların korunması gibi mali suçlarla mücadele yükümlülükleri sektörün temel sorumlulukları arasına girdi.</p>
          <p>Yaklaşık üç yıllık dönemin ardından, 2 Temmuz 2024’te Sermaye Piyasası Kanunu’nda yapılan değişiklikle kapsamlı bir uyum süreci başladı. Kripto varlık hizmet sağlayıcıların SPK düzenleme ve denetimine alınmasıyla birlikte Kurul duyuruları ve ilke kararları sektörün geçiş dönemine yön verdi.</p>
          <p>25 Aralık 2024 tarihli düzenlemelerle uyum programı, müşteri edinimi ve kripto varlık transferleri bakımından önemli değişiklikler yapıldı. Kripto varlık hizmet sağlayıcılar finansal kuruluş olarak tanımlanırken, transferlere Seyahat Kuralı getirildi ve müşteri kabul süreçlerindeki kontroller sıkılaştırıldı.</p>
          <p>13 Mart 2025 tarihli iki temel SPK Tebliği; kuruluş ve faaliyet şartlarından sermaye yeterliliğine, saklama modelinden müşteri varlıklarının korunmasına kadar sektörün ana çalışma esaslarını ayrıntılandırdı. TÜBİTAK’ın 30 Nisan 2025 tarihli bilgi sistemleri ve teknolojik altyapı kriterleri ise teknik kontrol çerçevesini tamamladı.</p>
          <p>28 Haziran 2025’te yayımlanan MASAK düzenlemesiyle müşteri ilişkilerinde uygulanacak sıkılaştırılmış tedbirler ile kripto varlık transferlerinde süre ve tutar sınırlamalarının ayrıntıları açıklandı. Takip eden SPK ilke kararlarıyla gelişen çerçeve, kurumların mevzuat takibini sürekli bir yönetişim süreci olarak ele almasını gerekli kılıyor.</p>
        </div>
      </section>

      <section className="crypto-regulation-directory">
        <div className="directory-heading">
          <div>
            <p className="eyebrow"><span /> KRONOLOJİK LİSTE</p>
            <h2>Düzenlemeler ve<br /><em>resmî kaynaklar.</em></h2>
          </div>
          <p>Her kayıtta düzenleyici kurum, yayım tarihi ve düzenlemenin adı yer alır. “Detay” bağlantıları ilgili belgenin resmî kaynağını yeni sekmede açar.</p>
        </div>
        <div className="regulation-directory-list" role="list">
          {regulations.map((item, index) => (
            <article className="directory-row" role="listitem" key={`${item.date}-${item.description}`}>
              <span className="directory-no">{String(index + 1).padStart(2, "0")}</span>
              <div className="directory-regulator">
                <small>REGÜLATÖR</small>
                <b>{item.regulator}</b>
              </div>
              <div className="directory-date">
                <small>TARİH</small>
                <time>{item.date}</time>
              </div>
              <h3>{item.description}</h3>
              <a href={item.url} target="_blank" rel="noreferrer" aria-label={`${item.description} detayını yeni sekmede aç`}>
                Detay <span>↗</span>
              </a>
            </article>
          ))}
        </div>
        <p className="legal-note">Liste bilgilendirme amacıyla hazırlanmıştır. Uygulamada düzenlemelerin yürürlükteki metinleri, değişiklikleri ve yetkili kurumların güncel kararları esas alınmalıdır.</p>
      </section>

      <section className="detail-cta">
        <p className="eyebrow light"><span /> UYUM DESTEĞİ</p>
        <h2>Düzenlemeleri kurumunuza<br /><em>uyarlayın.</em></h2>
        <p>Yükümlülük haritası, politika seti ve kontrol tasarımı için ihtiyaçlarınızı birlikte değerlendirelim.</p>
        <a href="/#iletisim">Bize ulaşın <span>→</span></a>
      </section>
      <DetailFooter />
    </main>
  );
}
