import { Button,Card,Avatar } from 'antd';
import React,{useCallback} from 'react';

const UserProfile = ({setIsLoggedIn}) => {
  const onLogout = useCallback(()=>{
    setIsLoggedIn(false);
  },[]);

  return (
    <Card
    actions={[
      <div key="twit">트위터<br/>0</div>,
      <div key="followings">팔로잉<br/>0</div>,
      <div key="followers">팔로워<br/>0</div>,
    ]}
  >
    <Card.Meta
      avatar={<Avatar>ZC</Avatar>}
      title="이름"
    />
    <Button onClick={onLogout}>로그아웃</Button>
  </Card>
  
  )
}

export default UserProfile