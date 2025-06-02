import Image from "next/image";
export default function LoginPage() {
  return (
    <div className="flex h-screen bg-[#FAEBDD] p-6">
      <div className="hidden h-full md:block md:w-1/2">
        <Image
          src="/images.jpg"
          alt="Kayra"
          width={500}
          height={500}
          className="object-cover h-full w-full rounded-xl"
        />
      </div>
      <div className="flex w-full items-center justify-center p-6 md:w-1/2">
        <div className="w-full max-w-sm rounded-lg bg-[#FAEBDD] p-8">
          <h2 className="mb-2 text-center text-lg font-bold text-orange-600">
            Kayra Export
          </h2>
          <h3 className="mb-4 text-center font-semibold text-gray-700">
            Hoşgeldiniz.
          </h3>
          <p className="mb-6 text-center text-gray-600">
            Lütfen giriş yapınız.
          </p>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                className="w-full rounded-lg border text-black bg-[#faf0e6] p-3 placeholder-[#8a8a8a] focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Şifre"
                className="w-full rounded-lg border text-black bg-[#faf0e6] p-3 placeholder-[#8a8a8a] focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full rounded-lg bg-orange-500 py-3 text-white transition hover:bg-orange-600 ${""}`}
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
