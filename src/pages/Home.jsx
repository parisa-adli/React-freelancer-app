import MainHeader from "../ui/MainHeader";

function Home() {
  return (
    <div className="bg-secondary-0">
      <MainHeader />
      <div className="container xl:max-w-screen-lg">
        <div className="p-4 text-xl text-secondary-700 grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-x-8">
          <div className="">
            <h1 className="my-10 font-bold text-2xl">فریلنسر اپ</h1>
            <p>
              پلتفرمی هوشمند برای اتصال کارفرماها و فریلنسرها در دنیای پرسرعت
              امروز، ما بستری فراهم کرده‌ایم که کارفرماها بتوانند پروژه‌های خود
              را با چند کلیک تعریف کنند و فریلنسرهای متخصص، دقیق و متعهد آن‌ها
              را اجرا کنند. از ثبت درخواست تا تحویل نهایی، همه چیز ساده، شفاف و
              قابل پیگیری است.
            </p>
          </div>
          <div className="max-w-xl">
            <img src="Images/freelancer.png" alt="freelancer-home" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
