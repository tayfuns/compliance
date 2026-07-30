import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../components/DetailHeader";

const masakGuideUrl =
  "https://ms.hmb.gov.tr/uploads/sites/12/2025/09/KVHS-Yukumluluklere-Uyum-Rehberi-740beebec7fb3391.pdf";
const masakAnnouncementUrl =
  "https://masak.hmb.gov.tr/duyuru/kripto-varlik-hizmet-saglayicilar-rehberi-guncellendi-ve-yayimlandi";
const b2Url = "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-6.htm";

export const metadata: Metadata = {
  title: "Seyahat Kuralı Nedir? | Kripto Uyum Pusulası",
  description:
    "Türkiye’de kripto varlık transferlerinde Seyahat Kuralı: 15.000 TL eşiği, zorunlu gönderici ve alıcı bilgileri, kişisel cüzdanlar, yurt dışı transferler ve eksik bilgi yönetimi.",
};

export default function TravelRulePage() {
  return (
    <main>
      <DetailHeader />
      <article className="article-page travel-rule-page">
        <header className="article-hero">
          <a className="back-link" href="/mevzuat">← Mevzuata dön</a>
          <div className="article-meta">
            <span>MASAK · TRANSFER UYUMU</span>
            <time>Uygulama rehberi</time>
          </div>
          <h1>Seyahat Kuralı<br /><em>nedir?</em></h1>
          <p>Kripto varlık transferinin kimden kime yapıldığını gösteren bilgilerin, transferle birlikte güvenli ve kesintisiz biçimde aktarılmasını sağlayan kuraldır.</p>
        </header>

        <div className="article-layout">
          <aside className="article-toc">
            <span>BU REHBERDE</span>
            <a href="#kural">01 — Kuralın amacı</a>
            <a href="#esikler">02 — Tutar eşikleri</a>
            <a href="#senaryolar">03 — Transfer senaryoları</a>
            <a href="#eksik-bilgi">04 — Eksik bilgi</a>
            <a href="#operasyon">05 — Operasyon akışı</a>
            <a href="#kisitlamalar">06 — Süre ve limitler</a>
            <a href="#mevzuat">07 — İlgili mevzuat</a>
          </aside>

          <div className="article-content">
            <section id="kural">
              <p className="article-lead">Seyahat Kuralı, kripto varlığın zincir üzerindeki hareketinden ayrı bir bilgi akışıdır. Gönderici ve alıcıya ait belirli bilgiler transfer mesajına eklenir, transfer zinciri boyunca korunur ve nihai hizmet sağlayıcıya ulaştırılır.</p>
              <p>Türkiye’de yükümlülük, 6362 sayılı Sermaye Piyasası Kanunu’nun 35/C maddesi ile MASAK Tedbirler Yönetmeliği’nin 24/A maddesine dayanır. Platformlar ve kripto varlık saklama hizmeti sağlayan kuruluşlar bu yükümlülüğü uygulamak zorundadır.</p>
              <div className="callout">
                <b>Ana ilke</b>
                <p>Bilgiler blokzincirin üzerine yazılmak zorunda değildir. Dağıtık defter teknolojisi, bağımsız mesajlaşma platformu veya API kullanılabilir; ancak bilgi transferle eş zamanlı, güvenli ve izlenebilir biçimde gönderilmelidir.</p>
              </div>
              <div className="definition-grid">
                <div><span>EŞİK</span><b>15.000 TL</b><p>Tek bir transfer veya birbiriyle bağlantılı işlemlerin toplamı bakımından dikkate alınır.</p></div>
                <div><span>KAPSAM</span><b>Platform + saklama</b><p>Türkiye’de platformlar ile kripto varlık saklama hizmeti sağlayan kuruluşlar yükümlüdür.</p></div>
                <div><span>ZAMANLAMA</span><b>Transferle eş zamanlı</b><p>Bilgi, transfer tamamlandıktan sonra değil transfer mesajıyla birlikte güvenli biçimde iletilir.</p></div>
                <div><span>ZİNCİR</span><b>Uçtan uca korunur</b><p>Aracı tüm KVHS’ler gerekli gönderici bilgisini aktarmaya devam eder.</p></div>
              </div>
            </section>

            <section id="esikler">
              <p className="section-kicker">01 / TUTARA GÖRE UYGULAMA</p>
              <h2>15.000 TL altı ve üstünde ne değişir?</h2>
              <p>Eşik, bilgi taşıma yükümlülüğünü ortadan kaldırmaz; taşınacak bilginin kapsamını ve teyit seviyesini değiştirir.</p>
              <table className="article-table">
                <thead>
                  <tr><th>Transfer</th><th>Gönderici bilgisi</th><th>Alıcı bilgisi</th><th>Teyit</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15.000 TL veya üzeri</td>
                    <td>Ad-soyad / unvan / tam ad; cüzdan adresi veya referans numarası; ayrıca adres, doğum yeri ve tarihi, müşteri numarası, vatandaşlık, pasaport ya da vergi kimlik numarası gibi belirleyici bilgilerden en az biri</td>
                    <td>Ad-soyad / unvan / tam ad; cüzdan adresi veya referans numarası</td>
                    <td>Gönderici bilgileri teyit edilir. Alıcı bilgisinin mesajı gönderen KVHS tarafından teyidi zorunlu değildir.</td>
                  </tr>
                  <tr>
                    <td>15.000 TL’nin altında</td>
                    <td>Ad-soyad / unvan / tam ad; cüzdan adresi veya referans numarası</td>
                    <td>Ad-soyad / unvan / tam ad; cüzdan adresi veya referans numarası</td>
                    <td>Mesajı gönderen KVHS bakımından bu bilgilerin teyidi zorunlu değildir.</td>
                  </tr>
                </tbody>
              </table>
              <div className="callout warning">
                <b>Alıcı KVHS</b>
                <p>Alıcının müşterisi olduğu KVHS, gelen mesajdaki alıcı bilgilerini kendi müşteri tanıma kayıtlarıyla Tedbirler Yönetmeliği’nin 5’inci maddesi çerçevesinde teyit eder.</p>
              </div>
            </section>

            <section id="senaryolar">
              <p className="section-kicker">02 / SENARYO BAZLI KARAR</p>
              <h2>Hangi durumda ne uygulanır?</h2>
              <div className="travel-scenarios">
                <article>
                  <span>01</span>
                  <div><h3>Türkiye’deki iki KVHS arasında</h3><p>Tutar eşiğine göre zorunlu bilgi setini oluşturun, karşı KVHS’ye transferle eş zamanlı ve güvenli gönderin. Aracı bir KVHS varsa gönderici bilgisinin zincir boyunca korunmasını sağlayın.</p></div>
                </article>
                <article>
                  <span>02</span>
                  <div><h3>Kişisel / kayıtlı olmayan cüzdana veya cüzdandan</h3><p>Kendi müşterinizden karşı tarafın gerçek kişi ise ad-soyadını, tüzel kişi ise unvanını ve kişiyi belirleyen bilgilerden en az birini beyan olarak alın. Risk seviyesine göre ilave bilgi ve belge isteyin.</p></div>
                </article>
                <article>
                  <span>03</span>
                  <div><h3>Yurt dışındaki kuruluş bilgi paylaşmıyorsa</h3><p>Kendi müşterinizden karşı tarafın adı-soyadı veya unvanı ile belirleyici bilgilerden en az birini alın. Risk temelli ilave kanıt isteyin; taraflar hakkında yeterli bilgi sağlanamazsa transferi gerçekleştirmemeyi değerlendirin.</p></div>
                </article>
                <article>
                  <span>04</span>
                  <div><h3>Yurt dışındaki kuruluş bilgi paylaşabiliyorsa</h3><p>Zorunlu bilgileri güvenli mesajlaşma sistemi, API veya uygun teknolojik araç üzerinden alın ve gönderin. Gelen bilgi setini müşteri ve işlem riskiyle birlikte kontrol edin.</p></div>
                </article>
                <article>
                  <span>05</span>
                  <div><h3>Saklama kuruluşu platform adına transfer yapıyorsa</h3><p>Müşteri varlıklarının tamamı saklama kuruluşunda ve transfer sıcak cüzdanı üzerinden gerçekleşiyorsa Seyahat Kuralını saklama kuruluşu uygular. Platformun kuralı tekrar uygulaması gerekmez; diğer MASAK yükümlülükleri devam eder.</p></div>
                </article>
                <article>
                  <span>06</span>
                  <div><h3>Bilgi veya belgeler yeterli değilse</h3><p>Transferi gerçekleştirmeme, işlemleri sınırlandırma veya iş ilişkisini sona erdirme seçeneklerini risk temelli değerlendirin. Şüpheli işlem bildirimi gerekip gerekmediğini ayrıca inceleyin.</p></div>
                </article>
              </div>
            </section>

            <section id="eksik-bilgi">
              <p className="section-kicker">03 / EKSİK BİLGİ YÖNETİMİ</p>
              <h2>Eksik mesaj otomatik olarak kabul edilmez.</h2>
              <ol>
                <li><b>Transferi işaretleyin:</b> Mesajdaki zorunlu alanları eşik ve transfer türüne göre otomatik kontrol edin.</li>
                <li><b>Tamamlatın:</b> Gönderen KVHS’den eksik bilgiyi tamamlamasını talep edin.</li>
                <li><b>İade edin:</b> Bilgi tamamlanmazsa kripto varlık transferini iade edin.</li>
                <li><b>Tekrarı izleyin:</b> Mesajları sürekli eksik gelen karşı kuruluşa ait transferleri reddetme, sınırlandırma veya iş ilişkisini sona erdirme seçeneklerini değerlendirin.</li>
                <li><b>Şüpheyi ayrıca değerlendirin:</b> Eksik veya tutarsız bilgi, şüpheli işlem bildirimi analizinden bağımsız tutulmamalıdır.</li>
              </ol>
              <p className="source-note">Seyahat Kuralına uygun bilgi bulunması, yaptırım taraması, zincir üstü risk analizi, müşteri profili kontrolü ve şüpheli işlem bildirimi yükümlülüklerinin yerine geçtiği anlamına gelmez.</p>
            </section>

            <section id="operasyon">
              <p className="section-kicker">04 / UYGULAMA AKIŞI</p>
              <h2>Transfer kapısında beş kontrol.</h2>
              <div className="process-grid travel-process">
                <div><span>01</span><h3>Sınıflandır</h3><p>Tutarı, bağlantılı işlemleri, karşı taraf türünü ve ülkeyi belirle.</p></div>
                <div><span>02</span><h3>Topla</h3><p>Eşiğe ve senaryoya uygun gönderici/alıcı bilgisini eksiksiz al.</p></div>
                <div><span>03</span><h3>Teyit et</h3><p>Zorunlu gönderici bilgisini ve gelen alıcı bilgisini gerekli kapsamda doğrula.</p></div>
                <div><span>04</span><h3>Tara</h3><p>Yaptırım, müşteri riski, cüzdan riski ve işlem amacı kontrollerini çalıştır.</p></div>
                <div><span>05</span><h3>Aktar ve kanıtla</h3><p>Bilgiyi güvenli kanaldan eş zamanlı gönder; mesaj, kontrol ve karar izini sakla.</p></div>
              </div>
              <h3>Kontrol sahipliği nasıl kurulmalı?</h3>
              <ul className="check-list">
                <li><b>Uyum:</b> veri seti, eşik, risk kabulü, eksik bilgi ve ŞİB karar kurallarını belirler.</li>
                <li><b>Operasyon:</b> istisna kuyruğunu, bilgi tamamlama talebini ve iade sürecini yürütür.</li>
                <li><b>Teknoloji:</b> güvenli mesajlaşma, alan doğrulama, eşleştirme, log ve erişim kontrollerini işletir.</li>
                <li><b>Bilgi güvenliği / KVKK:</b> aktarımın gizliliği, veri minimizasyonu, saklama ve yetki modelini kontrol eder.</li>
                <li><b>İç kontrol:</b> örneklem testleriyle eşik, teyit, iade ve kayıtların tasarlandığı gibi çalıştığını doğrular.</li>
              </ul>
            </section>

            <section id="kisitlamalar">
              <p className="section-kicker">05 / AYRI TRANSFER TEDBİRLERİ</p>
              <h2>Süre ve tutar kısıtları Seyahat Kuralıyla karıştırılmamalı.</h2>
              <p>MASAK’ın 29 Sıra No’lu Genel Tebliği, belirli kişisel cüzdan ve bilgi paylaşmayan yurt dışı kuruluş transferlerinde Seyahat Kuralına ek olarak aşağıdaki sıkılaştırılmış tedbirleri öngörür:</p>
              <div className="metric-list">
                <div><b>48 saat</b><span>İlgili kripto varlığın alım, takas veya yatırma işleminden sonra çekim için asgari bekleme süresi.</span></div>
                <div><b>72 saat</b><span>Müşterinin ilk kripto varlık çekim işlemi için uygulanacak asgari bekleme süresi.</span></div>
                <div><b>3.000 USD / gün</b><span>Stabil kripto varlık çekimlerinde genel günlük limit.</span></div>
                <div><b>50.000 USD / ay</b><span>Stabil kripto varlık çekimlerinde genel aylık limit.</span></div>
                <div><b>2 kat limit</b><span>Seyahat Kuralı yükümlülüğünün uygulandığı transferlerde stabil kripto varlık limitleri iki kat uygulanabilir.</span></div>
                <div><b>20 karakter</b><span>Tüm kripto varlık transferlerinde müşteriden alınması gereken işlem açıklamasının asgari uzunluğu.</span></div>
              </div>
              <p>Likidite sağlayıcılığı, piyasa yapıcılığı veya piyasalar arası arbitraj amacı kesin olarak belirlenen transferlerde; müşteri tanıma, belge, kaçınmayı önleme, sürekli izleme ve müşteri bazında yönetim kurulu onayı şartlarıyla süre ve tutar limitleri uygulanmayabilir. Platform–saklama kuruluşu arasında sermaye piyasası mevzuatından kaynaklanan transferler için de rehberde ayrı istisna yer alır.</p>
            </section>

            <div className="article-sources" id="mevzuat">
              <h2>İlgili mevzuat ve resmî rehber</h2>
              <a href={masakGuideUrl} target="_blank" rel="noreferrer"><span>MASAK</span> Kripto Varlık Hizmet Sağlayıcılar Yükümlülüklere Uyum Rehberi <i>↗</i></a>
              <a href={masakAnnouncementUrl} target="_blank" rel="noreferrer"><span>MASAK</span> Rehberin yayımlanmasına ilişkin duyuru <i>↗</i></a>
              <a href={b2Url} target="_blank" rel="noreferrer"><span>III-35/B.2</span> Transfer emirlerinin gerçekleştirilmesine ilişkin esaslar <i>↗</i></a>
            </div>
            <p className="article-disclaimer">Bu sayfa genel bilgilendirme amaçlıdır. Eşikler, parasal limitler ve uygulama esasları değişebileceğinden işlem tarihinde yürürlükte bulunan mevzuat ve resmî rehberler ayrıca kontrol edilmelidir.</p>
          </div>
        </div>
      </article>
      <DetailFooter />
    </main>
  );
}
