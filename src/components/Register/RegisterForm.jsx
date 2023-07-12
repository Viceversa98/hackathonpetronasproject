import { useState } from "react";

function RegisterForm() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [compName, setCompName] = useState("");
  const [posComp, setPosComp] = useState("");
  return (
    <form>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Email Address</span>
        </label>
        <input
          type="mail"
          placeholder="example@mail.com"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Company Name</span>
        </label>
        <input
          type="text"
          placeholder="Company Name"
          value={compName}
          onChange={(e) => setCompName(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Position in Company</span>
        </label>
        <input
          type="text"
          placeholder="Position"
          value={posComp}
          onChange={(e) => setPosComp(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="pt-4">
        <button className="btn btn-active btn-accent">Register</button>
      </div>
    </form>
  );
}

export default RegisterForm;
