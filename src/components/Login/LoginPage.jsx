import { useState, useEffect } from "react";
import petronas from "../../assets/logos/petronas.png";

function LoginPage() {
  const user = {
    userName: "John",
    password: "1234",
  };

  const LOCAL_STORAGE_KEY1 = "isLoggedIn";
  const LOCAL_STORAGE_KEY2 = "userName";

  const [inputs, setInputs] = useState({
    userName: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2)) ?? "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY1)) ?? false
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY1, JSON.stringify(isLoggedIn));
    localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(inputs.userName));
  }, [isLoggedIn, inputs]);

  const loginButton = (e) => {
    e.preventDefault();

    if (inputs.userName === "" || inputs.password === "") {
      setInputs({ userName: "", password: "" });
      return;
    }

    if (
      inputs.userName === user.userName &&
      inputs.password === user.password
    ) {
      setIsLoggedIn(true);
      console.log("logged In");
    } else {
      console.log("Failed logged In");
      setIsLoggedIn(false);
      setInputs({ userName: "", password: "" });
    }
  };

  return (
    <div className="flex flex-col items-center text-center justify-center px-8 lg:px-40 2xl:px-80 bg-slate-100">
      <img src={petronas} alt="petronas" width={260} />
      <div className="form-control card w-96 bg-primary text-primary-content mt-8">
        <div className="card-body text-center justify-center">
          <form onSubmit={loginButton}>
            <h2 className="card-title text-2xl mb-4">Login</h2>

            <input
              type="text"
              placeholder="Username"
              value={inputs.userName}
              onChange={(e) =>
                setInputs((inputs) => ({ ...inputs, userName: e.target.value }))
              }
              className="input input-bordered input-accent w-full max-w-xs my-2"
            />

            <input
              type="text"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) =>
                setInputs((inputs) => ({ ...inputs, password: e.target.value }))
              }
              className="input input-bordered input-accent w-full max-w-xs my-2"
            />

            <div>
              <a href="#" target="_self">
                <p>Forget your id? </p>
              </a>
            </div>

            <div className="card-actions justify-between items-baseline mt-4">
              <div>
                <a href="#" target="_self">
                  <p className="font-semibold">Create account</p>
                </a>
              </div>
              <button className="btn hover:btn-accent active:btn-warning">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
