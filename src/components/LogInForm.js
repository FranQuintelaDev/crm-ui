import { useState, useRef  } from "react";
import { useNavigate } from "react-router-dom";
export default function LogInForm() {

  const navigate = useNavigate();
  
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const passwordRef = useRef(undefined);
  const usernameRef = useRef(undefined);

  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          "username": username,
          "password": password,
        })
    };

    fetch("http://localhost:8080/api/v1/auth/logIn", requestOptions)
      .then(res => res.json())
      .then(
        (data) => {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data));
          navigate("/");
        },
        (error) => {
        }
      );
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Log in</h3>
        </div>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            ref={usernameRef}
            value={userInfo.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            ref={passwordRef}
            value={userInfo.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <button id="logInButton">Log In</button>
        </div>

      </form>

    </div>
  );
}