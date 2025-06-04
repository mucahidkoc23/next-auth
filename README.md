Projeyi incelemek isterseniz : https://next-auth-nine-pi.vercel.app/

# Proje Başlangıç Rehberi

## Gerekli Hesap Oluşturma ve Ayarlar

Öncelikle, [auth0.com](https://auth0.com) adresine giderek bir hesap oluşturmanız gerekmektedir. Hesabınızı oluşturduktan sonra:

1. **Application** menüsünden **Applications** sekmesine tıklayın.
2. Yeni bir uygulama oluşturun veya mevcut uygulamanızı seçin.
3. Uygulama ayarlarında bulunan aşağıdaki bilgileri projenizin kök dizininde yer alan `.env.local` dosyasına ekleyin:

```env
AUTH0_SECRET=...
APP_BASE_URL=...
AUTH0_DOMAIN=...
AUTH0_CLIENT_ID=...
AUTH0_CLIENT_SECRET=...

AUTH0_AUDIENCE=...
AUTH0_SCOPE='openid profile'
```
# Proje Bağımlılıklarının Yüklenmesi ve Çalıştırılması

Ortam değişkenleri `.env.local` dosyasına eklendikten sonra, terminal veya komut satırında proje dizinine gidin ve aşağıdaki komutları sırasıyla çalıştırın: `npm install` ve ardından `npm run dev`.

`npm install` komutu proje için gerekli tüm bağımlılıkları yükler.  
`npm run dev` komutu ise projeyi geliştirme modunda başlatır.
