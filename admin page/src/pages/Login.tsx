import React, { useState, useEffect, ReactHTMLElement } from "react";
import { Button, FormControl, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export const Login = (props: {
  login: (userName: string, password: string) => {};
  user: any;
}) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPasswordChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };

  const handleOnUserNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(ev.target.value);
  };

  const onLogin = async () => {
    props.login(userName, password);
  };
  if (props.user) return <div>Hello {props.user.userName}</div>;
  return (
    <div className="login-container">
      <Typography variant="h3" style={{ marginTop: "50px" }}>
        Login
      </Typography>
      <FormControl>
        <TextField
          onChange={handleOnUserNameChange}
          id="userName"
          label="Username"
        ></TextField>
        <TextField
          type={"password"}
          onChange={handleOnPasswordChange}
          label="Password"
        ></TextField>
        <Button onClick={() => onLogin()}>Login</Button>
      </FormControl>
    </div>
  );
};
