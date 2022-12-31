import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
function SaveUser() {

    const onFinish = async (values) => {
        console.log('Success:', values);
        const createUsersRequest = await fetch('http://localhost:5000/saveusers',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(values)
            })

        const createUsersRespons = await createUsersRequest.json();
        console.log(createUsersRespons);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="age"
                    name="age"
                    rules={[
                        {
                            required: true,
                            message: 'Please input age!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input phone!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="height"
                    name="height"
                    rules={[
                        {
                            required: true,
                            message: 'Please input height!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="weight"
                    name="weight"
                    rules={[
                        {
                            required: true,
                            message: 'Please input weight!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="eyes"
                    name="eyes"
                    rules={[
                        {
                            required: true,
                            message: 'Please input eyes!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="city"
                    name="city"
                    rules={[
                        {
                            required: true,
                            message: 'Please input city!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="hair"
                    name="hair"
                    rules={[
                        {
                            required: true,
                            message: 'Please input hair!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default SaveUser