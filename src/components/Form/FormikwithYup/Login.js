import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
export function PasswordField() {
  const [passType, setPassType] = useState(false);
  return (
    <>
      <div className="passField">
        <Field
          className="input"
          type={passType ? "text" : "password"}
          name="pswd"
          placeholder="Password"
        />
        {passType ? (
          <VisibilityOutlinedIcon
            id="icon1"
            onClick={() => {
              setPassType(!passType);
            }}
          />
        ) : (
          <VisibilityOffOutlinedIcon
            id="icon1"
            onClick={() => {
              setPassType(!passType);
            }}
          />
        )}
      </div>
    </>
  );
}

export default function Login() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    load();
  }, []);
  const load = async () => {
    await fetch("http://localhost:3000/users")
      .then(function (data) {
        //console.log(data);
        return data.json();
      })
      .then(function (res) {
        setData(res);
        //  console.log("Data sett")
      });
  };
  const getUserData = async (email, pass) => {
    let user = "";

    await fetch(`http://localhost:3000/users?mail=${email}&password=${pass}`)
      .then(function (res) {
        // console.log(data);
        return res.json();
      })
      .then(function (res) {
        // console.log("users:",res)

        user = res[0];
        // console.log("user",user)
      });
    return user;
  };
  const signInitials = {
    username: "",
    email: "",
    pswd: "",
  };
  const loginInitials = {
    email: "",
    pswd: "",
  };
  const getNextId = (obj) => {
    return Math.max.apply(
      Math,
      obj.map(function (o) {
        return o.id;
      })
    );
  };

  const frm1Submit = (val) => {
    console.log("submit:", val);
    const user = {
      id: getNextId(data) + 1,
      name: val.username,
      role: "user",
      doj: new Date(),
      password: val.pswd,
      mail: val.email,
      status: 1,
    };
    // "id": 2,
    //   "name": "dummy",
    //   "role": "admin",
    //   "doj":"10-05-2023",
    //   "password":"Vinit@123",
    //   "mail":"Vinit@1234",
    //   "status":0
    fetch("http://localhost:3000/users", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((reas) => {
        if (reas.status == 201) {
          alert("registerd");
          load();
        } else {
          switch (reas.status) {
            case 500:
              alert("User Data is Already existed");
              break;
            default:
              alert("Server Error,Pls Try Again After Some Time");
          }
          console.log(reas);
        }
        console.log(reas);
      })
      .catch((error) => {
        alert("fail in registerd");
      });
  };
  const frm2Submit = async (val) => {
    // console.log("submit:", val.email + val.pswd);
    console.log("data", data);

    const found = data.some(
      (el) => el.mail === val.email && el.password === val.pswd
    );
    if (found) {
      let user;
      //  console.log("welcome")

      user = await getUserData(val.email, val.pswd);

      // console.log("function called")
      alert("welcome," + user.name);

      navigate("/home");
    } else {
      alert("Invalid");
    }
  };
  const signValidation = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    pswd: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const loginValidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    pswd: Yup.string().required("Required"),
  });

  return (
    <>
      <div className="body">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup">
            <Formik
              initialValues={signInitials}
              validationSchema={signValidation}
              onSubmit={frm1Submit}
            >
              {({ errors, touched }) => (
                <Form name="signIn">
                  <dl>
                    <label htmlFor="chk" aria-hidden="true">
                      Sign up
                    </label>
                    <dt>
                      <Field
                        className="input"
                        name="username"
                        placeholder="User name"
                      />
                    </dt>
                    <dd className="text-danger">
                      <span>
                        {errors.username && <small>{errors.username}</small>}
                      </span>
                    </dd>
                    <dt>
                      <Field
                        className="input"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                    </dt>
                    <dd className="text-danger">
                      <span>
                        {errors.email && <small>{errors.email}</small>}
                      </span>
                    </dd>
                    <dt>
                      <PasswordField />
                    </dt>
                    <dd className="text-danger">
                      <span>{errors.pswd && <small>{errors.pswd}</small>}</span>
                    </dd>
                  </dl>
                  <div className="buttons">
                    <button type="submit" htmlFor="signIn">
                      Submit
                    </button>
                    <button type="reset" htmlFor="signIn">
                      Cancel
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="login">
            <Formik
              initialValues={loginInitials}
              validationSchema={loginValidation}
              onSubmit={frm2Submit}
            >
              {({ errors, touched }) => (
                <Form name="logIn">
                  <label htmlFor="chk" aria-hidden="true">
                    Login
                  </label>
                  <dl>
                    <dt>
                      <Field
                        className="input"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                    </dt>
                    <dd className="text-danger">
                      <div className="errors">
                        <span>
                          {errors.email && <small>{errors.email}</small>}
                        </span>
                      </div>
                    </dd>
                    <dt>
                      <PasswordField />
                    </dt>
                    <dd className="text-danger">
                      <div className="errors">
                        <span>
                          {" "}
                          {errors.pswd && <small>{errors.pswd}</small>}
                        </span>
                      </div>
                    </dd>
                  </dl>
                  <div className="buttons">
                    <button type="submit">Login</button>
                    <button type="reset">Cancel</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
