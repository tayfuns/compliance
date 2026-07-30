const spkListUrl =
  "https://spk.gov.tr/kurumlar/kripto-varlik-hizmet-saglayicilar/faaliyette-bulunanlar-listesi";

export function DetailHeader() {
  return (
    <header className="site-header detail-header">
      <a className="brand" href="/" aria-label="Kripto Uyum Pusulası ana sayfa">
        <span className="brand-mark" aria-hidden="true"><i /></span>
        <span>Kripto Uyum<br /><b>Pusulası</b></span>
      </a>
      <nav aria-label="Ana menü">
        <a href="/mevzuat">Mevzuat</a>
        <a href="/fraud">Fraud</a>
        <a href="/blog">Blog</a>
        <a href="/#iletisim">İletişim</a>
      </nav>
      <a className="nav-cta" href={spkListUrl} target="_blank" rel="noreferrer">
        SPK faaliyet listesi <span>↗</span>
      </a>
    </header>
  );
}

export function DetailFooter() {
  return (
    <footer>
      <a className="brand footer-brand" href="/">
        <span className="brand-mark" aria-hidden="true"><i /></span>
        <span>Kripto Uyum<br /><b>Pusulası</b></span>
      </a>
      <p>Türkiye kripto ekosistemi için bağımsız bilgilendirme platformu.</p>
      <div>
        <a href="/mevzuat">Mevzuat</a>
        <a href="/blog">Blog</a>
        <a href="/#iletisim">İletişim</a>
      </div>
      <small>© 2026 Kripto Uyum Pusulası</small>
    </footer>
  );
}
