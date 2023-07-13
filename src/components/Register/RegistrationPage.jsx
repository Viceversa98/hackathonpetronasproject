import RegisterForm from "./RegisterForm";

function RegistationPage() {
  return (
    <div className="container mx-auto pb-5">
      <div>
        <h1>Registration Form</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>&nbsp;</div>
        <div>
          <RegisterForm />
        </div>
        <div>&nbsp;</div>
      </div>
    </div>
  );
}

export default RegistationPage;
