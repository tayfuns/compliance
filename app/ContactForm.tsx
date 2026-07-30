"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Kripto Uyum Pusulası — ${data.get("konu")}`);
    const body = encodeURIComponent(
      `Ad Soyad: ${data.get("ad")}\nE-posta: ${data.get("email")}\nKurum: ${data.get("kurum") || "-"}\n\n${data.get("mesaj")}`
    );
    setSent(true);
    window.location.href = `mailto:merhaba@kriptouyumpusulasi.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>Ad Soyad<input name="ad" type="text" placeholder="Adınız ve soyadınız" required /></label>
        <label>E-posta<input name="email" type="email" placeholder="ornek@kurum.com" required /></label>
      </div>
      <div className="field-row">
        <label>Kurum<input name="kurum" type="text" placeholder="Kurum adı (isteğe bağlı)" /></label>
        <label>Konu
          <select name="konu" defaultValue="Uyum programı">
            <option>Uyum programı</option>
            <option>Saklama operasyonları</option>
            <option>Mevzuat haritalama</option>
            <option>Diğer</option>
          </select>
        </label>
      </div>
      <label>Mesaj<textarea name="mesaj" rows={5} placeholder="Kısaca nasıl yardımcı olabileceğimizi anlatın…" required /></label>
      <label className="consent"><input type="checkbox" required /><span>İletişim talebime dönüş yapılması amacıyla bilgilerimin işlenmesini kabul ediyorum.</span></label>
      <button type="submit">Mesajı e-posta ile hazırla <span>↗</span></button>
      {sent && <p className="form-status" role="status">Mesajınız e-posta uygulamanızda hazırlandı. Göndermeyi unutmayın.</p>}
    </form>
  );
}
