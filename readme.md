# 🌱 **AGRI.AI - Otonom Çiftlik ve Akıllı Tarım Asistanı**

![AGRI.AI Banner](assets/banner.png)

![Python](https://img.shields.io/badge/Python-3.8%2B-blue?style=for-the-badge&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Flask](https://img.shields.io/badge/Flask-2.0-000000?style=for-the-badge&logo=flask&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**AGRI.AI**, modern tarımı yapay zeka ve makine öğrenimi ile birleştiren, çiftçiler için geliştirilmiş kapsamlı bir dijital asistandır. Toprak analizinden ürün önerisine, hastalık tespitinden gübre planlamasına kadar her adımda veriye dayalı kararlar almanızı sağlar.

---

## 🚀 **Özellikler**

### 1. 🌾 Akıllı Ürün Önerisi
Toprağınızın azot (N), fosfor (P), potasyum (K) değerlerini ve bulunduğunuz bölgenin iklim koşullarını analiz ederek en yüksek verimi alabileceğiniz ürünü önerir.

### 2. 🧪 Gübre Tavsiyesi
Topraktaki mevcut besin dengesini ölçer ve ekilecek ürüne göre eksik mineralleri tamamlayacak en uygun gübreleme planını sunar.

### 3. 🦠 Hastalık Tespiti ve Tedavi
Bitki yapraklarının fotoğraflarını yapay zeka ile analiz ederek hastalıkları tanımlar, nedenlerini açıklar (örn. mantar, bakteri) ve tedavi yöntemleri önerir.

---

## 🛠️ **Teknolojiler ve Mimari**

Proje, modern web teknolojileri ve güçlü makine öğrenimi modellerini bir araya getirir.

| Bileşen | Teknoloji | Açıklama |
|---|---|---|
| **Frontend** | React.js, Tailwind CSS | Modern, hızlı ve responsive kullanıcı arayüzü. |
| **Backend** | Flask (Python) | Makine öğrenimi modellerini servis eden API. |
| **ML Modelleri** | Scikit-learn, TensorFlow | Ürün ve gübre tahmini, görüntü işleme ile hastalık tespiti. |

---

## 📂 **Repo Yapısı**

```
otonom_ciftlik/
├── assets/             # Görsel materyaller (Banner, logolar)
├── docs/               # Ek dökümantasyon ve makaleler
│   └── AI_AGRICULTURE_ARTICLE.md # AI ve Tarım üzerine detaylı makale
├── croprecommender/    # React Frontend uygulaması
├── ML_MODEL/           # Python Backend ve ML Modelleri
│   ├── API/            # Ürün önerisi API'si
│   └── FertAPI/        # Gübre önerisi API'si
├── .gitignore          # Git## 🚀 Hızlı Kurulum

Projeyi çalıştırmak için 2 yöntem bulunmaktadır:

### Yöntem 1: Otomatik Başlatma (Önerilen - Windows)
`start_local.bat` dosyasını çift tıklayarak çalıştırın. Bu script, gerekli kütüphaneleri yükleyecek ve hem backend hem de frontend sunucularını otomatik olarak başlatacaktır.

### Yöntem 2: Docker ile Çalıştırma
Bilgisayarınızda Docker yüklü ise tek komutla tüm sistemi ayağa kaldırabilirsiniz:

```bash
docker-compose up --build
```

### Yöntem 3: Manuel Kurulum

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend:**
```bash
cd croprecommender
npm install
npm start
```

## 🏗️ Proje Mimarisi

- **Backend:** Python (FastAPI) - Hızlı ve modern API mimarisi.
- **Frontend:** React.js + Tailwind CSS - Modern, responsive ve şık kullanıcı arayüzü.
- **Yapay Zeka:** Scikit-Learn (Sınıflandırma Modelleri).
- **Veritabanı:** (Gelecek sürümlerde eklenecek).

## 🌟 Özellikler

1.  **Ürün Tavsiyesi:** Toprak verilerine (Azot, Fosfor, Potasyum, pH vb.) göre en verimli ürünü önerir.
2.  **Gübre Tavsiyesi:** Seçilen ürün ve toprak durumuna göre gübreleme önerileri sunar.
3.  **Bitki Hastalığı Tespiti:** Yüklenen bitki fotoğraflarını analiz ederek hastalıkları teşhis eder.
4.  **Modern Arayüz:** Glassmorphism tasarımı ile kullanıcı dostu deneyim.

## 🤝 Katkıda Bulunma

1.  Bu repoyu forklayın (https://github.com/bahattinyunus/smart_autonomous_farm/fork)
2.  Özellik dalınızı oluşturun (`git checkout -b feature/YeniOzellik`)
3.  Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4.  Dalınıza push yapın (`git push origin feature/YeniOzellik`)
5.  Bir Pull Request oluşturun
e açılışına açığız!

## 📜 **Lisans**

Bu proje [MIT](LICENSE) lisansı ile lisanslanmıştır.

---

## 📞 **İletişim**

Sorularınız veya önerileriniz için:
* **Geliştirici:** Bahattin Yunus
* **LinkedIn:** [Profiliniz](https://www.linkedin.com)
* **Email:** [email@example.com](mailto:email@example.com)

---
<p align="center">
  <i>Geleceğin tarımı, bugünün teknolojisiyle. 🌱</i>
</p>
