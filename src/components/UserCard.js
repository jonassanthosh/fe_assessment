import React from 'react'
import { EditOutlined, DeleteFilled, HeartOutlined, MailOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const UserCard = () => (
    <Card
        style={{
            margin: 15
        }}
        cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }
        actions={[
            <HeartOutlined />,
            <EditOutlined key="edit" />,
            <DeleteFilled />
        ]}
    >
        <h3>Leanne Graham</h3>
        
    </Card>
)

export default UserCard