"use client";

import { MouseEvent, useEffect, useRef, useState } from "react";

export function DisclaimerModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function closeFromBackdrop(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) close();
  }

  return (
    <>
      <button className="disclaimer-trigger" type="button" onClick={() => setOpen(true)} ref={triggerRef}>
        Sorumsuzluk Beyanı
      </button>
      {open && (
        <div className="disclaimer-backdrop" onMouseDown={closeFromBackdrop}>
          <section
            className="disclaimer-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="disclaimer-title"
          >
            <div className="disclaimer-modal-top">
              <span>YASAL BİLGİLENDİRME</span>
              <button type="button" onClick={close} ref={closeButtonRef} aria-label="Sorumsuzluk beyanını kapat">×</button>
            </div>
            <h2 id="disclaimer-title">Sorumsuzluk<br /><em>Beyanı</em></h2>
            <div className="disclaimer-copy">
              <p><strong>Site</strong> üzerinde yer alan tüm içerikler yalnızca genel bilgilendirme amacıyla sunulmaktadır. Sitede bulunan bilgiler; hukuki, finansal, mevzuatsal veya diğer profesyonel alanlarda tavsiye niteliği taşımaz.</p>
              <p>Sitedeki bilgilerin doğruluk ve güncelliği için çaba gösterilse de, bu bilgilerin kullanımından doğabilecek doğrudan veya dolaylı hiçbir zarardan <strong>Kripto Uyum Pusulası</strong> sorumlu tutulamaz. Sitemizde yer alan üçüncü taraf bağlantıların (linklerin) içeriği ve güvenliği ilgili sitelerin sorumluluğundadır.</p>
              <p><strong>Kripto Uyum Pusulası</strong> site içeriğini ve bu beyanı dilediği zaman değiştirme hakkını saklı tutar.</p>
            </div>
            <button className="disclaimer-close" type="button" onClick={close}>Okudum, kapat <span>→</span></button>
          </section>
        </div>
      )}
    </>
  );
}
