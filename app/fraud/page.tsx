import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../components/DetailHeader";

export const metadata: Metadata = {
  title: "Kripto Fraud Kural Kütüphanesi | Kripto Uyum Pusulası",
  description: "Kripto platformları için kimlik, hesap ele geçirme, ödeme, zincir üstü transfer ve piyasa davranışlarını kapsayan 30 yaygın fraud kuralı.",
};

const categories = [
  { code: "ID", title: "Kimlik & Hesap Açılışı", count: 5 },
  { code: "ATO", title: "Hesap Ele Geçirme", count: 5 },
  { code: "PAY", title: "Para Yatırma & Ödeme", count: 5 },
  { code: "CHAIN", title: "Transfer & Zincir Üstü", count: 5 },
  { code: "BEH", title: "Müşteri Davranışı & Scam", count: 5 },
  { code: "MKT", title: "Piyasa Suistimali", count: 5 },
];

const rules = [
  {
    id: "FR-001", category: "ID", risk: "Yüksek",
    title: "Tek cihazdan çoklu kimlik",
    signal: "Aynı cihaz parmak izi, tarayıcı profili veya mobil cihaz kimliği kısa sürede birden fazla bağımsız müşteri hesabı açmak için kullanılır.",
    action: "Hesap açılışını beklet; cihaz–kimlik ilişkisini, ortak iletişim ve ödeme verilerini incele.",
  },
  {
    id: "FR-002", category: "ID", risk: "Yüksek",
    title: "Tekrarlanan kimlik belgesi veya selfie",
    signal: "Aynı belge görüntüsü, yüz biyometrisi, arka plan veya görüntü meta verisi farklı başvurularda yeniden görülür.",
    action: "Mükerrer başvuruları bir vaka altında birleştir; canlılık ve belge doğrulamasını yenile.",
  },
  {
    id: "FR-003", category: "ID", risk: "Orta",
    title: "Kimlik–cihaz–coğrafya uyumsuzluğu",
    signal: "Beyan edilen ikamet, telefon ülkesi, IP/cihaz konumu ve belge ülkesi arasında makul açıklaması olmayan uyumsuzluk vardır.",
    action: "Ek adres ve gelir kaynağı belgesi iste; VPN/proxy ve oturum geçmişini değerlendir.",
  },
  {
    id: "FR-004", category: "ID", risk: "Yüksek",
    title: "Sentetik kimlik örüntüsü",
    signal: "Kimlik unsurları tek tek geçerli görünürken telefon, e-posta, adres ya da biyometrik veri farklı kişilere ait izler taşır.",
    action: "Otomatik onayı durdur; çapraz veri doğrulaması ve manuel görüntülü inceleme uygula.",
  },
  {
    id: "FR-005", category: "ID", risk: "Orta",
    title: "Hızlı profil ve iletişim değişikliği",
    signal: "Hesap açılışından hemen sonra telefon, e-posta, adres, ad-soyad veya banka hesabı gibi kritik alanlar değiştirilir.",
    action: "Değişiklik sonrası çekim bekleme süresi uygula; eski ve yeni iletişim kanalından doğrulama yap.",
  },
  {
    id: "FR-006", category: "ATO", risk: "Kritik",
    title: "Şifre sıfırlama sonrası çekim",
    signal: "Yeni cihaz veya IP’den şifre sıfırlanmasını kısa süre içinde adres ekleme, varlık dönüşümü ve yüksek tutarlı çekim izler.",
    action: "Çekimi otomatik durdur; güvenilir cihaz ve müşteriyle bağımsız kanal üzerinden teyit et.",
  },
  {
    id: "FR-007", category: "ATO", risk: "Yüksek",
    title: "MFA değişikliği ve yeni adres",
    signal: "Çok faktörlü doğrulama kaldırılır veya yenilenir; ardından daha önce kullanılmamış kripto adresine transfer talebi gelir.",
    action: "Yeni adres için soğuma süresi, ek biyometrik doğrulama ve risk bazlı manuel onay uygula.",
  },
  {
    id: "FR-008", category: "ATO", risk: "Yüksek",
    title: "İmkânsız seyahat",
    signal: "Aynı hesap, fiziksel olarak mümkün olmayan süre içinde uzak coğrafyalardan başarılı oturum veya işlem üretir.",
    action: "Oturumları sonlandır; cihaz güvenini sıfırla ve hesap sahibine güvenli kanaldan ulaş.",
  },
  {
    id: "FR-009", category: "ATO", risk: "Orta",
    title: "Oturum davranışında keskin sapma",
    signal: "Normalde mobil kullanan hesap yeni otomasyon izi, farklı dil/saat dilimi, yüksek gezinme hızı veya alışılmadık API davranışı gösterir.",
    action: "Davranışsal risk puanını yükselt; hassas işlemlerde yeniden kimlik doğrulama iste.",
  },
  {
    id: "FR-010", category: "ATO", risk: "Kritik",
    title: "Yeni API anahtarıyla hızlı boşaltım",
    signal: "Yeni oluşturulan veya yetkisi artırılan API anahtarı kısa sürede portföyü tek varlığa çevirir ve çekim/transfer girişiminde bulunur.",
    action: "API anahtarını askıya al; IP izin listesi, anahtar sahibi ve yetki değişikliklerini incele.",
  },
  {
    id: "FR-011", category: "PAY", risk: "Yüksek",
    title: "Üçüncü kişi hesabından para yatırma",
    signal: "Müşterinin doğrulanmış adıyla eşleşmeyen banka hesabı veya ödeme aracı düzenli ya da yüksek tutarlı fonlama yapar.",
    action: "Fonları kullanılabilir bakiyeye geçirme; gönderen–müşteri ilişkisini ve iade riskini doğrula.",
  },
  {
    id: "FR-012", category: "PAY", risk: "Yüksek",
    title: "Çok sayıda göndericiden tek hesaba akış",
    signal: "Bir müşteri hesabı, kısa sürede çok sayıda ilişkisiz banka hesabı veya karttan küçük/orta tutarlı fon alır.",
    action: "Para toplama veya mule ihtimalini incele; gönderen yoğunluğu ve ortak açıklama kalıplarını analiz et.",
  },
  {
    id: "FR-013", category: "PAY", risk: "Orta",
    title: "Eşik altı parçalı fonlama",
    signal: "Fonlama işlemleri sürekli olarak iç limit, inceleme veya ek doğrulama eşiğinin hemen altında tekrarlanır.",
    action: "Tekil işlem yerine kayan zaman penceresinde toplam tutar ve adedi değerlendir.",
  },
  {
    id: "FR-014", category: "PAY", risk: "Yüksek",
    title: "Chargeback riski taşıyan hızlı dönüşüm",
    signal: "Yeni ödeme aracıyla fonlanan bakiye hızla likit kripto varlığa çevrilir ve dış cüzdana gönderilmeye çalışılır.",
    action: "Ödeme kesinleşene kadar çekimi sınırla; kart/banka sahipliği ve geçmiş itiraz oranını kontrol et.",
  },
  {
    id: "FR-015", category: "PAY", risk: "Orta",
    title: "Gelir profiliyle uyumsuz fonlama",
    signal: "İşlem hacmi, müşterinin mesleği, gelir/servet kaynağı ve önceki davranışıyla açıklanamayacak ölçüde büyür.",
    action: "Fon ve servet kaynağı belgesi iste; açıklama ile işlem zincirini birlikte değerlendir.",
  },
  {
    id: "FR-016", category: "CHAIN", risk: "Yüksek",
    title: "Fonlama sonrası anında dış transfer",
    signal: "Fiat veya kripto yatırımı alım-satım amacı göstermeden kısa sürede başka cüzdana aktarılır; davranış tekrarlıdır.",
    action: "Geçiş hesabı/mule riskini incele; kaynak ve hedef cüzdan ilişkilerini analiz et.",
  },
  {
    id: "FR-017", category: "CHAIN", risk: "Kritik",
    title: "Yüksek riskli cüzdan teması",
    signal: "Kaynak veya hedef adres; dolandırıcılık, çalıntı fon, ransomware, darknet, yaptırım ya da terör finansmanı riskiyle ilişkilidir.",
    action: "İşlemi ilgili politika ve mevzuata göre durdur veya incelemeye al; uyum ekibine gerçek zamanlı vaka aç.",
  },
  {
    id: "FR-018", category: "CHAIN", risk: "Yüksek",
    title: "Mixer / tumbler maruziyeti",
    signal: "Fonlar karıştırma hizmetine doğrudan gönderilir, bu hizmetten gelir veya kısa zincir içinde güçlü maruziyet taşır.",
    action: "Maruziyet derecesi ve ekonomik amacı incele; ek fon kaynağı kanıtı ve hedef açıklaması iste.",
  },
  {
    id: "FR-019", category: "CHAIN", risk: "Yüksek",
    title: "Hızlı zincir ve varlık değiştirme",
    signal: "Fonlar kısa sürede bridge, swap ve farklı ağlar üzerinden art arda taşınarak iz sürme zorlaştırılır.",
    action: "Tüm zincirleri tek vaka görünümünde birleştir; nihai çıkış noktası ve ilişki kümelerini araştır.",
  },
  {
    id: "FR-020", category: "CHAIN", risk: "Orta",
    title: "Birçok hesaptan ortak cüzdana çekim",
    signal: "Birbiriyle görünürde ilişkisi olmayan çok sayıda müşteri hesabı aynı veya aynı kümeye ait dış cüzdanlara transfer yapar.",
    action: "Hesapları bağlantılı vaka olarak ele al; cihaz, referans, ödeme ve oturum bağlarını karşılaştır.",
  },
  {
    id: "FR-021", category: "BEH", risk: "Yüksek",
    title: "Yeni kullanıcıda olağandışı yüksek tutar",
    signal: "Deneyimsiz veya yeni hesap, düşük keşif davranışından hemen sonra tüm birikimini yüksek riskli varlığa çevirip çekmek ister.",
    action: "Scam mağduriyeti uyarısı göster; amaç teyidi ve gerektiğinde kısa bekleme süresi uygula.",
  },
  {
    id: "FR-022", category: "BEH", risk: "Kritik",
    title: "Uzaktan erişim / yönlendirme belirtisi",
    signal: "Müşteri işlem sırasında üçüncü kişinin yönlendirdiğini, ekran paylaşımını, uzaktan erişim yazılımını veya 'güvenli cüzdan' talimatını belirtir.",
    action: "İşlemi durdur; müşteriyi bağımsız kanaldan scam konusunda bilgilendir ve hesap güvenliğini yenile.",
  },
  {
    id: "FR-023", category: "BEH", risk: "Yüksek",
    title: "İlişki veya yatırım dolandırıcılığı örüntüsü",
    signal: "Yeni ilişki/mentor tavsiyesiyle alışılmadık varlık alımı, belirli dış cüzdana tekrarlı transfer ve giderek artan tutarlar görülür.",
    action: "Mağdur odaklı soru seti uygula; hedef cüzdanı diğer müşteri vakalarıyla karşılaştır.",
  },
  {
    id: "FR-024", category: "BEH", risk: "Orta",
    title: "Hesap devri / mule davranışı",
    signal: "Müşteri profilinden farklı cihaz, dil, işlem saati ve para akışı birlikte görülür; hesap gelen fonu yalnızca aktarır.",
    action: "Hesap kontrolünün kimde olduğunu doğrula; ilişkili fon kaynakları ve alıcıları kümele.",
  },
  {
    id: "FR-025", category: "BEH", risk: "Orta",
    title: "Promosyon ve referans kötüye kullanımı",
    signal: "Aynı cihaz, ödeme aracı, IP bloğu veya cüzdan kümesiyle açılan hesaplar karşılıklı işlem yaparak ödül üretir.",
    action: "Ödülü beklet; ilişkili hesapları ve gerçek ekonomik işlem bulunup bulunmadığını incele.",
  },
  {
    id: "FR-026", category: "MKT", risk: "Kritik",
    title: "Wash trading / kendi kendine işlem",
    signal: "Aynı kişi veya bağlantılı hesaplar benzer fiyat ve miktarda karşılıklı emirlerle gerçek risk aktarımı olmadan hacim üretir.",
    action: "Bağlantılı hesap grafiği ve faydalanıcı bilgisini kullan; işlemleri gözetim vakasına bağla.",
  },
  {
    id: "FR-027", category: "MKT", risk: "Yüksek",
    title: "Spoofing / yanıltıcı emir",
    signal: "Büyük emirler fiyatı etkileyecek şekilde deftere girilir, gerçekleşme yaklaşınca sürekli iptal edilir ve karşı yönde işlem yapılır.",
    action: "Emir ömrü, iptal oranı, defter etkisi ve karşı yönlü gerçekleşmeleri birlikte puanla.",
  },
  {
    id: "FR-028", category: "MKT", risk: "Yüksek",
    title: "Pump-and-dump koordinasyonu",
    signal: "Düşük likit varlıkta sosyal medya/mesajlaşma hareketiyle eşzamanlı yeni hesap alımları, fiyat sıçraması ve erken hesapların satışı görülür.",
    action: "Hesap kümelerini, fonlama zamanını ve kâr transferlerini incele; listeleme/gözetim ekibini uyar.",
  },
  {
    id: "FR-029", category: "MKT", risk: "Yüksek",
    title: "Piyasa yapıcı limit ihlali",
    signal: "Piyasa yapıcı hesapları sözleşmesel spread, envanter, kendi kendine işlem veya izinli hesap sınırlarını tekrar tekrar aşar.",
    action: "Kotasyon yetkisini sınırla; algoritma değişikliği, istisna ve ilişkili hesapları bağımsız incelemeye al.",
  },
  {
    id: "FR-030", category: "MKT", risk: "Orta",
    title: "Kapanış / referans fiyatı etkileme",
    signal: "Değerleme, raporlama veya ücret hesaplama anından hemen önce küçük fakat yönlü işlemlerle referans fiyat taşınır.",
    action: "Zaman penceresi, hesap menfaati ve diğer platform fiyatlarıyla sapmayı analiz et.",
  },
];

export default function FraudPage() {
  return (
    <main>
      <DetailHeader />
      <section className="fraud-hero">
        <div>
          <p className="eyebrow light"><span /> FRAUD KURAL KÜTÜPHANESİ</p>
          <h1>Şüpheli davranışı<br /><em>sinyale dönüştürün.</em></h1>
          <p>Kripto platformlarında yaygın kullanılan 30 örnek kural; kimlikten zincir üstü transfere, hesap ele geçirmeden piyasa suistimaline kadar altı kontrol alanında.</p>
        </div>
        <div className="fraud-radar" aria-hidden="true">
          <span className="radar-core">30<small>KURAL</small></span>
          <i className="radar-dot d1" /><i className="radar-dot d2" /><i className="radar-dot d3" /><i className="radar-dot d4" />
        </div>
      </section>

      <section className="fraud-principle">
        <span>ÖNEMLİ</span>
        <p>Tek bir kural sonucu suç veya şüphe tespiti değildir. Eşikler kurumun müşteri, ürün, kanal ve risk profiline göre kalibre edilmeli; kurallar birlikte puanlanmalı ve sonuçlar yetkin ekip tarafından bağlam içinde incelenmelidir.</p>
      </section>

      <section className="fraud-categories">
        {categories.map((category) => (
          <a href={`#${category.code}`} key={category.code}>
            <span>{category.code}</span><b>{category.title}</b><small>{category.count} kural</small>
          </a>
        ))}
      </section>

      <section className="fraud-library">
        {categories.map((category) => (
          <div className="fraud-group" id={category.code} key={category.code}>
            <header>
              <span>{category.code}</span>
              <div><small>KURAL GRUBU</small><h2>{category.title}</h2></div>
            </header>
            <div className="fraud-rules">
              {rules.filter((rule) => rule.category === category.code).map((rule) => (
                <article className="fraud-rule" key={rule.id}>
                  <div className="rule-top">
                    <span>{rule.id}</span>
                    <small className={`risk-${rule.risk.toLocaleLowerCase("tr-TR")}`}>{rule.risk}</small>
                  </div>
                  <h3>{rule.title}</h3>
                  <div className="rule-line"><b>SİNYAL</b><p>{rule.signal}</p></div>
                  <div className="rule-line"><b>AKSİYON</b><p>{rule.action}</p></div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="fraud-operating">
        <div>
          <p className="eyebrow"><span /> İŞLETİM MODELİ</p>
          <h2>Kural yazmak başlangıçtır.<br /><em>Yönetmek fark yaratır.</em></h2>
        </div>
        <div className="fraud-steps">
          <div><span>01</span><b>Kalibre et</b><p>Eşikleri geçmiş vaka, müşteri segmenti ve işlem dağılımıyla test edin.</p></div>
          <div><span>02</span><b>Birleştir</b><p>Kimlik, cihaz, ödeme, oturum ve zincir üstü veriyi aynı risk görünümünde toplayın.</p></div>
          <div><span>03</span><b>İncele</b><p>Alarmı müşteri bağlamı, ekonomik amaç ve ilişkili hesaplarla değerlendirin.</p></div>
          <div><span>04</span><b>Ölç</b><p>Yanlış pozitif, yakalama oranı, vaka süresi ve müşteri etkisini düzenli izleyin.</p></div>
        </div>
      </section>

      <section className="fraud-sources">
        <p>Bu örnek kütüphane; FATF sanal varlık kırmızı bayrak göstergeleri ile MASAK’ın risk temelli yaklaşım, müşterinin tanınması ve şüpheli işlem bildirimi çerçevesi dikkate alınarak hazırlanmıştır.</p>
        <div>
          <a href="https://www.fatf-gafi.org/en/publications/Methodsandtrends/Virtual-assets-red-flag-indicators.html" target="_blank" rel="noreferrer">FATF göstergeleri <span>↗</span></a>
          <a href="https://masak.hmb.gov.tr/duyuru/kripto-varlik-hizmet-saglayicilar-rehberi-guncellendi-ve-yayimlandi" target="_blank" rel="noreferrer">MASAK KVHS Rehberi <span>↗</span></a>
        </div>
      </section>

      <section className="fraud-contact">
        <p className="eyebrow light"><span /> DAHA FAZLA BİLGİ</p>
        <h2>Kural setinizi kurumunuza<br /><em>özel tasarlayalım.</em></h2>
        <p>Daha fazla bilgi ve danışmanlık için bize ulaşın.</p>
        <a href="/#iletisim">İletişim formuna git <span>→</span></a>
      </section>
      <DetailFooter />
    </main>
  );
}
