import RegisterForm from "./RegisterForm";

function RegistationPage() {
  return (
    <div className="container mx-auto pb-5 justify-items-center">
      <div className="rounded-lg border-green-300">
        <h3 >Registration Form</h3>
      </div>
      <div className=" flex justify-center">
        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegistationPage;
