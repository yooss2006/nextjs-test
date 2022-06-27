import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Form, Input, Button } from "antd";
import propTypes from "prop-types";
import useInput from "../hooks/useInput";
const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} required onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          required
          onChange={onChangePassword}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit">
          login
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: propTypes.func.isRequired,
};

export default LoginForm;
