import React,{useState} from "react";
import PropsTypes from "prop-types";

import { Menu } from "antd";
import "antd/dist/antd.css";

import Link from "next/link";
import { Col,Row,Input } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>노드버드</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
          <Link href="/profile">
          <a>프로필</a>
        </Link>
          </Menu.Item>
          <Menu.Item>
          <Input.Search style={{verticalAlign:"middle"}}/>
          </Menu.Item>
          <Menu.Item>
          <Link href="/signup">
          <a>회원가입</a>
        </Link>
          </Menu.Item>
        </Menu>
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {isLoggedIn? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a href="https://www.naver.com" target="_blank" rel="noreferrer noopener">네이버</a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropsTypes.node.isRequired,
};
export default AppLayout;
