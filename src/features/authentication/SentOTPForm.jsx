function SentOTPForm() {
  return (
    <div>
      <form className="space-y-8">
        <div>
          <label className="mb-2" htmlFor="phoneNumber">شماره موبایل</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="textField__input"
          />
        </div>
        <button className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SentOTPForm;
