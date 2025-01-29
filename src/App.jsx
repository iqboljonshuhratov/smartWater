import { Cards } from "./cards/cards";
import { Fixed } from "./fixed/fixed";
import { Header } from "./header/header";
import { ImgCard } from "./imgCard/imgCard";
import { Info } from "./info/info";
import Section from "./section/section";
import imgcard1 from "./cards/image/bgqirqish-removebg-preview.png";
function App() {
  const arr = [
    {
      id: 1,
      img: imgcard1,
      title:
        "Smart Water qurilmasi yordamida suv resurslaringizni samarali boshqaring",
      text: "Smart Water SW20 bilan suv resurslaringizni kuzatib, samarali boshqaring! Suv sathi va hajmini aniq o‘lchash, ma'lumotlarni onlayn uzatish imkoniyati. Quyosh va qayta zaryadlanuvchi batareya yordamida energiya tejash imkoniyati!",
      idName: "SuvNazorat",
      stil: "bgStil",
    },
    {
      id: 2,
      img: "http://api.sss.uz/uploads/1730192593303-777943832.jpg",
      title: "Smart Water",
      text: "Smart Water SW20 ochiq kanallar va daryolarda suv sathini o'lchash va sekundiga suv hajmini hisoblash imkoniyatiga ega. Ma'lumotni serverga onlayn o'tkazish uchun GSM moduli o'rnatilgan. Smart Water SW20 har qanday quvvat manbaidan mutlaqo mustaqil ishlaydi, chunki u quyosh batareyasi va qayta zaryadlanuvchi batareyaga ega. Smart Water SW20 to'g'ri ishlashi uchun uni to'g'ri o'rnatish va 2G ulanishi bilan ishlaydigan SIM kartani qo'yish kerak. ",
      idName: "SmartNazorat",
      // stil: "bgStil",
    },
    {
      id: 3,
      img: "http://api.sss.uz/uploads/1730192605632-646965104.jpg",
      title: "Smart Water SW20 xususiyatlari",
      text: `	Smart Water SW20 quyidagi xususiyatlarga ega:

	• 2G modem o'rnatilgan

	• Quyosh batareyasida o'rnatilgan

	• GNSS yoqilgan

	• Bluetooth 3 yoqilgan

	• Ultrasonik datchik maksimal 10m diapazoni va mm o'lchamlari bilan

	• Hammasi bitta paketda



Paketga 3 ta M5 8 mm muruvvat, 6 vintli 2,5 mm olti burchakli burama vintlar, quyosh batareyasi o'rnatilgan yuqori va kichik korpus, tenglikni, batareya to'plami, ultratovushli datchik va ulagich, zanglamaydigan po'lat quvurlar, foydalanuvchi qo'llanmasi kiradi.

`,
      idName: "Xususiyatlar",
      stil: "bgStil",
    },
  ];

  return (
    <>
      <main className="container">
        {/* <Fixed /> */}
        <div className="header-main-box">
          <Header />
        </div>
        <Section />
        {arr.map((item) => {
          return (
            <Cards
              key={item.id}
              img={item.img}
              title={item.title}
              text={item.text}
              index={item.id}
              idName={item.idName}
              stil={item.stil}
            />
          );
        })}
        <Info />
        <ImgCard />
      </main>
    </>
  );
}

export default App;
