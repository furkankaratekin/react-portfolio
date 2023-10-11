import aboutSvg from '../assets/about.jpg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-screen-2xl px-8 grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="" alt="About Image" />
        <article>
          <h2 className="text-3xl font-semibold text-emerald-600 border-b-2 border-gray-300 pb-4 mb-4">
            Hakkımda
          </h2>
          <p className="text-slate-600 mt-8 leading-loose">
            Ben Furkan Karatekin Süleyman Demirel Üniversitesi 4.sınıfa geçmiş,
            web geliştirme alanına adımı atmış bir stajyerim. Bootstrap,
            responsive CSS, Javascript gibi temel teknolojilerle web tasarımının
            yanı sıra, React gibi araçları da keşfetmeye başladım.
            <br />
            <br />
            Staj dönemimde, özellikle Bootstrap ve Responsive tasarım
            prensipleri ve Javascript konusunda deneyim kazandım. Farklı ekran
            boyutlarına uyumlu web sayfaları oluşturarak kullanıcı deneyimini
            iyileştirme fırsatı buldum.
            <br />
            <br />
            JavaScript konusundaki yeteneklerim ile basit, etkileşimli öğeler
            oluşturma, DOM manipülasyonu, OOP, callback, promise, Fetch API gibi
            yapılarla çalışabilirim. React bileşenleri hakkında temel bilgi
            edinme şansım oldu. Aynı zamanda MongoDB ve Node.js ile de temel
            seviyede çalışarak, veritabanı yönetimi ve sunucu tarafı geliştirme
            konularında da gözlemledim.{" "}
          </p>
        </article>
      </div>
    </section>
  );
}

export default About
