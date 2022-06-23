import React from "react";
import PropsTypes from "prop-types";

import { Menu } from "antd";
import "antd/dist/antd.css";

import Link from "next/link";

const AppLayout = ({ children }) => {
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
          <Link href="/signup">
          <a>회원가입</a>
        </Link>
          </Menu.Item>
        </Menu>

   
  
      </div>

      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropsTypes.node.isRequired,
};
export default AppLayout;
