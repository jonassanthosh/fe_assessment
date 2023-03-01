import React, { useContext } from 'react'
import { Modal, Form, Input } from "antd";
import { DataContext } from '../App';

const UserformModal = ({ modelOpen, setModelOpen, index }) => {
    const [form] = Form.useForm();
    const { users, setUsers } = useContext(DataContext)

    const initialValues = {
        name: users[index].name,
        email: users[index].email,
        phone: users[index].phone,
        website: users[index].website,
    }
    return (
        <Modal
            title="Basic Modal"
            bodyStyle={{
                display: 'flex',
                justifyContent: 'end',
                padding: '24px'
            }}
            open={modelOpen}
            onOk={() => {
                const updatedUsers = [...users];
                const { name, email, phone, website } = form.getFieldsValue()
                updatedUsers[index] = {
                    ...updatedUsers[index],
                    name: name,
                    email: email,
                    phone: phone,
                    website: website
                };
                setUsers(updatedUsers);
                setModelOpen(false)
            }}
            onCancel={() => setModelOpen(false)}>
                
            <Form
                form={form}
                name='basic'
                initialValues={initialValues}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                style={{
                    width: '400px'
                }}
            >
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Website" name="website" rules={[{ required: true, message: 'This field is required' }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal >
    )
}

export default UserformModal