import React, { useContext, useState } from 'react'
import { EditOutlined, DeleteFilled, HeartOutlined, MailOutlined, PhoneOutlined, GlobalOutlined, HeartFilled } from '@ant-design/icons';
import { Card } from 'antd';
import UserformModal from './UserformModal';
import { DataContext } from '../App';
// import './user.css'

const iconSize = { fontSize: '18px' }
const pStyle = { paddingLeft: '10px', paddingBottom: '5px', margin: '0' }
const divStyle = { display: 'flex' }



const UserCard = ({ index }) => {
    const [like, setLike] = useState(false)
    const [modelOpen, setModelOpen] = useState(false)

    const {users, setUsers} = useContext(DataContext)
    return (
        <>
        <Card
            style={{
                margin: 15
            }}
            cover={
                <img
                    alt="avatar"
                    src={`https://avatars.dicebear.com/v2/avataaars/${users[index].username}.svg?options[mood][]=happy`}
                    width={200}
                    height={200}
                />
            }
            actions={[

                like ? <HeartFilled style={{ fontSize: '18px', color: 'red' }} onClick={() => setLike((prev) => !prev)} /> : <HeartOutlined style={{ fontSize: '20px', color: 'red' }} onClick={() => setLike((prev) => !prev)} />,

                <EditOutlined
                    style={iconSize} key="edit"
                    onClick={() => { 
                        setModelOpen(true)
                    }}
                />,

                <DeleteFilled
                    style={iconSize}
                    onClick={() => {
                        setUsers((users) => users.filter((_, i) => i !== index))
                    }} />
            ]}
        >
            <h3 style={{ margin: '0', paddingBottom: '8px', fontWeight: '500' }}>{users[index].name}</h3>
                <div style={divStyle}><MailOutlined style={iconSize} /><p style={pStyle}>{users[index].email}</p></div>
                <div style={divStyle}><PhoneOutlined style={iconSize} /><p style={pStyle}>{users[index].phone}</p></div>
                <div style={divStyle}><GlobalOutlined style={iconSize} /><p style={pStyle}>http://{users[index].website}</p></div>
            </Card>
            
            <UserformModal modelOpen={modelOpen} setModelOpen={setModelOpen} index={index} />
        </>
    )
}

export default UserCard