import React, { useEffect, useState } from 'react';
import { Table, Modal, Button, Input, message } from 'antd';

interface Event {
    event_id: number;
    eventName: string;
    odds: number;
}

export const Events = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [events, setEvents] = useState<Event[]>([]);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [betAmount, setBetAmount] = useState<number>(0);

    useEffect(() => {
        fetch('http://localhost:3000/api/events')
            .then(response => response.json())
            .then(data => {
                setEvents(data.responseObject);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    const showModal = (event: any) => {
        setSelectedEvent(event);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        // TODO: Implement bet placement

        messageApi.open({
            type: 'success',
            content: `Bet placed for event: ${selectedEvent?.eventName} with amount: ${betAmount}`,
          });

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        {
            title: 'Event ID',
            dataIndex: 'event_id',
            key: 'event_id',
        },
        {
            title: 'Event Name',
            dataIndex: 'eventName',
            key: 'eventName',
        },
        {
            title: 'Odds',
            dataIndex: 'odds',
            key: 'odds',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: any) => (
                <Button onClick={() => showModal(record)}>Place Bet</Button>
            ),
        },
    ];

    return (
        <>
            <Table dataSource={events} columns={columns} pagination={false} />
            <Modal title="Place Bet" open={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Event: {selectedEvent?.eventName || ''}</p>
                <Input type='number' onChange={(e) => {
                    setBetAmount(Number(e.target.value));
                }} placeholder="Enter your bet amount" />
            </Modal>
            {contextHolder}
        </>
    );
};
