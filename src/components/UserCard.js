import React, { useState } from 'react'
import { EditOutlined, DeleteFilled, HeartOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled } from '@ant-design/icons';
import { Card } from 'antd';

const UserCard = ({ user, index }) => {
    const [like, setLike] = useState(false)
    return (
        <Card
            style={{
                margin: 15
            }}
            cover={
                <img
                    alt="avatar"
                    src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                    width={200}
                    height={200}
                />
            }
            actions={[
                like ? <HeartFilled onClick={() => setLike((prev) => !prev)} /> : <HeartOutlined onClick={() => setLike((prev) => !prev)} />,
                <EditOutlined key="edit" />,
                <DeleteFilled />
            ]}
        >
            <h3 style={{ margin: '0', paddingBottom: '8px', fontWeight: '500' }}>{user.name}</h3>
            <div style={{ display: 'flex' }}><MailOutlined style={{ fontSize: '18px' }} /><p style={{ paddingLeft: '10px', paddingBottom: '5px', margin: '0' }}>{user.email}</p></div>
            <div style={{ display: 'flex' }}><PhoneOutlined style={{ fontSize: '18px' }} /><p style={{ paddingLeft: '10px', paddingBottom: '5px', margin: '0' }}>{user.phone}</p></div>
            <div style={{ display: 'flex' }}><GlobalOutlined style={{ fontSize: '18px' }} /><p style={{ paddingLeft: '10px', paddingBottom: '5px', margin: '0' }}>http://{user.website}</p></div>
        </Card>
    )
}

export default UserCard