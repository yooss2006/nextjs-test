import  React  from "react";
import Head from "next/head"

import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const followerList = [{nickname: "유순상"}, {nickname:"동까"},{nickname:"동숙"}];
  const followingList = [{nickname: "유순상"}, {nickname:"동까"},{nickname:"동숙"}];
  return (

    <>
    <Head>
      <title>내 프로필 | nodebird</title>
    </Head>
     <AppLayout>
      <NicknameEditForm/>
      <FollowList header="팔로잉 목록" data={followingList}/>
      <FollowList header="팔로워 목록" data={followerList}/>
    </AppLayout>
    </>
   
  );
};

export default Profile;
