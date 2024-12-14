function SentOTPForm() {
  return (
    <div>
      <form className="space-y-8">
        <div>
          <label htmlFor="phoneNumber">شماره موبایل</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="w-full rounded-xl px-4 py-3 border border-gray-300 text-secondary-900 hover:border-primary-500 focus:border-primary-500 transition-all duration-300 ease-out focus:shadow-lg focus:shadow-primary-200"
          />
        </div>
        <button className="bg-primary-900 px-4 py-2 rounded-xl text-white font-bold w-full transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary-300">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SentOTPForm;
