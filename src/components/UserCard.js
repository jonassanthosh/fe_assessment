import React, { useState } from 'react'
import { EditOutlined, DeleteFilled, HeartOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled } from '@ant-design/icons';
import { Card } from 'antd';
// import './user.css'

const iconSize = { fontSize: '18px' }
const pStyle = { paddingLeft: '10px', paddingBottom: '5px', margin: '0' }
const divStyle = { display: 'flex', flexDirection: 'col' }

const UserCard = ({ user, setUsers, index }) => {
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
                like ? <HeartFilled style={{ fontSize: '18px', color: 'red' }} onClick={() => setLike((prev) => !prev)} /> : <HeartOutlined style={{ fontSize: '20px', color: 'red' }} onClick={() => setLike((prev) => !prev)} />,
                <EditOutlined style={iconSize} key="edit" />,
                <DeleteFilled
                    style={iconSize}
                    onClick={() => {
                        setUsers((users) => users.filter((_, i) => i !== index))
                    }} />
            ]}
        >
            <h3 style={{ margin: '0', paddingBottom: '8px', fontWeight: '500' }}>{user.name}</h3>
            <div style={divStyle}><MailOutlined style={iconSize} /><p style={pStyle}>{user.email}</p></div>
            <div style={divStyle}><PhoneOutlined style={iconSize} /><p style={pStyle}>{user.phone}</p></div>
            <div style={divStyle}><GlobalOutlined style={iconSize} /><p style={pStyle}>http://{user.website}</p></div>
        </Card>
    )
}

export default UserCard