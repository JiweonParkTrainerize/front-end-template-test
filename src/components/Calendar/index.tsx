import React, { CSSProperties } from 'react';
import { Calendar as AntCalendar, CalendarProps as AntCalendarProps } from 'antd';
import { Dayjs } from 'dayjs';
import COLOUR from '../../constants/colour';
import { ColorHEX } from '../../constants/types';

export type CalendarProps = {
    accentColor?: ColorHEX;
};

const Calendar: React.FC<CalendarProps> = ({ accentColor = COLOUR.PRIMARY }) => {
    const availableLocalDates = ['2024-05-25', '2024-05-26', '2024-05-27'];
    
    const onPanelChange = (value: Dayjs, mode: AntCalendarProps<Dayjs>['mode']) => {
        console.log(value, mode);
    };
    
    const handleDateRender: AntCalendarProps<Dayjs>['fullCellRender'] = date => {
        let style: CSSProperties = {};
        if (availableLocalDates.includes(date.format('YYYY-MM-DD'))) {
            style = {
                backgroundColor: accentColor,
                margin: 5,
            };
        }
        return (
            <div className="ant-calendar-date" style={style}>
                {date.get('date')}
            </div>
        );
    };
    return <AntCalendar fullscreen={false} fullCellRender={handleDateRender} onPanelChange={onPanelChange} />;
};

export default Calendar;
