import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const EventListPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>List of events</div>
            <Button style={{width: '200px'}} type="default" onClick={() => navigate('1')}>
                Select
            </Button>
        </>
    );
};

export default EventListPage;
