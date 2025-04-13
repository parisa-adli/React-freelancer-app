import MainHeader from "../ui/MainHeader";

function Home() {
  return (
    <div className="bg-secondary-0">
      <MainHeader />
      <div className="container xl:max-w-screen-xl">
        <div className="p-4 text-xl text-secondary-700 grid grid-cols-3">
          <div className="col-span-3 md:col-span-1">
            <h1 className="my-10 font-bold text-2xl">فریلنسر اپ</h1>
            <p>
              اپ مدیریت درخواست پروژه توسط کرفرما و اجرای پروژه توسط فریلنسر
            </p>
          </div>
          <div className="col-span-3 md:col-span-2 max-w-xl">
            <img src="../../public/freelancer.png" alt="freelancer-home" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
