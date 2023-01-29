import InputBox from "./inputBox";

export default function Form() {
  return (
    <div>
      <div class="text-center">
        <h2>Get in Touch</h2>
        <p class="lead">Questions? please fill the form below</p>
      </div>

      <div class="row justify-content-center my-5">
        <div class="col-lg-6">
          <form>
            <InputBox label="Email" placeholder="Enter your Email" />
            <div class="form-floating my-5">
              <InputBox label="Name" placeholder="e.g. Rakesh" />
            </div>

            <button type="submit" class="btn btn-primary">
              submit!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
