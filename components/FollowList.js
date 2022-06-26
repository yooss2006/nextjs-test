import React from 'react'
import {List} from "antd";
import { Button } from 'antd';
import { Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import PropsTypes from "prop-types"

const FollowList = ({header, data}) => {
  return (
  <List 
    header={<div>{header}</div>} 
    style={{marginBottom:"20"}} 
    grid={{gutter: 4, xs:2, md:3 }} 
    size="small" 
    loadMore={<div style={{textAlign:"center", margin:"10px 0"}}><Button>더 보기</Button></div>}
    bordered
    dataSource={data}
    renderItem={item => (
    <List.Item style={{marginTop:20}}>
        <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
        </Card>
    </List.Item> )}
    />
  )
}

FollowList.PropsTypes = {
    header: PropsTypes.string.isRequired,
    data: PropsTypes.array.isRequired
}

export default FollowList