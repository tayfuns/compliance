import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../../components/DetailHeader";

const b1Url = "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-5.htm";
const b2Url = "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-6.htm";

export const metadata: Metadata = {
  title: "Saklamada İlklendirme Nedir? | Kripto Uyum Pusulası",
  description: "Kripto varlık saklama sistemlerinde anahtar üretimi, HSM/MPC, yetki ayrılığı, test, kanıt paketi ve canlıya geçiş rehberi.",
};

export default function CustodyInitializationArticle() {
  return (
    <main>
      <DetailHeader />
      <article className="article-page">
        <header className="article-hero">
          <a className="back-link" href="/#blog">← Bloga dön</a>
          <div className="article-meta"><span>SAKLAMA OPERASYONLARI</span><time>12 dk okuma</time></div>
          <h1>Saklamada<br /><em>ilklendirme</em> nedir?</h1>
          <p>Bir saklama altyapısının ilk güven kökünü oluşturmak; anahtarları, yetkileri, sistemleri ve kanıtları kontrollü biçimde canlı kullanıma hazırlamaktır.</p>
        </header>

        <div className="article-layout">
          <aside className="article-toc">
            <span>BU YAZIDA</span>
            <a href="#tanim">01 — Tanım ve kapsam</a>
            <a href="#hazirlik">02 — Hazırlık</a>
            <a href="#toren">03 — Anahtar töreni</a>
            <a href="#kontroller">04 — Kontroller</a>
            <a href="#test">05 — Test ve canlıya geçiş</a>
            <a href="#kanit">06 — Kanıt paketi</a>
            <a href="#hatalar">07 — Yaygın hatalar</a>
          </aside>
          <div className="article-content">
            <section id="tanim">
              <p className="article-lead">İlklendirme, “bir cüzdan oluşturma” işi değildir. Saklanacak varlık üzerinde kontrol sağlayan kriptografik materyalin güvenilir bir ortamda üretilmesi, yönetim modelinin kurulması ve sistemin yalnızca tanımlı yetkilerle çalışacağının ispatlanmasıdır.</p>
              <p>Süreç; donanım güvenlik modüllerini, çok taraflı hesaplama (MPC) veya çoklu imza bileşenlerini, anahtar parçalarını, erişim politikalarını, yedekleri, ağ bağlantılarını, transfer onay zincirini ve muhasebe/mutabakat entegrasyonlarını aynı değişiklik penceresinde buluşturur. Bu nedenle güvenlik, operasyon, bilgi teknolojileri, iç kontrol ve gerektiğinde bağımsız gözlemci birlikte çalışır.</p>
              <div className="callout"><b>Temel soru</b><p>Bir kişi veya sistem tek başına müşteri varlığını hareket ettirebilir mi? Cevap “evet” ise tasarımda tekil hata ve suiistimal noktası vardır.</p></div>
            </section>

            <section id="hazirlik">
              <p className="section-kicker">01 / HAZIRLIK</p>
              <h2>Tören başlamadan önce güven tasarlanır.</h2>
              <p>Başarılı bir ilklendirme, gününden önce hazırlanmış ve yönetimce onaylanmış bir senaryoya dayanır. Senaryoda kapsam, katılımcılar, roller, kullanılacak donanım ve yazılım sürümleri, kabul kriterleri, geri dönüş adımları ve başarısızlık halinde törenin hangi noktada iptal edileceği yazılı olmalıdır.</p>
              <h3>Asgari hazırlık seti</h3>
              <ul className="check-list">
                <li><b>Varlık ve ağ kapsamı:</b> Hangi blokzincirler, token türleri ve cüzdan katmanları ilklendirilecek?</li>
                <li><b>Yetki matrisi:</b> Kim üretir, kim onaylar, kim gözlemler; eşik kaç imzadır?</li>
                <li><b>Temiz ortam:</b> Fiziksel erişim, kamera kayıtları, ağ izolasyonu ve cihaz kabul kontrolleri nasıl sağlanır?</li>
                <li><b>Yazılım bütünlüğü:</b> İmaj, paket ve firmware özet değerleri hangi güvenilir kaynakla karşılaştırılır?</li>
                <li><b>Değişiklik kaydı:</b> İlklendirme hangi değişiklik talebi ve hangi yönetim onayı altında yürütülür?</li>
                <li><b>İptal koşulları:</b> Beklenmeyen katılımcı, bütünlük hatası veya zaman aşımı halinde hangi adım uygulanır?</li>
              </ul>
            </section>

            <section id="toren">
              <p className="section-kicker">02 / ANAHTAR TÖRENİ</p>
              <h2>İlk güven kökü nasıl oluşturulur?</h2>
              <p>Anahtar töreni, anahtarın veya anahtar parçalarının üretildiği ve ilk politika bağının kurulduğu kontrollü oturumdur. HSM tabanlı modelde anahtarın modül dışına açık halde çıkmaması; MPC modelinde parçaların tek bir yerde veya tek bir yetki alanında birleşmemesi beklenir. Çoklu imzada ise imzacı cihazların ve kurtarma materyalinin birbirinden bağımsız güvenlik alanlarında tutulması gerekir.</p>
              <div className="process-grid">
                <div><span>01</span><h3>Doğrula</h3><p>Katılımcı, cihaz, mühür, seri numarası, firmware ve zaman kaynağını kontrol et.</p></div>
                <div><span>02</span><h3>Üret</h3><p>Onaylı entropi ve algoritmalarla anahtar veya parçaları üret; hassas çıktıyı ekranda ya da logda gösterme.</p></div>
                <div><span>03</span><h3>Bağla</h3><p>Anahtarı cüzdan politikası, transfer eşikleri, ağ ve müşteri varlık sınıfıyla ilişkilendir.</p></div>
                <div><span>04</span><h3>Yedekle</h3><p>Şifreli yedekleri görevler ve lokasyonlar arasında ayrıştır; erişim kayıtlarını başlat.</p></div>
                <div><span>05</span><h3>Kanıtla</h3><p>Açık adresi, politika özetini ve denetlenebilir tören çıktısını çift kontrolle kaydet.</p></div>
                <div><span>06</span><h3>Kapat</h3><p>Geçici dosyaları güvenli sil; cihaz ve ortamı tören sonu kontrolüyle mühürle.</p></div>
              </div>
              <p className="source-note">III-35/B.2 sayılı Tebliğ’in 27 ve 28’inci maddeleri, anahtar parçalarının ve kontrol mekanizmalarının Türkiye’de tutulmasını; anahtarların güvenli donanım modülü dışına çıkarılmamasını ve yetkisiz erişime karşı kontrol kurulmasını öngörür.</p>
            </section>

            <section id="kontroller">
              <p className="section-kicker">03 / KONTROL TASARIMI</p>
              <h2>Görevler ayrılığı kâğıt üzerinde kalmamalı.</h2>
              <p>Yetki matrisi sistem üzerinde uygulanmalıdır. Talebi oluşturan, iş kuralını kontrol eden, transferi onaylayan ve imzayı tamamlayan roller mümkün olduğunca ayrılmalıdır. Eşik kriptografisi tek başına yeterli değildir; aynı kişinin birden fazla kimlik veya servis hesabını kontrol etmesi teknik eşiği anlamsızlaştırabilir.</p>
              <table className="article-table">
                <thead><tr><th>Kontrol alanı</th><th>Beklenen uygulama</th><th>Kanıt örneği</th></tr></thead>
                <tbody>
                  <tr><td>Erişim</td><td>İsimli hesap, MFA, ayrıcalıklı erişim onayı, süreli yetki</td><td>Yetki matrisi ve erişim logu</td></tr>
                  <tr><td>Transfer</td><td>Tutar/risk bazlı çoklu onay ve adres beyaz liste kontrolü</td><td>Politika çıktısı ve test emri</td></tr>
                  <tr><td>Yedek</td><td>Şifreli, coğrafi ayrıştırılmış ve çift kontrolle erişilen kopya</td><td>Mühür/teslim tutanağı</td></tr>
                  <tr><td>İzleme</td><td>Anahtar, politika ve cihaz değişikliğinde gerçek zamanlı alarm</td><td>SIEM olayı ve alarm testi</td></tr>
                  <tr><td>Acil durum</td><td>Hızlı dondurma, izolasyon ve güvenli cüzdana aktarım</td><td>Tatbikat raporu</td></tr>
                </tbody>
              </table>
              <p>III-35/B.1 sayılı Tebliğ’in kurtarma planına ilişkin 47’nci maddesi, tehdit altındaki cüzdanların izolasyonu ve sıcak cüzdandaki varlıkların ivedi biçimde soğuk cüzdana çekilmesi gibi süreçlerin önceden tanımlanmasını bekler.</p>
            </section>

            <section id="test">
              <p className="section-kicker">04 / TEST VE CANLIYA GEÇİŞ</p>
              <h2>Çalışması yetmez; güvenli çalıştığı gösterilmelidir.</h2>
              <p>İlklendirmeden sonra doğrudan müşteri varlığı kabul edilmez. Önce düşük tutarlı ve izlenebilir testlerle yatırım, çekim, ücret hesaplama, başarısız işlem, onay reddi, beyaz liste değişikliği ve zincir reorganizasyonu gibi senaryolar uygulanır. Kurum kaydi sistem, blokzincir gezgini, saklama kuruluşu kaydı ve muhasebe bakiyesi aynı sonucu vermelidir.</p>
              <h3>Canlıya geçiş kapısı</h3>
              <ol>
                <li>Test sonuçlarında açık kritik/yüksek bulgu bulunmaması.</li>
                <li>Cüzdan adresleri ve ağ bilgilerinin iki bağımsız kişi tarafından doğrulanması.</li>
                <li>İzleme, alarm ve olay müdahale nöbetinin aktif olduğunun gösterilmesi.</li>
                <li>Gün sonu netleştirme ve mutabakat akışının başarıyla tamamlanması.</li>
                <li>İş sahibi, bilgi güvenliği ve iç kontrolün yazılı canlıya geçiş onayı.</li>
              </ol>
              <p>III-35/B.2’nin 32 ve 33’üncü maddeleri MKK entegrasyonu ile platform–saklama kuruluşu raporlarının tutarlılığını ve günlük mutabakatı düzenler. Bu nedenle ilklendirme testi yalnızca zincir üstü transfere indirgenemez.</p>
            </section>

            <section id="kanit">
              <p className="section-kicker">05 / KANIT PAKETİ</p>
              <h2>Denetlenebilirlik törenin çıktısıdır.</h2>
              <p>Kanıt paketi hassas anahtar materyalini içermez. Bunun yerine işlemin onaylı senaryoya göre yapıldığını, katılımcıların görevlerini yerine getirdiğini ve ortaya çıkan yapılandırmanın değişmediğini kanıtlar.</p>
              <ul>
                <li>Onaylı tören senaryosu, katılımcı ve gözlemci listesi</li>
                <li>Cihaz seri numaraları, sürüm ve bütünlük özetleri</li>
                <li>Açık anahtarlar/adresler ve politika tanımlayıcıları</li>
                <li>Rol–yetki matrisi ve onay eşikleri</li>
                <li>Yedek oluşturma ve güvenli teslim kayıtları</li>
                <li>Test işlemleri, zincir kimlikleri ve mutabakat sonuçları</li>
                <li>İstisna, sapma, başarısız adım ve alınan aksiyonlar</li>
                <li>Canlıya geçiş onayları ve ilk periyodik gözden geçirme tarihi</li>
              </ul>
            </section>

            <section id="hatalar">
              <p className="section-kicker">06 / YAYGIN HATALAR</p>
              <h2>En pahalı sorunlar ilk günde görünmez.</h2>
              <p><b>Tek kişinin fiilî kontrolü,</b> aynı yöneticiye bağlı tüm imzacıların tek lokasyonda bulunması, üretim anahtarının test ortamında kullanılması, yedeklerin kurtarma testinin yapılmaması ve açık adresin yanlış ağla eşlenmesi sık rastlanan tasarım kusurlarıdır.</p>
              <p>Bir diğer hata, ilklendirmeyi tek seferlik proje kabul etmektir. Yeni ağ, yeni saklama teknolojisi, eşik değişikliği, cihaz yenilemesi veya anahtar rotasyonu “yeniden ilklendirme” niteliğinde kontrollü bir değişiklik gerektirir. Her değişiklik için hangi tören adımlarının tekrarlanacağı politika ile önceden belirlenmelidir.</p>
            </section>

            <div className="article-sources">
              <h2>İlgili mevzuat</h2>
              <a href={b1Url} target="_blank" rel="noreferrer"><span>III-35/B.1</span> Kuruluş ve Faaliyet Esasları <i>↗</i></a>
              <a href={b2Url} target="_blank" rel="noreferrer"><span>III-35/B.2</span> Çalışma Usulü ve Sermaye Yeterliliği <i>↗</i></a>
            </div>
            <p className="article-disclaimer">Bu yazı genel bilgilendirme amaçlıdır; hukuki görüş, bilgi güvenliği sertifikasyonu veya belirli bir saklama mimarisi için uygunluk beyanı değildir.</p>
          </div>
        </div>
      </article>
      <DetailFooter />
    </main>
  );
}
