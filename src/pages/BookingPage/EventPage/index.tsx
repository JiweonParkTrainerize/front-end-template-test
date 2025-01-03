import React from 'react';
import { theme } from 'antd';
import Calendar from '../../../components/Calendar';

const { useToken } = theme;

const EventPage: React.FC = () => {
    // TODO handle search params to render select date and time or the booking form
    const { token } = useToken();
    return (
        <>
            <div>Header</div>
            <Calendar accentColor={token.Button?.primaryColor} />
        </>
    );
};

export default EventPage;
