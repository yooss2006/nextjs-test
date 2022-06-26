import { Button,Card,Avatar } from 'antd';
import React,{useCallback} from 'react';

const UserProfile = ({setIsLoggedIn}) => {
  const onLogout = useCallback(()=>{
    setIsLoggedIn(false);
  },[]);

  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />0</div>,
        <div key="following">팔로잉<br />0</div>,
        <div key="follower">팔로워<br />0</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>zc</Avatar>}
        title="제목"
      />
      <Button onClick={onLogout}>로그아웃</Button>
    </Card>
  
  )
}

export default UserProfile