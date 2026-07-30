import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../../components/DetailHeader";

const ocegUrl = "https://www.oceg.org/what-is-grc/";
const iso31000Url = "https://www.iso.org/standard/65694.html";
const iso37301Url = "https://www.iso.org/standard/75080.html";
const iso27001Url = "https://www.iso.org/standard/27001";
const threeLinesUrl = "https://www.theiia.org/en/resources/statements-of-position";
const spkUrl =
  "https://spk.gov.tr/duyurular/basin-duyurulari/2025/kripto-varlik-hizmet-saglayicilarina-iliskin-iki-teblig-yayimlandi";
const masakUrl =
  "https://masak.hmb.gov.tr/duyuru/kripto-varlik-hizmet-saglayicilar-rehberi-guncellendi-ve-yayimlandi";

export const metadata: Metadata = {
  title: "GRC Nedir? Yönetişim, Risk Yönetimi ve Uyumluluk | Kripto Uyum Pusulası",
  description:
    "GRC’nin yönetişim, risk yönetimi ve uyumluluk bileşenleri; çalışma modeli, üç hat yaklaşımı, risk-kontrol-mevzuat eşleştirmesi ve kripto varlık hizmet sağlayıcılarda uygulama rehberi.",
};

export default function GrcArticle() {
  return (
    <main>
      <DetailHeader />
      <article className="article-page grc-article">
        <header className="article-hero">
          <a className="back-link" href="/blog">← Bloga dön</a>
          <div className="article-meta"><span>YÖNETİŞİM &amp; UYUM</span><time>14 dk okuma · Temmuz 2026</time></div>
          <h1>GRC nedir?<br /><em>Yönetişim, risk ve uyumluluk.</em></h1>
          <p>Kurumsal hedefleri, belirsizlikleri ve yükümlülükleri aynı karar sisteminde buluşturan; sorumlulukları, kontrolleri ve kanıtları birbirine bağlayan bütünleşik yönetim yaklaşımıdır.</p>
        </header>

        <div className="article-layout">
          <aside className="article-toc">
            <span>BU YAZIDA</span>
            <a href="#tanim">01 — GRC’nin tanımı</a>
            <a href="#bilesenler">02 — Üç bileşen</a>
            <a href="#kripto">03 — Kripto şirketlerinde GRC</a>
            <a href="#model">04 — İşletim modeli</a>
            <a href="#dongu">05 — GRC yaşam döngüsü</a>
            <a href="#veri">06 — Veri ve teknoloji</a>
            <a href="#metrikler">07 — Ölçüm</a>
            <a href="#standartlar">08 — Güncel standartlar</a>
          </aside>

          <div className="article-content">
            <section id="tanim">
              <p className="article-lead">GRC, üç ayrı departmanın yan yana gelmesi değildir. Kurumun hedeflerine güvenilir biçimde ulaşmasını, belirsizliği yönetmesini ve bunu dürüstlük içinde yapmasını sağlayan ortak kabiliyetler bütünüdür.</p>
              <p>“Governance, Risk and Compliance” ifadesinin Türkçe karşılığı yönetişim, risk yönetimi ve uyumluluk ya da kısaca uyumdur. Kavramı geliştiren OCEG, GRC’yi hedeflere ulaşma, belirsizliği ele alma ve dürüst hareket etme kabiliyetlerini bütünleştiren bir yaklaşım olarak tanımlar. Bu nedenle GRC yalnızca mevzuat takibi veya yazılım satın alma projesi değildir.</p>
              <div className="callout">
                <b>GRC’nin vaadi</b>
                <p>Aynı yükümlülüğün farklı ekiplerce tekrar tekrar yorumlanmasını; aynı risk için çelişen kontroller kurulmasını ve yönetimin birbirini tutmayan raporlarla karar vermesini önlemektir.</p>
              </div>
              <div className="definition-grid">
                <div><span>GOVERNANCE</span><b>Hedef ve hesap verebilirlik</b><p>Ne amaçlanıyor, kim karar veriyor ve sonuçtan kim sorumlu?</p></div>
                <div><span>RISK</span><b>Belirsizlik ve tercih</b><p>Hedefi ne etkileyebilir, ne kadar risk alınabilir ve nasıl karşılık verilir?</p></div>
                <div><span>COMPLIANCE</span><b>Yükümlülük ve davranış</b><p>Hangi dış ve iç kurallara, hangi kanıtlarla uyulmalıdır?</p></div>
                <div><span>ASSURANCE</span><b>Bağımsız güvence</b><p>Tasarımın ve uygulamanın beklendiği gibi çalıştığı nasıl doğrulanır?</p></div>
              </div>
            </section>

            <section id="bilesenler">
              <p className="section-kicker">01 / ÜÇ BİLEŞEN</p>
              <h2>Aynı kararın üç ayrı yüzü.</h2>
              <h3>Yönetişim: yönü ve yetkiyi belirler</h3>
              <p>Yönetim kurulu ve üst yönetim; stratejik hedefleri, risk iştahını, etik ilkeleri, karar yetkilerini ve raporlama beklentilerini belirler. İyi yönetişimde sorumluluk yalnızca organizasyon şemasında değil; komite görevlerinde, karar eşiklerinde, politika onaylarında ve istisna süreçlerinde görünürdür.</p>
              <h3>Risk yönetimi: belirsizliği karara dönüştürür</h3>
              <p>Risk yönetimi, yalnızca “kırmızı-sarı-yeşil” bir liste tutmak değildir. Hedefle bağlantılı riskleri tanımlar, olasılık ve etkiyi değerlendirir, mevcut kontrollerin etkisini ölçer, kalan riski risk iştahıyla karşılaştırır ve kaçınma, azaltma, paylaşma veya kabul kararını kayıt altına alır.</p>
              <h3>Uyumluluk: yükümlülüğü uygulanabilir hale getirir</h3>
              <p>Uyum fonksiyonu kanun, ikincil düzenleme, kurul kararı, sözleşme, standart ve kurum içi politikalardan doğan gereklilikleri izler. Her gerekliliği sorumlu süreç, kontrol, kanıt, test yöntemi ve gözden geçirme tarihiyle eşler. Amaç yalnızca ihlalden kaçınmak değil, kurumun dürüstlük ve güven beklentisini günlük davranışlara çevirmektir.</p>
            </section>

            <section id="kripto">
              <p className="section-kicker">02 / KRİPTO VARLIK HİZMET SAĞLAYICILAR</p>
              <h2>Kriptoda GRC neden ayrı bir önem taşır?</h2>
              <p>Kripto varlık hizmet sağlayıcılarında düzenleyici risk, finansal suç riski, siber risk, anahtar ve saklama riski, piyasa bütünlüğü, müşteri koruması ve operasyonel dayanıklılık aynı işlem akışında kesişir. Örneğin bir kripto varlık çekimi; müşteri kimliği, Seyahat Kuralı, yaptırım taraması, zincir üstü risk, bakiye, transfer limiti, çoklu onay, cüzdan politikası ve kayıt saklama kontrollerini aynı anda çalıştırabilir.</p>
              <p>13 Mart 2025’te yürürlüğe giren III-35/B.1 ve III-35/B.2 sayılı SPK Tebliğleri; organizasyon, iç denetim, iç kontrol, risk yönetimi, bilgi sistemleri, saklama, transfer, sermaye yeterliliği ve rezerv kanıtı gibi alanları birlikte düzenledi. MASAK’ın 30 Eylül 2025’te yayımladığı güncel KVHS rehberi ise müşteri tanıma, Seyahat Kuralı, transfer kısıtları, şüpheli işlem bildirimi ve uyum programı yükümlülüklerini uygulama seviyesinde ele alıyor.</p>
              <table className="article-table">
                <thead><tr><th>GRC alanı</th><th>Kripto şirketindeki örnek</th><th>Beklenen kanıt</th></tr></thead>
                <tbody>
                  <tr><td>Yönetişim</td><td>Listeleme, cüzdan, risk kabulü ve istisna karar yetkileri</td><td>Komite kararı, yetki matrisi, kurul raporu</td></tr>
                  <tr><td>Düzenleyici risk</td><td>SPK ve MASAK değişikliklerinin ürüne etkisi</td><td>Mevzuat envanteri, etki analizi, aksiyon kaydı</td></tr>
                  <tr><td>Finansal suç</td><td>KYC/KYB, Seyahat Kuralı, yaptırım ve ŞİB süreçleri</td><td>Kontrol logu, vaka kararı, bildirim izi</td></tr>
                  <tr><td>Saklama riski</td><td>Anahtar yönetimi, sıcak/soğuk cüzdan, transfer onayı</td><td>Politika çıktısı, erişim kaydı, mutabakat</td></tr>
                  <tr><td>Piyasa bütünlüğü</td><td>Wash trading, spoofing ve ilişkili hesap gözetimi</td><td>Alarm, inceleme, hesap tedbiri ve rapor</td></tr>
                  <tr><td>Güvence</td><td>İç kontrol, iç denetim, bağımsız denetim ve rezerv kanıtı</td><td>Test çalışma kâğıdı, bulgu ve kapanış kanıtı</td></tr>
                </tbody>
              </table>
            </section>

            <section id="model">
              <p className="section-kicker">03 / İŞLETİM MODELİ</p>
              <h2>Sorumluluk işi yapan yerde başlar.</h2>
              <p>IIA’nın güncel Üç Hat Modeli, GRC sorumluluklarını departman isimlerinden çok roller üzerinden açıklar. Yönetim organı gözetim ve hesap verebilirliği sağlar; yönetim hedeflere ulaşmak için faaliyetleri ve riskleri yönetir; iç denetim ise bağımsız güvence ve tavsiye sunar.</p>
              <div className="process-grid">
                <div><span>01</span><h3>Birinci hat</h3><p>Ürün, operasyon, teknoloji ve iş birimleri riski sahiplenir; kontrolleri günlük süreçte uygular.</p></div>
                <div><span>02</span><h3>İkinci hat</h3><p>Risk, uyum ve bilgi güvenliği çerçeveyi kurar; izler, sorgular ve yönetime raporlar.</p></div>
                <div><span>03</span><h3>Üçüncü hat</h3><p>İç denetim, yönetişim, risk yönetimi ve kontroller hakkında bağımsız güvence verir.</p></div>
              </div>
              <div className="callout warning">
                <b>Yaygın hata</b>
                <p>“Uyum ekibi kontrol eder” yaklaşımı, iş biriminin sahipliğini ortadan kaldırır. İkinci hat kontrolü tasarlayabilir ve izleyebilir; ancak işlemi gerçekleştiren birinci hattın risk ve kontrol sorumluluğunu devralmamalıdır.</p>
              </div>
              <h3>Karar hakları açık olmalı</h3>
              <ul className="check-list">
                <li><b>Yönetim kurulu:</b> risk iştahı, temel politika, uyum programı ve kritik risk kabulü</li>
                <li><b>Üst yönetim:</b> kaynak tahsisi, sorumlu ataması ve düzeltici faaliyetlerin takibi</li>
                <li><b>Risk sahibi:</b> risk değerlendirmesi, kontrol seçimi ve kalan risk kararı</li>
                <li><b>Kontrol sahibi:</b> kontrolün uygulanması, kanıtın üretilmesi ve hata bildirimi</li>
                <li><b>Uyum / risk:</b> metodoloji, düzenleyici etki analizi, izleme ve eskalasyon</li>
                <li><b>İç denetim:</b> risk bazlı bağımsız değerlendirme ve bulgu takibi</li>
              </ul>
            </section>

            <section id="dongu">
              <p className="section-kicker">04 / GRC YAŞAM DÖNGÜSÜ</p>
              <h2>Mevzuat metninden çalışan kontrole.</h2>
              <ol>
                <li><b>Bağlamı ve hedefi belirleyin:</b> İş modeli, ürün, müşteri, ülke, teknoloji ve stratejik hedefleri envantere alın.</li>
                <li><b>Yükümlülüğü ayrıştırın:</b> Her düzenleme maddesini uygulanabilir gerekliliklere ve yürürlük tarihlerine bölün.</li>
                <li><b>Riski bağlayın:</b> Gerekliliğin veya hedefin hangi risklerle etkilenebileceğini, neden ve sonuç ilişkisiyle tanımlayın.</li>
                <li><b>Kontrolü eşleyin:</b> Önleyici, tespit edici ve düzeltici kontrolleri; sahip, sıklık, sistem ve kanıt bilgileriyle kaydedin.</li>
                <li><b>Uygulayın ve izleyin:</b> Kontrol performansını, istisnaları, kayıpları, alarmları ve eşik aşımlarını takip edin.</li>
                <li><b>Test edin:</b> Kontrolün tasarımını ve fiilî işleyişini örneklem, veri analitiği veya sürekli izleme ile değerlendirin.</li>
                <li><b>Düzeltin ve raporlayın:</b> Bulguyu kök neden, sorumlu, hedef tarih ve kapanış kanıtıyla yönetin; kalan riski raporlayın.</li>
              </ol>
              <p className="source-note">Olgun bir GRC modelinde “mevzuat → yükümlülük → risk → kontrol → kanıt → test → bulgu → aksiyon” ilişkisi uçtan uca izlenebilir olmalıdır.</p>
            </section>

            <section id="veri">
              <p className="section-kicker">05 / VERİ VE TEKNOLOJİ</p>
              <h2>GRC aracı kayıt deposu değil, ilişki haritasıdır.</h2>
              <p>Bir GRC platformu; mevzuat ve politika envanterini, risk kayıtlarını, kontrol kütüphanesini, kanıtları, testleri, olayları, kayıpları, bulguları ve aksiyonları ortak veri modeliyle ilişkilendirebilmelidir. Aynı kontrolün birden fazla risk ve yükümlülüğü karşıladığı durumlarda tekrar kayıt yerine ortak kontrol kullanılmalıdır.</p>
              <h3>Asgari teknoloji kabiliyeti</h3>
              <ul>
                <li>Versiyonlu mevzuat, yükümlülük ve politika yönetimi</li>
                <li>Risk ve kontrol öz değerlendirmesi ile onay iş akışları</li>
                <li>API üzerinden KYC, vaka, SIEM, IAM ve ticket sistemlerinden kanıt alma</li>
                <li>Görevler ayrılığı ve süreli erişim yetkileri</li>
                <li>Bulgu, istisna, risk kabulü ve aksiyon eskalasyonu</li>
                <li>Değiştirilemez denetim izi, saklama süresi ve veri sınıflandırması</li>
                <li>Yönetim kurulu, komite ve risk sahibi için role özgü raporlama</li>
              </ul>
              <div className="callout">
                <b>Otomasyon sınırı</b>
                <p>Yapay zekâ mevzuat değişikliği sınıflandırması, kontrol önerisi ve kanıt incelemesini hızlandırabilir; ancak hukuki yorum, risk kabulü, ŞİB kararı veya bağımsız güvence sorumluluğunu tek başına üstlenmemelidir. Kaynak, model sürümü ve insan onayı izlenebilir olmalıdır.</p>
              </div>
            </section>

            <section id="metrikler">
              <p className="section-kicker">06 / RAPORLAMA</p>
              <h2>Faaliyet sayısı değil, risk sonucu ölçülmeli.</h2>
              <p>“Kaç eğitim verildi?” veya “kaç kontrol test edildi?” önemlidir; fakat tek başına GRC’nin etkisini göstermez. Yönetim raporu, riskin yönünü ve alınan kararın sonucunu görünür kılmalıdır.</p>
              <div className="metric-list">
                <div><b>Risk maruziyeti</b><span>Doğal ve kalan riskin iştahla karşılaştırılması; eşik üstü risklerin eğilimi</span></div>
                <div><b>Kontrol sağlığı</b><span>Başarısız kontrol oranı, tekrar eden hata ve manuel kontrol bağımlılığı</span></div>
                <div><b>Düzenleyici değişim</b><span>Etki analizi bekleyen değişiklik, geciken aksiyon ve yürürlük öncesi hazır olma oranı</span></div>
                <div><b>Bulgu yönetimi</b><span>Geciken kritik bulgu, yeniden açılan bulgu ve ortalama kapanış süresi</span></div>
                <div><b>Olay ve kayıp</b><span>Uyum ihlali, operasyonel olay, müşteri etkisi ve mali/itibari sonuç</span></div>
                <div><b>Risk kültürü</b><span>İstisna tekrarı, bildirilen endişe, yöneticinin aksiyon sahipliği ve eğitim etkinliği</span></div>
              </div>
            </section>

            <section id="standartlar">
              <p className="section-kicker">07 / TEMMUZ 2026 İTİBARIYLA</p>
              <h2>Güncel çerçeve ve standartlar.</h2>
              <table className="article-table">
                <thead><tr><th>Kaynak</th><th>Güncel durum</th><th>GRC’de kullanım</th></tr></thead>
                <tbody>
                  <tr><td>ISO 31000:2018</td><td>2023’te teyit edildi; ISO kayıtlarında revize edilecek standart statüsünde</td><td>Kurumsal risk yönetimi ilkeleri, çerçevesi ve süreci</td></tr>
                  <tr><td>ISO 37301:2021</td><td>Yayımlanmış standart; 2024 iklim değişikliği eki mevcut ve periyodik inceleme sürecinde</td><td>Uyum yönetim sisteminin kurulması, değerlendirilmesi ve iyileştirilmesi</td></tr>
                  <tr><td>ISO/IEC 27001:2022</td><td>Üçüncü ve güncel ana baskı; 2024 iklim değişikliği eki mevcut</td><td>Bilgi güvenliği riskleri ve yönetim sistemi kontrolleri</td></tr>
                  <tr><td>IIA Üç Hat Modeli</td><td>IIA’nın güncel Statements of Position koleksiyonunda yer alıyor</td><td>Yönetim organı, yönetim/risk-uyum rolleri ve iç denetim arasındaki sorumluluklar</td></tr>
                  <tr><td>SPK III-35/B.1 ve B.2</td><td>13 Mart 2025’te yürürlüğe girdi</td><td>KVHS yönetişimi, iç sistemleri, faaliyet, saklama, transfer ve sermaye gereklilikleri</td></tr>
                  <tr><td>MASAK KVHS Rehberi</td><td>30 Eylül 2025 tarihli güncel rehber</td><td>AML/CFT, Seyahat Kuralı, transfer tedbirleri, ŞİB ve uyum programı uygulaması</td></tr>
                </tbody>
              </table>
              <p>Standart kullanmak tek başına mevzuata uyum anlamına gelmez. Standartlar yönetim sistemini ve ortak dili güçlendirir; uygulanacak somut kontrol her zaman kurumun iş modeli, risk profili ve yürürlükteki düzenlemelerle birlikte belirlenmelidir.</p>
            </section>

            <div className="article-sources">
              <h2>Kaynaklar ve güncel durum</h2>
              <a href={ocegUrl} target="_blank" rel="noreferrer"><span>OCEG</span> GRC tanımı ve bütünleşik kabiliyet yaklaşımı <i>↗</i></a>
              <a href={iso31000Url} target="_blank" rel="noreferrer"><span>ISO 31000</span> Risk yönetimi — İlkeler ve rehber <i>↗</i></a>
              <a href={iso37301Url} target="_blank" rel="noreferrer"><span>ISO 37301</span> Uyum yönetim sistemleri <i>↗</i></a>
              <a href={iso27001Url} target="_blank" rel="noreferrer"><span>ISO 27001</span> Bilgi güvenliği yönetim sistemi <i>↗</i></a>
              <a href={threeLinesUrl} target="_blank" rel="noreferrer"><span>IIA</span> Üç Hat Modeli — güncel açıklama <i>↗</i></a>
              <a href={spkUrl} target="_blank" rel="noreferrer"><span>SPK</span> KVHS’lere ilişkin iki Tebliğ <i>↗</i></a>
              <a href={masakUrl} target="_blank" rel="noreferrer"><span>MASAK</span> Güncel KVHS yükümlülük rehberi <i>↗</i></a>
            </div>
            <p className="article-disclaimer">Bu yazı genel bilgilendirme amaçlıdır; hukuki görüş, sertifikasyon değerlendirmesi veya belirli bir GRC ürününe ilişkin tavsiye değildir. Standart ve mevzuat durumları 30 Temmuz 2026 tarihinde kontrol edilmiştir.</p>
          </div>
        </div>
      </article>
      <DetailFooter />
    </main>
  );
}
