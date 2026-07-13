# Hangi IPTV? (hangiptv.com)

Bağımsız IPTV firma rehberi sitesi. HTML, CSS ve Vanilla JavaScript ile hazırlanmıştır. Framework veya npm gerekmez. GitHub Pages üzerinden yayınlanabilir.

## Dosya yapısı

```
/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
└── README.md
```

## 1. Firma adı nasıl değiştirilir?

`script.js` dosyasının en üstündeki `providers` dizisini açın. İlgili firmanın `name` alanını düzenleyin:

```js
name: "Yeni Firma Adı",
```

Sayfayı kaydedip yenilediğinizde kart başlığı otomatik güncellenir.

## 2. Logo URL’si nereye yazılır?

Aynı `providers` nesnesinde `logo` alanına tam URL yazın:

```js
logo: "https://ornek-firma.com/logo.png",
```

Logo yüklenemezse kart bozulmaz; firma adının baş harfleri gösterilir.

## 3. Firma sitesi bağlantısı nasıl değiştirilir?

`website` alanını güncelleyin:

```js
website: "https://ornek-firma.com",
```

“Siteyi Ziyaret Et” butonu bu adrese gider (`target="_blank"`).

## 4. Açıklamalar nasıl değiştirilir?

Şu alanları düzenleyin:

- `slogan` — kısa slogan
- `description` — kart açıklaması
- `filmReview` — film arşivi değerlendirmesi
- `seriesReview` — dizi arşivi değerlendirmesi
- `liveReview` — canlı yayın değerlendirmesi
- `devices` — cihaz listesi (dizi)
- `pros` — artılar (dizi)
- `cons` — eksiler (dizi)
- `lastChecked` — son kontrol tarihi metni

Örnek:

```js
slogan: "Kısa slogan",
description: "Firma hakkında kısa açıklama.",
filmReview: "Film arşivi notu.",
seriesReview: "Dizi arşivi notu.",
liveReview: "Canlı yayın notu.",
devices: ["Smart TV", "Android TV", "Telefon"],
pros: ["Artı 1", "Artı 2"],
cons: ["Eksi 1"],
lastChecked: "14 Temmuz 2026",
```

## 5. Sponsorlu etiketi nasıl açılır?

`sponsored` değerini `true` yapın:

```js
sponsored: true
```

Kartta sarı **SPONSORLU** etiketi görünür, kenarlık farklılaşır ve dış bağlantı `rel` değerine `sponsored` eklenir. Kapatmak için `false` yazın.

## 6. Yeni firma nasıl eklenir?

`providers` dizisinin sonuna yeni bir nesne ekleyin (virgüllere dikkat edin):

```js
{
  name: "Yeni Firma",
  logo: "https://example.com/yeni-logo.png",
  slogan: "Slogan",
  description: "Açıklama",
  filmReview: "Film notu",
  seriesReview: "Dizi notu",
  liveReview: "Canlı yayın notu",
  devices: ["Smart TV", "Telefon"],
  pros: ["Artı 1"],
  cons: ["Eksi 1"],
  lastChecked: "Henüz kontrol edilmedi",
  website: "https://example.com",
  sponsored: false
}
```

İsterseniz `index.html` içindeki ItemList JSON-LD bloğuna da yeni firmayı ekleyebilirsiniz.

## 7. Firma nasıl silinir?

`providers` dizisinden ilgili nesneyi (süslü parantezler ve virgül dahil) silin. Sayfa yenilendiğinde kart listeden kalkar. JSON-LD ItemList bölümünü de güncellemeniz önerilir.

## 8. GA4 kodu nereye yazılır?

`index.html` dosyasının `<head>` bölümünde şu yorumun altındaki iki yerde `G-XXXXXXXXXX` değerini kendi Measurement ID’niz ile değiştirin:

```html
<!-- GOOGLE ANALYTICS 4 -->
<!-- G-XXXXXXXXXX alanını kendi GA4 Measurement ID’niz ile değiştirin. -->
```

1. `gtag/js?id=G-XXXXXXXXXX` satırı  
2. `gtag('config', 'G-XXXXXXXXXX');` satırı  

Kod değiştirilmeden de site çalışır; yalnızca analitik veri gitmez.

## 9. Search Console kodu nereye yazılır?

`index.html` içinde şu satırı bulun:

```html
<!-- GOOGLE SEARCH CONSOLE VERIFICATION -->
<meta name="google-site-verification" content="SEARCH_CONSOLE_CODE">
```

`SEARCH_CONSOLE_CODE` yazısını Google Search Console’un verdiği doğrulama kodu ile değiştirin.

## 10. GitHub Pages nasıl açılır?

1. Bu dosyaları bir GitHub deposuna yükleyin.
2. Depoda **Settings → Pages** bölümüne gidin.
3. **Source** olarak `Deploy from a branch` seçin.
4. Branch olarak `main` (veya `master`) ve klasör olarak `/ (root)` seçin.
5. Kaydedin. Birkaç dakika içinde `https://KULLANICIADI.github.io/DEPO-ADI/` adresinde site açılır.

Depo adını `hangiptv.github.io` yaparsanız kullanıcı/organization sitesi olarak da yayınlayabilirsiniz.

## 11. hangiptv.com domaini GitHub Pages’e nasıl bağlanır?

1. Domain sağlayıcınızda (GoDaddy, Namecheap, Cloudflare vb.) DNS ayarlarını yapın:
   - **Apex (kök) domain** için GitHub’ın A kayıtlarını ekleyin, veya
   - **www** için CNAME kaydı: `KULLANICIADI.github.io`
2. GitHub deposunda **Settings → Pages → Custom domain** alanına `hangiptv.com` yazın.
3. DNS yayılımı tamamlandıktan sonra HTTPS’i etkinleştirin (GitHub otomatik sertifika üretir).

Güncel A / CNAME değerleri için GitHub Docs’taki “Configuring a custom domain” sayfasını kontrol edin.

## 12. CNAME dosyası gerekir mi?

Evet, özel domain kullanıyorsanız depo köküne `CNAME` adlı bir dosya eklemeniz önerilir. İçeriği tek satır olmalıdır:

```
hangiptv.com
```

GitHub Pages arayüzünden custom domain kaydettiğinizde bu dosya çoğu zaman otomatik oluşur. Elle de ekleyebilirsiniz.

## 13. sitemap.xml Search Console’a nasıl gönderilir?

1. [Google Search Console](https://search.google.com/search-console) üzerinde mülkü doğrulayın.
2. Sol menüden **Sitemaps** (Site haritaları) bölümüne gidin.
3. URL olarak şunu ekleyin:

```
https://hangiptv.com/sitemap.xml
```

4. Gönderin. İşlem durumunu aynı ekrandan takip edebilirsiniz.

---

## Yerel önizleme

Herhangi bir tarayıcıda `index.html` dosyasını açmanız yeterlidir. İsterseniz basit bir yerel sunucu da kullanabilirsiniz; zorunlu değildir.

## Sorumluluk

hangiptv.com üzerinde bulunan firma bilgileri bilgilendirme amacıyla sunulur. Site IPTV hizmeti satmaz. Satın alma işleminden önce hizmet sağlayıcının güncel koşullarını ve yetkilerini doğrulayın.
