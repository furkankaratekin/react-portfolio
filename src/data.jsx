import {nanoid} from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

/* Burada verilerimizi ekleyeceğiz ve diğer tarafta map fonksiyonu ile
direk çekebileceğiz örneğin navbardaki linkleri buraya sıralayıp buradan
istediğimiz gibi değiştirebileceğiz. */

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "project" },
];

export const skills = [
  {id: nanoid(),
  title: 'HTML&CSS',
  icon: <FaHtml5 className='h-16 w-16 text-emerald-500'/>,
  text: 'HTML ve CSS ile hazırladığımız websitelerimiz kullanıcılarımızın deneyimini en iyi şekilde ve responsive bir tasarım ile yaşamalarını sağlar. '
},
  {id: nanoid(),
  title: 'Javascript',
  icon: <FaJs className='h-16 w-16 text-emerald-500'/>,
  text: 'Javascript sayesinde çok daha dinamik ve kullanışlu websiteler sunabiliyoruz.'
},
  {id: nanoid(),
  title: 'React',
  icon: <FaReact className='h-16 w-16 text-emerald-500'/>,
  text: 'React teknolojisi ile components ve propsları ile kullanıcılaırmızın deneyimini bir üst seviyeye çıkartıyoruz.'
}
];
export const projects = [
  {
    id: nanoid(),
    img: "https://p.kindpng.com/picc/s/238-2384305_portfolio-text-png-transparent-png.png",
    url: "https://porfolio.furkankarat.repl.co",
    github: "https://github.com/furkankaratekin/Porfolio",
    title: "Portfolio Project",
    text: "Bu projemde HTML,CSS ve JS kullanılarak yapılmıştır.İlk portfolio projem olmasından kaynaklı grid layout gibi düzenler tam olarak yapılamamıştır.",
  },
  {
    id: nanoid(),
    img: "https://photos1.blogger.com/blogger/7376/2321/1600/microsoft_building_2.jpg",
    url: "https://buildcompany.furkankarat.repl.co",
    github: "https://github.com/furkankaratekin/BuildCompany",
    title: "Example Company Website",
    text: "web geliştirme alanına adımı atmış bir stajyerim. Bootstrap,responsive CSS, Javascript gibi temel teknolojilerle web tasarımının yanı sıra, React gibi araçları da keşfetmeye başladım.",
  },
  {
    id: nanoid(),
    img: "https://yerkramas.org/images/photos/albom62/61259_original.jpg",
    url: "https://bootstraptravelexample.furkankarat.repl.co",
    github: "https://github.com/furkankaratekin/BootstrapTravelExample",
    title: "Example Travel Project",
    text: "web geliştirme alanına adımı atmış bir stajyerim. Bootstrap,responsive CSS, Javascript gibi temel teknolojilerle web tasarımının yanı sıra, React gibi araçları da keşfetmeye başladım.",
  },
];
