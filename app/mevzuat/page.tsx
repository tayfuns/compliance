import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../components/DetailHeader";

const b1Url = "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-5.htm";
const b2Url = "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-6.htm";

export const metadata: Metadata = {
  title: "Kripto Varlık Mevzuatı | Kripto Uyum Pusulası",
  description: "III-35/B.1 ve III-35/B.2 sayılı Tebliğlerin kripto platformları ve saklama kuruluşları için önemli hükümleri.",
};

const b1Topics = [
  {
    article: "Madde 5–9",
    title: "Kuruluş ve faaliyet izni",
    text: "KVHS’lerin anonim ortaklık şeklinde kurulması, payların nama yazılı ve nakit karşılığı çıkarılması; sermayenin tamamen ödenmesi ve şeffaf ortaklık yapısı aranır. Kuruluş izni faaliyet izni yerine geçmez; organizasyon, personel, bilgi sistemleri, iç sistemler ve saklama entegrasyonu ayrıca tevsik edilir.",
  },
  {
    article: "Madde 6, 13–15",
    title: "Ortak, yönetici ve personel şartları",
    text: "Kurucu ve ortaklar için mali güç, itibar, belirli mahkûmiyet ve işlem yasağı kontrolleri öngörülür. Genel müdürün Türkiye’de mukim ve tam zamanlı olması; genel müdür ve yardımcılarının ilgili alanlarda en az yedi yıllık tecrübesi bulunması gerekir. Yönetim kurulu en az üç üyeden oluşur.",
  },
  {
    article: "Madde 10–12",
    title: "Organizasyon ve çıkar çatışması",
    text: "Hizmet birimleri, görev tanımları, teknik donanım ve iç sistemler faaliyet kapsamıyla uyumlu kurulmalıdır. Müşteri çıkarı ve piyasa bütünlüğünü gözeten yazılı çıkar çatışması politikası yönetim kurulunca onaylanmalı, internet sitesinde yayımlanmalı ve periyodik olarak güncellenmelidir.",
  },
  {
    article: "Madde 20–24",
    title: "Müşteri koruması ve şeffaflık",
    text: "Risk bildirim formu, ücret ve vergi açıklamaları, hizmete özgü riskler ve çerçeve sözleşme müşteriye erişilebilir biçimde sunulur. Her müşteri için ayrı numara ve MKK sicil eşleştirmesi yapılır. Yetkiler, ortaklık ve yönetim yapısı, faaliyet raporları ve listeleme bilgileri internet sitesi ile KAP’ta açıklanır.",
  },
  {
    article: "Madde 26–34",
    title: "Pay devirleri ve dış hizmet",
    text: "Doğrudan veya dolaylı pay oranlarının %10, %20, %33 ve %50 eşiklerini aşması ya da altına düşmesi Kurul iznine tabidir. Dışarıdan hizmet alımı sorumluluğu KVHS’den kaldırmaz; kritik yönetim ve kontrol görevleri dışarı bırakılamaz, hizmet sağlayıcı için ön değerlendirme ve çıkış planı gerekir.",
  },
  {
    article: "Madde 38–41",
    title: "Kimlik, kayıt ve şikâyet yönetimi",
    text: "Kimlik doğrulama ve işlem güvenliği kontrolleri uygulanır. Gerçekleşmeyen ve iptal edilenler dâhil emir, IP, elektronik log ve telefon kayıtları bütünlüğü korunarak tutulur. Belgeler ve uzaktan kimlik tespiti kayıtları kural olarak on yıl saklanır; müşteri şikâyetleri izlenebilir bir sistemde kaydedilir.",
  },
  {
    article: "Madde 42–47",
    title: "İç sistemler ve kurtarma planı",
    text: "İç denetim, iç kontrol ve risk yönetimi bağımsız ve etkin birimler olarak yapılandırılır. Risk yönetimi siber saldırı, yetkisiz erişim, varlık kaybı, personel ve operasyon risklerini kapsar. Kurtarma planında sıcak cüzdandan soğuk cüzdana çekim, sistem izolasyonu, iletişim ve geri dönüş adımları bulunur.",
  },
  {
    article: "Madde 48",
    title: "Bağımsız denetim ve rezerv kanıtı",
    text: "Bilgi sistemleri ile süreç ve kontrol uyumu yılda en az bir kez bağımsız denetime tabi tutulur. Rezerv kanıt denetimi yılın üçüncü, altıncı, dokuzuncu ve on ikinci ay sonları itibarıyla yaptırılır ve raporlar Kurula iletilir.",
  },
];

const b2Topics = [
  {
    article: "Madde 5–9",
    title: "İzinli hizmetler ve yurt dışı faaliyet",
    text: "Emir alma ve gerçekleştirme, takas, transfer, saklama ve ilk satış/dağıtıma aracılık düzenlenen başlıca hizmetlerdir ve düzenli faaliyet için Kurul izni gerekir. Yurt dışı kuruluşun Türkiye’de iş yeri, Türkçe internet sitesi veya Türkiye’ye yönelik tanıtımı varsa faaliyet Türkiye’ye yönelik kabul edilir.",
  },
  {
    article: "Madde 10–14",
    title: "İşlem ortamı ve piyasa gözetimi",
    text: "Platform emirleri eşleştirebilir veya belirli koşullarda karşı taraf olabilir. Fiyat gözetim birimi makul ekonomik gerekçeyle açıklanamayan işlemleri izler, hesap kısıtlama dâhil tedbirleri değerlendirir ve Kurula bildirim yapılmasını sağlar. Kaldıraç, kredili alım, açığa satış, ödünç ve türev işlemler yasaktır.",
  },
  {
    article: "Madde 15–18",
    title: "Danışmanlık, ilk satış ve en iyi sonuç",
    text: "Yatırım danışmanlığı yalnızca Tebliğdeki nitelik ve varlık büyüklüğü şartları sağlanarak sunulabilir; müşteri portföyünün vekâleten yönetilmesi yasaktır. İlk satışta akıllı sözleşme ve listeleme uygunluğu kontrol edilir. Emirler fiyat, maliyet, hız ve gerçekleşme ihtimali dikkate alınarak müşteri için mümkün olan en iyi sonucu hedefler.",
  },
  {
    article: "Madde 20–23",
    title: "Listeleme ve listeden çıkarma",
    text: "En az üç üyeli, gerekli uzmanlıkları taşıyan listeleme komitesi kurulur. Yazılı listeleme/listeden çıkarma prosedürü; hukuki nitelik, teknoloji, dolaşım, proje sahipleri, saklanabilirlik ve piyasa risklerini değerlendirir. Olağan durumlarda listeden çıkarma en az yedi gün önce bildirilir; acil istisnalar ayrıca düzenlenir.",
  },
  {
    article: "Madde 24–28",
    title: "Saklama modeli ve anahtar güvenliği",
    text: "Müşterinin kendi cüzdanında saklama tercihi esastır; aksi durumda hizmet yetkili banka veya saklama kuruluşunca sunulur. Müşteri varlıkları kuruluşun kendi varlıklarından ayrı tutulur. Anahtar parçaları ve kontrol mekanizmaları Türkiye’de bulunmalı; HSM, yedekleme ve yetkisiz erişime karşı TÜBİTAK kriterleri uygulanmalıdır.",
  },
  {
    article: "Madde 29–33",
    title: "Transfer, sözleşme ve mutabakat",
    text: "Transferlerde erişim denetimi, yetkili onayı, çok faktörlü kimlik doğrulama ve MASAK düzenlemeleri uygulanır. Platform ile saklama kuruluşu yazılı sözleşme yapar; MKK entegrasyonu ve rapor tutarlılığı sağlanır. Müşteri varlıkları günlük netleştirme ve 23.59 mutabakat süreciyle kontrol edilir.",
  },
  {
    article: "Madde 34–40",
    title: "Sermaye ve finansal dayanıklılık",
    text: "Platformlar için asgari kuruluş sermayesi 150 milyon TL, saklama kuruluşları için 500 milyon TL’dir. Özsermaye, sermaye yeterliliği tabanı, risk karşılığı, borçlanma sınırı ve likidite yükümlülükleri birlikte izlenir. Toplam borçlar sermaye yeterliliği tabanının üç katını aşamaz.",
  },
  {
    article: "Madde 41–42",
    title: "Saklama limitleri ve likit rezerv",
    text: "Müşterilerin kendi cüzdanında tutmadığı varlıkların asgari %95’i saklama kuruluşunda, azami %5’i platform cüzdanlarında tutulur; gün içi platform oranı %10’u aşamaz. Platform nezdindeki müşteri varlıklarının %3’ü kadar likit rezerv bulundurulur ve rezerv kompozisyonu yoğunlaşma sınırlarına tabidir.",
  },
];

export default function LegislationPage() {
  return (
    <main>
      <DetailHeader />
      <section className="detail-hero legislation-hero">
        <div>
          <p className="eyebrow"><span /> MEVZUAT MERKEZİ</p>
          <h1>İki temel Tebliğ,<br /><em>tek operasyon haritası.</em></h1>
        </div>
        <p>13 Mart 2025 tarihli düzenlemeler, Türkiye’deki kripto varlık hizmet sağlayıcıların kurumsal yapısından günlük operasyonlarına kadar ana çerçeveyi kuruyor. Aşağıdaki özet, uygulamada ilk bakılması gereken konuları madde referanslarıyla bir araya getirir.</p>
      </section>

      <section className="legislation-intro">
        <div><b>32840</b><span>Resmî Gazete sayısı</span></div>
        <div><b>13.03.2025</b><span>Yayım tarihi</span></div>
        <div><b>2</b><span>Temel SPK Tebliği</span></div>
        <p>Özetler genel bilgilendirme amaçlıdır. Uygulama kararlarında Tebliğlerin güncel tam metni ve Kurul kararları esas alınmalıdır.</p>
      </section>

      <section className="travel-rule-feature">
        <div>
          <p className="eyebrow"><span /> MASAK UYGULAMA REHBERİ</p>
          <h2>Transferle birlikte<br /><em>bilgi de seyahat eder.</em></h2>
        </div>
        <div>
          <p>15.000 TL eşiği, zorunlu gönderici ve alıcı bilgileri, kişisel cüzdanlar, yurt dışı kuruluşlar ve eksik transfer mesajlarında uygulanacak adımları tek sayfada inceleyin.</p>
          <a href="/seyahat-kurali">Seyahat Kuralı rehberini açın <span>→</span></a>
        </div>
      </section>

      <section className="regulation-block">
        <div className="regulation-title">
          <span className="regulation-code">III-35/B.1</span>
          <p>Kuruluş ve Faaliyet Esasları</p>
          <h2>Kurum nasıl<br /><em>kurulur ve yönetilir?</em></h2>
          <p className="regulation-summary">Kuruluş izninden yönetişime, müşteri ilişkilerinden iç sistem ve denetime kadar KVHS’nin kurumsal omurgasını belirler.</p>
          <a className="source-button" href={b1Url} target="_blank" rel="noreferrer">Tam metin için tıklayın <span>↗</span></a>
        </div>
        <div className="regulation-topics">
          {b1Topics.map((topic, index) => (
            <article className="regulation-topic" key={topic.title}>
              <span className="topic-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>{topic.article}</small>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="regulation-block second">
        <div className="regulation-title">
          <span className="regulation-code">III-35/B.2</span>
          <p>Çalışma Usulü ve Sermaye Yeterliliği</p>
          <h2>Hizmetler nasıl<br /><em>güvenle işletilir?</em></h2>
          <p className="regulation-summary">Emir, listeleme, saklama ve transfer operasyonlarıyla sermaye, likidite ve rezerv sınırlarını birlikte düzenler.</p>
          <a className="source-button" href={b2Url} target="_blank" rel="noreferrer">Tam metin için tıklayın <span>↗</span></a>
        </div>
        <div className="regulation-topics">
          {b2Topics.map((topic, index) => (
            <article className="regulation-topic" key={topic.title}>
              <span className="topic-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <small>{topic.article}</small>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-cta">
        <p className="eyebrow light"><span /> SONRAKİ ADIM</p>
        <h2>Mevzuatı kontrol listesine<br /><em>dönüştürün.</em></h2>
        <p>Her yükümlülüğü sorumlu birim, politika, sistem kontrolü, kanıt ve gözden geçirme tarihiyle eşleyin.</p>
        <a href="/#iletisim">İletişime geçin <span>→</span></a>
      </section>
      <DetailFooter />
    </main>
  );
}
