import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../../components/DetailHeader";

const b1Url = "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-5.htm";
const b2Url = "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-6.htm";

export const metadata: Metadata = {
  title: "Piyasa Yapıcı Nedir? | Kripto Uyum Pusulası",
  description: "Kripto piyasalarında piyasa yapıcının rolü, kotasyon modeli, spread, envanter riski, gözetim ve çıkar çatışması kontrolleri.",
};

export default function MarketMakerArticle() {
  return (
    <main>
      <DetailHeader />
      <article className="article-page market-article">
        <header className="article-hero">
          <a className="back-link" href="/blog">← Bloga dön</a>
          <div className="article-meta"><span>PİYASA MİKROYAPISI</span><time>11 dk okuma</time></div>
          <h1>Piyasa yapıcı<br /><em>nedir?</em></h1>
          <p>Alış ve satış yönünde düzenli fiyat sağlayarak işlem yapılabilirliği destekleyen; bunu yaparken spread, envanter, teknoloji ve uyum risklerini yöneten profesyonel katılımcıdır.</p>
        </header>

        <div className="article-layout">
          <aside className="article-toc">
            <span>BU YAZIDA</span>
            <a href="#rol">01 — Temel rol</a>
            <a href="#mekanizma">02 — Nasıl çalışır?</a>
            <a href="#riskler">03 — Riskler</a>
            <a href="#sozlesme">04 — Sözleşme</a>
            <a href="#gozetim">05 — Gözetim</a>
            <a href="#metrikler">06 — Başarı ölçümü</a>
            <a href="#yanlislar">07 — Yanlış bilinenler</a>
          </aside>
          <div className="article-content">
            <section id="rol">
              <p className="article-lead">Piyasa yapıcı, belirli işlem çiftlerinde iki yönlü kotasyon bulundurarak alıcı ile satıcının aynı anda piyasada bulunmamasından doğan likidite boşluğunu azaltır. Karşılığında alış ve satış fiyatı arasındaki farktan gelir elde etmeyi hedefler.</p>
              <p>Bir yatırımcı hemen satmak istediğinde piyasa yapıcının alış kotasyonuna; hemen almak istediğinde satış kotasyonuna işlem yapabilir. Bu mekanizma emir defterinde sürekliliği artırabilir, fiyat etkisini azaltabilir ve farklı platformlar arasındaki fiyat keşfini hızlandırabilir. Ancak piyasa yapıcı bir fiyat seviyesini veya yükselişi garanti etmez.</p>
              <div className="definition-grid">
                <div><span>BID</span><b>Alış fiyatı</b><p>Piyasa yapıcının varlığı satın almaya hazır olduğu fiyat.</p></div>
                <div><span>ASK</span><b>Satış fiyatı</b><p>Piyasa yapıcının varlığı satmaya hazır olduğu fiyat.</p></div>
                <div><span>SPREAD</span><b>Fiyat farkı</b><p>Satış fiyatı ile alış fiyatı arasındaki fark.</p></div>
                <div><span>DEPTH</span><b>Derinlik</b><p>Farklı fiyat seviyelerinde işlem görmeyi bekleyen miktar.</p></div>
              </div>
            </section>

            <section id="mekanizma">
              <p className="section-kicker">01 / ÇALIŞMA MODELİ</p>
              <h2>Kotasyon motoru üç soruya cevap verir.</h2>
              <h3>Adil fiyat nerede?</h3>
              <p>Referans platformlar, endeksler, gerçekleşen işlemler ve emir defteri verileri kullanılarak bir orta fiyat üretilir. Kullanılan kaynaklar likit, manipülasyona dayanıklı ve kesinti halinde ikame edilebilir olmalıdır. Tek ve kolay etkilenebilir bir fiyat kaynağına bağımlılık, yanlış kotasyon riskini büyütür.</p>
              <h3>Ne kadar geniş spread gerekli?</h3>
              <p>Spread; volatilite, defter derinliği, işlem maliyeti, karşı platform riski, ağ transfer süresi ve envanter dengesizliğine göre değişir. Oynaklık arttığında veya riskten korunma imkânı azaldığında spread genişleyebilir. Sözleşmesel üst sınırlar, olağanüstü piyasa koşullarındaki istisnalarla birlikte tanımlanmalıdır.</p>
              <h3>Ne kadar miktar kotasyona konmalı?</h3>
              <p>Minimum kotasyon büyüklüğü gerçek işlem yapılabilirliğini sağlamalı; ancak piyasa yapıcının sermaye ve risk limitlerini aşmamalıdır. Emir miktarı yalnızca görünür derinliği artırmak için konulup sürekli iptal ediliyorsa yanıltıcı likidite riski doğar.</p>
              <div className="callout"><b>Basit örnek</b><p>Alış 99, satış 101 ise orta fiyat 100, mutlak spread 2 ve yaklaşık spread oranı %2’dir. Piyasa yapıcı 101’den sattığı varlığı daha sonra 99’dan alabilirse brüt fark elde eder; fiyat hareketi ve maliyetler bu sonucu tersine çevirebilir.</p></div>
            </section>

            <section id="riskler">
              <p className="section-kicker">02 / RİSK YÖNETİMİ</p>
              <h2>Likidite sağlamak, risk taşımaktır.</h2>
              <table className="article-table">
                <thead><tr><th>Risk</th><th>Nasıl oluşur?</th><th>Kontrol yaklaşımı</th></tr></thead>
                <tbody>
                  <tr><td>Envanter</td><td>Tek yönlü müşteri akışı varlık veya nakit biriktirir.</td><td>Varlık, değer ve duyarlılık limitleri; otomatik kotasyon eğimi</td></tr>
                  <tr><td>Ters seçim</td><td>Bilgili veya hızlı taraf eski kotasyona işlem yapar.</td><td>Fiyat kaynağı gecikme takibi, volatilite kesicileri</td></tr>
                  <tr><td>Model</td><td>Referans fiyat veya parametre yanlış sonuç üretir.</td><td>Bağımsız model doğrulama, geri test ve değişiklik onayı</td></tr>
                  <tr><td>Teknoloji</td><td>Bağlantı kaybı sırasında emirler açık kalır.</td><td>Kill switch, heartbeat, mesaj sıra ve tekrar kontrolü</td></tr>
                  <tr><td>Karşı taraf</td><td>Riskten korunulan platform varlığı iade edemez.</td><td>Limit, teminat, dağıtım ve çekim testi</td></tr>
                  <tr><td>Uyum</td><td>İşlem deseni yapay hacim veya manipülasyon yaratır.</td><td>Gerçek zamanlı gözetim ve bağımsız inceleme</td></tr>
                </tbody>
              </table>
              <p>Piyasa yapıcı, belirli bir envanter hedefinden uzaklaştığında kotasyonlarını asimetrik hale getirebilir. Fazla varlık taşıyorsa satış fiyatını daha cazip, alış fiyatını daha düşük tutarak dengelemeye çalışır. Bu davranış önceden tanımlı limitlerle yönetilmeli; müşteriyi yanıltan veya fiyatı yapay biçimde yönlendiren bir araca dönüşmemelidir.</p>
            </section>

            <section id="sozlesme">
              <p className="section-kicker">03 / SÖZLEŞME TASARIMI</p>
              <h2>“Likidite sağla” tek başına bir görev tanımı değildir.</h2>
              <p>Platform ile piyasa yapıcı arasındaki sözleşme, hangi işlem çiftlerinde ve hangi saatlerde hizmet verileceğini; azami spread, asgari miktar, kotasyonun piyasada bulunma oranı ve olağanüstü hal koşullarını açıkça belirlemelidir.</p>
              <ul className="check-list">
                <li><b>Kapsam:</b> Varlıklar, pazarlar, hesaplar ve izin verilen işlem türleri</li>
                <li><b>Performans:</b> Spread, derinlik, süreklilik ve yanıt süresi eşikleri</li>
                <li><b>Teşvik:</b> Sabit ücret, işlem ücreti indirimi veya performans ödemesinin hesaplanması</li>
                <li><b>Veri:</b> Ham emir/işlem kayıtlarına erişim ve saklama süresi</li>
                <li><b>Kontroller:</b> Kendi kendine işlem önleme, hesap ayrıştırma ve yetki sınırları</li>
                <li><b>Kesinti:</b> Volatilite, fiyat kaynağı kaybı, ağ sorunu ve mücbir sebep kuralları</li>
                <li><b>Fesih:</b> Açık emirlerin iptali, varlıkların çekimi ve inceleme hakkı</li>
              </ul>
              <p>Sözleşme, platformun gözetim ve müşteri koruma sorumluluğunu piyasa yapıcıya devredemez. III-35/B.2’nin 11’inci maddesi, işlem ortamına yurt dışı kuruluşların emir girebilmesinin platformun mevzuat sorumluluğunu kaldırmadığını açıkça belirtir.</p>
            </section>

            <section id="gozetim">
              <p className="section-kicker">04 / GÖZETİM VE ÇIKAR ÇATIŞMASI</p>
              <h2>Hızlı algoritmalar daha hızlı kontrol ister.</h2>
              <p>Platform, piyasa yapıcı hesaplarını ve ilişkili hesapları tanımlamalı; gözetim sistemi bu ilişkileri emir ve işlem analizinde kullanmalıdır. Kendi kendine işlem, karşılıklı emirle hacim oluşturma, kapanış/referans fiyatını etkileme, yanıltıcı emir yoğunluğu ve emir iptal oranları izlenmelidir.</p>
              <p>III-35/B.2’nin 13’üncü maddesi fiyat gözetim birimi ve münhasır risk yönetim personeli öngörür. Açıklanamayan eylem ve işlemler raporlanmalı; gerekli durumda hesap kısıtlama, durdurma veya kapatma tedbirleri alınarak Kurula bildirim yapılmalıdır. III-35/B.1’in 11 ve 12’nci maddeleri ise yönetim kurulu onaylı, yayımlanmış ve periyodik gözden geçirilen bir çıkar çatışması politikası gerektirir.</p>
              <div className="callout warning"><b>Kırmızı çizgi</b><p>Piyasa yapıcının kendi hesapları arasında işlem yapması, gerçek ekonomik risk aktarımı olmadan hacim üretmesi veya müşterilerin bekleyen emirlerini kullanarak avantaj sağlaması “likidite” olarak açıklanamaz.</p></div>
            </section>

            <section id="metrikler">
              <p className="section-kicker">05 / PERFORMANS</p>
              <h2>Başarı yalnızca hacim değildir.</h2>
              <p>Yüksek hacim, iyi piyasa kalitesi anlamına gelmeyebilir. Performans kartı hem likiditeyi hem davranış kalitesini ölçmelidir.</p>
              <div className="metric-list">
                <div><b>Kotasyon süresi</b><span>Uygun iki yönlü kotasyonun piyasada bulunduğu zaman yüzdesi</span></div>
                <div><b>Efektif spread</b><span>Gerçekleşen fiyatın işlem anındaki orta fiyata uzaklığı</span></div>
                <div><b>Derinlik</b><span>Orta fiyatın belirli baz puan çevresinde işlem yapılabilir miktar</span></div>
                <div><b>Fiyat etkisi</b><span>Belirli büyüklükte emrin ortalama fiyatı ne kadar hareket ettirdiği</span></div>
                <div><b>İptal/işlem oranı</b><span>Emir davranışının gerçek likidite sunup sunmadığına ilişkin gösterge</span></div>
                <div><b>Kesinti ve ihlal</b><span>Limit, gözetim alarmı, geçersiz fiyat ve sistem kesintisi sayısı</span></div>
              </div>
              <p>Metrikler varlık likiditesine göre kalibre edilmeli ve olağanüstü dönemler ayrıca raporlanmalıdır. Piyasa yapıcının kendi raporu platformun bağımsız ölçümünün yerine geçmez.</p>
            </section>

            <section id="yanlislar">
              <p className="section-kicker">06 / YANLIŞ BİLİNENLER</p>
              <h2>Piyasa yapıcı ne değildir?</h2>
              <p><b>Fiyat destekçisi değildir:</b> Belirli bir taban fiyatı savunmak veya yatırımcıya getiri sağlamak piyasa yapıcılığın doğal görevi değildir. <b>Sınırsız alıcı değildir:</b> Sermaye ve envanter limitleri vardır. <b>Hacim üreticisi değildir:</b> Ekonomik amaç taşımayan karşılıklı işlemler piyasa kalitesini artırmaz. <b>Gözetimden muaf değildir:</b> Algoritmik ve hızlı işlem yapması, aynı piyasa davranış kurallarını ortadan kaldırmaz.</p>
              <p>Sağlıklı model; açık sözleşme, bağımsız gözetim, teknik kesiciler, çıkar çatışması yönetimi ve ölçülebilir piyasa kalitesi hedeflerini birlikte kurar. Bu çerçeve yoksa dar spread görüntüsü, gerçekte kırılgan ve yanıltıcı bir likiditeye dönüşebilir.</p>
            </section>

            <div className="article-sources">
              <h2>İlgili mevzuat</h2>
              <a href={b1Url} target="_blank" rel="noreferrer"><span>III-35/B.1</span> Çıkar çatışması ve iç sistemler <i>↗</i></a>
              <a href={b2Url} target="_blank" rel="noreferrer"><span>III-35/B.2</span> İşlem ortamı, gözetim ve emir politikası <i>↗</i></a>
            </div>
            <p className="article-disclaimer">Bu yazı genel bilgilendirme amaçlıdır; yatırım tavsiyesi, hukuki görüş veya belirli bir piyasa yapıcılık modeline uygunluk beyanı değildir.</p>
          </div>
        </div>
      </article>
      <DetailFooter />
    </main>
  );
}
