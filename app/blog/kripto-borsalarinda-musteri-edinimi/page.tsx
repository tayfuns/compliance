import type { Metadata } from "next";
import { DetailFooter, DetailHeader } from "../../components/DetailHeader";

const masakGuideUrl =
  "https://ms.hmb.gov.tr/uploads/sites/12/2025/09/KVHS-Yukumluluklere-Uyum-Rehberi-740beebec7fb3391.pdf";
const masak19Url = "https://masak.hmb.gov.tr/masak-genel-tebligi-sira-no-19/";
const masakRemoteUrl = "https://masak.hmb.gov.tr/uzaktan-kimlik-tespiti/";
const b1Url = "https://www.resmigazete.gov.tr/eskiler/2025/03/20250313-5.htm";

export const metadata: Metadata = {
  title: "Kripto Borsalarında Müşteri Edinimi | Kripto Uyum Pusulası",
  description:
    "Kripto borsalarında yüz yüze, uzaktan ve Türk uyruklu olmayan gerçek kişilerin müşteri edinimi; alınması ve teyit edilmesi gereken bilgi, belge ve risk verileri.",
};

export default function CryptoCustomerOnboardingArticle() {
  return (
    <main>
      <DetailHeader />
      <article className="article-page onboarding-article">
        <header className="article-hero">
          <a className="back-link" href="/blog">← Bloga dön</a>
          <div className="article-meta"><span>MÜŞTERİ EDİNİMİ &amp; KYC</span><time>15 dk okuma · Temmuz 2026</time></div>
          <h1>Kripto borsalarında<br /><em>müşteri edinimi.</em></h1>
          <p>Yüz yüze, uzaktan ve yabancı müşteri kabulünde kimlik tespiti, risk değerlendirmesi, sözleşme ve ilk işlem kontrollerinin nasıl kurulacağına ilişkin uygulama rehberi.</p>
        </header>

        <div className="article-layout">
          <aside className="article-toc">
            <span>BU YAZIDA</span>
            <a href="#temel">01 — Temel çerçeve</a>
            <a href="#uzaktan">02 — Uzaktan müşteri</a>
            <a href="#yuzyuze">03 — Yüz yüze müşteri</a>
            <a href="#yabanci">04 — Türk olmayan müşteri</a>
            <a href="#veriler">05 — Alınacak veriler</a>
            <a href="#risk">06 — Risk ve taramalar</a>
            <a href="#karar">07 — Kabul kararı</a>
            <a href="#kanit">08 — Kayıt ve kanıt</a>
          </aside>

          <div className="article-content">
            <section id="temel">
              <p className="article-lead">Kripto borsasında hesap açmak, tutardan bağımsız olarak sürekli iş ilişkisi kurmaktır. Kimlik tespiti ve müşteri tanıma kontrolleri sözleşme kurulmadan ve müşteriye işlem yetkisi verilmeden önce tamamlanmalıdır.</p>
              <p>Kimlik belgesini görmek tek başına yeterli değildir. Müşterinin kim olduğu, kendi adına mı hareket ettiği, iş ilişkisinin amacı, beklenen işlem profili, fon ve malvarlığı kaynağı ile finansal suç ve yaptırım riski birlikte değerlendirilir. Müşteri edinimi; kimlik doğrulama, risk sınıflandırma, sözleşme, hesap aktivasyonu ve sürekli izlemeye devirden oluşan uçtan uca bir süreçtir.</p>
              <div className="definition-grid">
                <div><span>ZAMAN</span><b>İşlemden önce</b><p>Kimlik tespiti ve gerekli kontroller, sürekli iş ilişkisi kurulmadan önce tamamlanır.</p></div>
                <div><span>EŞİK</span><b>Tutar gözetilmez</b><p>Üyelik sözleşmesi sürekli iş ilişkisi olduğu için hesap açılışında parasal eşik aranmaz.</p></div>
                <div><span>KAPSAM</span><b>Kimlikten fazlası</b><p>Amaç, gerçek faydalanıcı, risk profili, fon kaynağı ve beklenen faaliyet anlaşılır.</p></div>
                <div><span>SONUÇ</span><b>Risk bazlı karar</b><p>Kabul, ilave kontrol, üst yönetim onayı veya ret kararı kanıtıyla birlikte kaydedilir.</p></div>
              </div>
              <div className="callout">
                <b>Asgari ilke</b>
                <p>Kimliği tespit edilemeyen, iş ilişkisinin amacı hakkında yeterli bilgi alınamayan veya gerçek faydalanıcısı makul ölçüde ortaya çıkarılamayan kişiyle iş ilişkisi kurulmaz.</p>
              </div>
            </section>

            <section id="uzaktan">
              <p className="section-kicker">01 / UZAKTAN MÜŞTERİ EDİNİMİ</p>
              <h2>Dijital akış, yüz yüze sürecin daha azı değildir.</h2>
              <p>KVHS’ler gerçek kişi müşterileri uzaktan edinirken MASAK Genel Tebliği Sıra No: 19 ile III-42.1 sayılı Tebliğdeki yöntemleri birlikte uygular. Süreç çevrimiçi, kesintisiz, görüntülü ve gerçek zamanlı yürütülür; tüm adımlar denetlenebilir biçimde kayıt altına alınır.</p>
              <div className="process-grid">
                <div><span>01</span><h3>Başvuruyu al</h3><p>Kimlik, iletişim, adres, meslek, amaç, işlem profili ve beyanları elektronik formda topla.</p></div>
                <div><span>02</span><h3>Belgeyi doğrula</h3><p>Kimlik kartını NFC ile oku; belge bütünlüğü, geçerlilik ve veri eşleşmesini kontrol et.</p></div>
                <div><span>03</span><h3>Kişiyi doğrula</h3><p>Canlılık, biyometrik yüz–fotoğraf eşleşmesi ve sahte yüz saldırısı kontrollerini uygula.</p></div>
                <div><span>04</span><h3>İletişimi doğrula</h3><p>İşleme özgü tek kullanımlık şifreyle cep telefonu numarasını teyit et.</p></div>
                <div><span>05</span><h3>Tara ve puanla</h3><p>Yaptırım, PEP, olumsuz haber, cihaz, IP, coğrafi konum ve müşteri riskini değerlendir.</p></div>
                <div><span>06</span><h3>Sözleş ve aktive et</h3><p>Risk bildirimini ve sözleşmeyi tamamla; gerekli ilk finansal hareket kontrolünden sonra yetki ver.</p></div>
              </div>
              <h3>Türk vatandaşı için teknik kontroller</h3>
              <ul className="check-list">
                <li><b>Kimlik kartı:</b> Türkiye Cumhuriyeti kimlik kartı kullanılmalı; ad, soyad, doğum tarihi ve T.C. kimlik numarası KPS üzerinden doğrulanmalıdır.</li>
                <li><b>NFC:</b> Kimlik kartı yakın alan iletişimiyle doğrulanır. NFC doğrulaması yapılamazsa belgedeki en az dört güvenlik unsurunun şekil ve içeriği doğrulanmalıdır.</li>
                <li><b>Biyometri:</b> Canlı yüz ile çipten, bu mümkün değilse belge üzerinden alınan fotoğraf karşılaştırılmalı; canlılık ve sahte yüz riskine karşı tedbir uygulanmalıdır.</li>
                <li><b>Kayıt:</b> Sürecin görüntü, veri, onay ve hata adımları yetkili mercilere sunulabilecek şekilde saklanmalıdır.</li>
                <li><b>Dış hizmet:</b> Sürecin kısmen veya tamamen dış hizmetle yürütülmesi halinde hizmet sağlayıcının TS EN ISO/IEC 27001 sertifikası bulunmalıdır.</li>
                <li><b>İlk para hareketi:</b> Para yatırma ve çekme, müşterinin kimliğiyle uyumlu banka veya kredi kartı hesabı üzerinden yapılmalıdır.</li>
              </ul>
              <div className="callout warning">
                <b>NFC çalışmazsa</b>
                <p>Türk kimlik kartında NFC doğrulaması yapılamadığı ve alternatif güvenlik unsurları kullanıldığı durumda, sürekli iş ilişkisi kurulmadan önce ilk finansal hareketin müşterini tanı esaslarını uygulayan başka bir finansal kuruluştaki müşteriye ait hesaptan gelmesi zorunludur.</p>
              </div>
              <p>Uzaktan edinilen müşteri için işleme konu varlık ve fon kaynağı, iş ilişkisinin amacı, ortalama gelir, beklenen aylık işlem hacmi ve işlem sayısı alınmalı; riskle orantılı işlem/tutar limiti, daha sık güncelleme veya üst yönetim onayı gibi sıkılaştırılmış tedbirler uygulanmalıdır.</p>
            </section>

            <section id="yuzyuze">
              <p className="section-kicker">02 / YÜZ YÜZE MÜŞTERİ EDİNİMİ</p>
              <h2>Belge ibrazı, karşılaştırma ve imza birlikte yürür.</h2>
              <p>Yüz yüze müşteri ediniminde görevli, müşterinin kimlik belgesinin aslını veya noterce onaylanmış suretini görür; kişiyi belge fotoğrafıyla karşılaştırır, alınması zorunlu bilgileri kaydeder ve teyide esas belgenin okunabilir kopyasını ya da elektronik görüntüsünü alır. İmza örneği yüz yüze akışta zorunludur.</p>
              <table className="article-table">
                <thead><tr><th>Adım</th><th>Uygulama</th><th>Kontrol noktası</th></tr></thead>
                <tbody>
                  <tr><td>Belge kabulü</td><td>Türk vatandaşı için kabul edilen resmî kimlik belgesi; yabancı için pasaport, ikamet belgesi veya Bakanlıkça uygun görülen belge</td><td>Geçerlilik, bütünlük, fotoğraf ve belge numarası</td></tr>
                  <tr><td>Kimlik teyidi</td><td>Ad, soyad, doğum tarihi, kimlik türü/numarası ve Türk vatandaşı için T.C. kimlik numarasını belgeden teyit et</td><td>Kişi–fotoğraf eşleşmesi ve belge sahteciliği belirtileri</td></tr>
                  <tr><td>Adres teyidi</td><td>Yerleşim yeri belgesi, son üç aylık abonelik faturası, kamu belgesi veya kabul edilen diğer yöntem</td><td>Ad, adres, belge tarihi ve ayırt edici bilgi</td></tr>
                  <tr><td>Beyanlar</td><td>İş ilişkisinin amacı, kendi/başkası hesabına hareket, meslek ve beklenen faaliyet</td><td>Tutarlılık ve gerçek faydalanıcı şüphesi</td></tr>
                  <tr><td>İmza ve sözleşme</td><td>İmza örneği, risk bildirim formu ve çerçeve sözleşme</td><td>Yetki, tarih, sürüm ve müşteri onayı</td></tr>
                  <tr><td>Risk kararı</td><td>Taramaları tamamla, risk sınıfını belirle ve gerekiyorsa üst onay al</td><td>Hesap aktivasyonundan önce karar kaydı</td></tr>
                </tbody>
              </table>
              <p>Kimlik tespiti kurye veya destek hizmeti kuruluşu yardımıyla yapılabilir; ancak bu kuruluşlar KVHS adına hareket eder ve nihai sorumluluk KVHS’de kalır. Hizmetin kapsamı, sorumluluklar, güvenlik ve denetim hakları yazılı sözleşmede açıkça tanımlanmalıdır.</p>
            </section>

            <section id="yabanci">
              <p className="section-kicker">03 / TÜRK UYRUKLU OLMAYAN MÜŞTERİ</p>
              <h2>27 Haziran 2026’dan beri iki geçerli yol var.</h2>
              <p>Yabancı gerçek kişi yüz yüze alınabileceği gibi, yeni MASAK düzenlemesindeki özel koşullar sağlanırsa pasaportla uzaktan da edinilebilir. Her iki yöntemde uyruğa bağlı risk, ikamet, vergi mukimliği, yaptırım, PEP ve fon kaynağı değerlendirmesi ayrıca yapılır.</p>
              <h3>Yüz yüze yabancı müşteri</h3>
              <p>Ad, soyad, doğum yeri ve tarihi, uyruk, kimlik belgesi türü ve numarası; pasaport, fotoğraflı ikamet izni veya Bakanlıkça uygun görülen kimlik belgesi üzerinden teyit edilir. Yabancı ülke sürücü belgesi tek başına kabul edilen teyit belgeleri arasında değildir. Açık adres ayrıca uygun belgeyle doğrulanır.</p>
              <h3>Pasaportla uzaktan yabancı müşteri</h3>
              <ul className="check-list">
                <li><b>Belge şartı:</b> Pasaport ICAO 9303 standardına uygun ve NFC özellikli olmalıdır.</li>
                <li><b>Görüşme:</b> Pasaportla uzaktan kimlik tespiti konusunda özel eğitimli personel görüntülü görüşme yapmalıdır.</li>
                <li><b>Zorunlu NFC:</b> Çipteki bilgiler pasaport üzerindeki bilgilerle eşleştirilir. Doğrulama yapılamazsa uzaktan iş ilişkisi kurulamaz.</li>
                <li><b>Görüntü:</b> Görüşme sırasında kişiyi ve sunduğu pasaport bilgilerini gösteren görüntüler alınır.</li>
                <li><b>Teknik risk:</b> IP/port, cihaz kimliği, coğrafi konum ve tarayıcı gibi veriler pasaport bilgileriyle birlikte analiz edilir; şüphe varsa süreç sonlandırılır.</li>
                <li><b>Ülke riski:</b> Kurumun riskli belirlediği ülkelerin vatandaşları bu yöntemle müşteri olarak kabul edilemez.</li>
                <li><b>Risk sınıfı:</b> Bu yöntemle edinilen müşteri yüksek risk grubunda izlenir ve sıkılaştırılmış kontrollere tabi tutulur.</li>
              </ul>
              <div className="callout warning">
                <b>Adres ve işlem kısıtı</b>
                <p>Adres; yerleşim yeri belgesi, son üç aylık adres temelli fatura, kamu belgesi veya ülkenin kamuya açık veri tabanı ile en geç üç ayda teyit edilmelidir. Adres teyit edilmeden para transferi ve nakit çekim yapılamaz.</p>
              </div>
              <p>Hesap kullanılmadan önce müşterinin kimliğiyle uyumlu yurt içi/yurt dışı banka hesabı veya banka/kredi kartından doğrulama transferi yapılır. Bu özel yöntemle açılan hesaba yurt dışından yalnızca kişinin kendi adına açılmış banka hesaplarından para gelebilir; yurt dışına para çıkışı da yalnızca aynı kişinin kendi banka hesaplarına yapılabilir. Müşteriye daha sonra yüz yüze kimlik tespiti uygulanırsa Tebliğde belirtilen kapsamda bu kısıtlar kalkabilir.</p>
              <p>Ticaret siciline kayıtlı bir tüzel kişiyi temsile yetkili yabancı gerçek kişinin kimliği de aynı pasaportlu uzaktan yöntemle tespit edilebilir; ayrıca tüzel kişi ve temsil yetkisine ilişkin bilgi-belgeler ayrı olarak doğrulanır.</p>
            </section>

            <section id="veriler">
              <p className="section-kicker">04 / VERİ ENVANTERİ</p>
              <h2>Hangi veriler alınmalı?</h2>
              <p>Aşağıdaki tablo gerçek kişi için temel veri setini gösterir. “Alınması zorunlu” olan her alanın aynı belge üzerinden teyit edilmesi gerekmez; teyit edilecek alan ve yöntem mevzuatta ayrıca belirlenir.</p>
              <table className="article-table">
                <thead><tr><th>Veri grubu</th><th>Alınacak bilgiler</th><th>Temel teyit / kullanım</th></tr></thead>
                <tbody>
                  <tr><td>Kimlik</td><td>Ad, soyad, doğum tarihi, uyruk, kimlik belgesi türü ve numarası; Türk vatandaşı için T.C. kimlik numarası, yabancı için doğum yeri</td><td>Resmî kimlik belgesi, KPS veya yabancı müşteri için geçerli pasaport/ikamet belgesi</td></tr>
                  <tr><td>Adres</td><td>Açık yerleşim adresi, ülke ve mümkünse posta kodu</td><td>Yerleşim belgesi, son üç aylık fatura, kamu belgesi veya kabul edilen veri tabanı</td></tr>
                  <tr><td>İletişim</td><td>Telefon, varsa faks ve elektronik posta adresi</td><td>Uzaktan süreçte telefon için işleme özgü OTP; risk bazlı e-posta doğrulama</td></tr>
                  <tr><td>Meslek ve mali profil</td><td>İş/meslek, işveren veya faaliyet alanı, ortalama gelir, fon ve malvarlığı kaynağı</td><td>Beyan; yüksek riskte bordro, vergi, banka veya kaynak belgesi</td></tr>
                  <tr><td>İş ilişkisi</td><td>Hesap açma amacı, talep edilen ürünler, aylık tahmini işlem hacmi ve işlem sayısı</td><td>Müşteri profili ve sonraki işlem izleme senaryolarının başlangıç değeri</td></tr>
                  <tr><td>Temsil ve faydalanıcı</td><td>Kendi adına/başkası hesabına hareket beyanı; varsa temsil edilen kişi ve gerçek faydalanıcı</td><td>Yazılı/elektronik beyan, yetki belgesi ve gerçek faydalanıcı teyidi</td></tr>
                  <tr><td>Vergi ve düzenleyici</td><td>Mukim olunan ülkenin vergi kimlik veya sosyal güvenlik numarası gibi eşdeğer numarası; vergi mukimliği</td><td>III-35/B.1 kapsamında müşteri kimlik bilgisi ve gerekli düzenleyici raporlama</td></tr>
                  <tr><td>Risk</td><td>PEP durumu, yaptırım ve dondurma listesi eşleşmeleri, olumsuz haber, ülke ve ürün riski</td><td>Güvenilir tarama kaynakları, eşleşme incelemesi ve karar kaydı</td></tr>
                  <tr><td>Teknik</td><td>IP/port, cihaz kimliği, coğrafi konum, tarayıcı, oturum ve doğrulama sonuçları</td><td>Uzaktan edinimde sahtecilik, hesap paylaşımı ve konum tutarsızlığı analizi</td></tr>
                  <tr><td>Onay ve kayıt</td><td>İmza veya elektronik sözleşme onayı, risk bildirim formu, aydınlatma/izin kayıtları</td><td>Sürüm, zaman damgası, kanal, onay ve değiştirilemez denetim izi</td></tr>
                </tbody>
              </table>
              <p className="source-note">Veri toplama “ne kadar çok, o kadar iyi” yaklaşımıyla yapılmamalıdır. MASAK/SPK yükümlülüğü, risk ihtiyacı ve KVKK’daki amaçla bağlantılılık, sınırlılık ve ölçülülük ilkeleri birlikte değerlendirilmelidir.</p>
            </section>

            <section id="risk">
              <p className="section-kicker">05 / RİSK DEĞERLENDİRMESİ</p>
              <h2>Kimlik doğru olsa da müşteri riski yüksek olabilir.</h2>
              <ul className="check-list">
                <li><b>Yaptırım ve dondurma:</b> Müşteri, temsilci ve gerçek faydalanıcı güncel ulusal/uluslararası listelerde taranmalıdır.</li>
                <li><b>PEP:</b> Müşteri veya gerçek faydalanıcının kamusal nüfuz sahibi kişi ve ilgili yakın/ilişkili kişi durumu değerlendirilmelidir.</li>
                <li><b>Ülke:</b> Vatandaşlık, ikamet, IP, telefon ve fon kaynağı ülkeleri birlikte ele alınmalıdır.</li>
                <li><b>Ürün ve kanal:</b> Uzaktan edinim, gizlilik artırıcı ürün, yüksek limit veya karmaşık tüzel yapı riski artırabilir.</li>
                <li><b>Davranış:</b> Form, belge, cihaz, görüntü, banka hesabı ve beyanlar arasındaki tutarsızlık incelenmelidir.</li>
                <li><b>Kaynak:</b> Gelir, meslek, beklenen hacim ve fon kaynağı birbiriyle makul olmalıdır.</li>
              </ul>
              <p>Risk sonucu; standart kabul, ilave belge, daha düşük işlem limiti, daha sık güncelleme, üst yönetim onayı, sıkı izleme veya ret seçeneklerinden birine bağlanmalıdır. Şüpheli işlem bildirimi gerektiren durumlar tutardan bağımsız ayrıca değerlendirilir.</p>
            </section>

            <section id="karar">
              <p className="section-kicker">06 / KABUL, BEKLETME VE RET</p>
              <h2>Hesap açılması ile işlem yetkisi aynı karar olmak zorunda değil.</h2>
              <div className="travel-scenarios">
                <article><span>01</span><div><h3>Kabul</h3><p>Kimlik ve adres doğrulanmış, taramalar temiz, profil tutarlı ve gerekli sözleşmeler tamamlanmışsa risk sınıfına uygun limitlerle hesabı aktive edin.</p></div></article>
                <article><span>02</span><div><h3>Koşullu / sınırlı aktivasyon</h3><p>Mevzuat izin veriyor ancak adres teyidi veya ek kaynak belgesi bekleniyorsa sadece izin verilen fonksiyonları açın; engelleri sistem seviyesinde uygulayın.</p></div></article>
                <article><span>03</span><div><h3>İlave inceleme</h3><p>PEP, yüksek riskli ülke, olağandışı mali profil, karmaşık sahiplik veya belge tutarsızlığında uzman incelemesi ve gerektiğinde üst yönetim onayı alın.</p></div></article>
                <article><span>04</span><div><h3>Ret</h3><p>Kimlik teyit edilemiyor, iş ilişkisinin amacı anlaşılmıyor, gerçek faydalanıcı belirlenemiyor veya kabul edilemez risk bulunuyorsa ilişkiyi kurmayın; ŞİB gereğini ayrıca değerlendirin.</p></div></article>
              </div>
            </section>

            <section id="kanit">
              <p className="section-kicker">07 / KAYIT VE SÜREKLİ İZLEME</p>
              <h2>Onboarding bittiğinde müşteri tanıma bitmez.</h2>
              <p>Müşteri dosyasında başvuru verileri, kimlik ve adres teyit kanıtları, görüntülü süreç kayıtları, tarama sonuçları, risk puanı, onaylar, sözleşme ve ilk finansal hareket kontrolü ilişkilendirilmelidir. Veriler değişiklik tarihi ve kaynağıyla sürümlenmeli; yetkili mercilere sunulabilir olmalıdır.</p>
              <p>Müşterinin işlemleri, edinimde beyan ettiği amaç, gelir, fon kaynağı, tahmini hacim ve işlem sayısıyla karşılaştırılır. Risk değiştiğinde bilgi güncellenir, limit ve izleme senaryoları yeniden kalibre edilir. Daha önce alınan bilgilerin yeterliliği veya doğruluğundan şüphe duyulması halinde kimlik tespiti tutardan bağımsız yenilenir.</p>
            </section>

            <div className="article-sources">
              <h2>İlgili mevzuat ve resmî kaynaklar</h2>
              <a href={masak19Url} target="_blank" rel="noreferrer"><span>MASAK 19</span> Uzaktan kimlik tespiti — güncel Tebliğ <i>↗</i></a>
              <a href={masakRemoteUrl} target="_blank" rel="noreferrer"><span>MASAK</span> Uzaktan kimlik tespiti mevzuat merkezi <i>↗</i></a>
              <a href={masakGuideUrl} target="_blank" rel="noreferrer"><span>MASAK</span> KVHS Yükümlülüklere Uyum Rehberi <i>↗</i></a>
              <a href={b1Url} target="_blank" rel="noreferrer"><span>III-35/B.1</span> Müşterilerle ilişki ve uzaktan kimlik tespiti <i>↗</i></a>
            </div>
            <p className="article-disclaimer">Bu yazı genel bilgilendirme amaçlıdır; hukuki görüş veya belirli bir müşteri kabulünün uygunluğuna ilişkin karar değildir. İçerik 30 Temmuz 2026 tarihinde, 27 Haziran 2026 tarihli MASAK değişikliği dâhil edilerek kontrol edilmiştir.</p>
          </div>
        </div>
      </article>
      <DetailFooter />
    </main>
  );
}
