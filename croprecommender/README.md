# Akıllı Tarım Yönetim Sistemi (AGRI.AI)

Bu proje, tarım uygulamalarını yapay zeka ile optimize etmeyi amaçlayan bir web uygulamasıdır.

## Özellikler

- **Ürün Tavsiye Modeli**: Toprak ve iklim verilerine göre en uygun ürünü önerir
- **Gübre Tavsiye Modeli**: Toprak özellikleri ve ürün tipine göre gübre önerileri sunar
- **Bitki Hastalığı Tespiti**: (Geliştirme aşamasında) Bitki hastalıklarını görüntü işleme ile tespit eder

## Kullanılan Teknolojiler

- React
- TailwindCSS
- Python (ML Modelleri için)
- Scikit-learn
- Flask API

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/bahattinyunus/smart_autonomous_farm.git
```

2. Bağımlılıkları yükleyin:
```bash
cd croprecommender
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

4. Tarayıcınızda http://localhost:3000 adresini açın

## ML Modelleri

ML modelleri `ML_MODEL` klasöründe bulunmaktadır:
- `croprecommender.ipynb`: Ürün tavsiye modeli
- `fertilizer-prediction.ipynb`: Gübre tavsiye modeli

## Komutlar

### `npm start`

Uygulamayı geliştirme modunda çalıştırır.\
[http://localhost:3000](http://localhost:3000) adresinde tarayıcınızda görüntüleyebilirsiniz.

Değişiklik yaptığınızda sayfa otomatik olarak yenilenir.\
Konsolda hata mesajlarını da görebilirsiniz.

### `npm test`

Etkileşimli test çalıştırıcısını başlatır.\
Daha fazla bilgi için [testleri çalıştırma](https://facebook.github.io/create-react-app/docs/running-tests) bölümüne bakın.

### `npm run build`

Uygulamayı üretim için `build` klasörüne derler.\
React'i üretim modunda doğru şekilde paketler ve en iyi performans için derlemeyi optimize eder.

Derleme küçültülür ve dosya adları karma değerler içerir.\
Uygulamanız dağıtıma hazır!

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir özellik dalı oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Dalınıza push yapın (`git push origin yeni-ozellik`)
5. Bir Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## İletişim

Bahattin Yunus - [@bahattinyunus](https://github.com/bahattinyunus)
