import React, { useMemo } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import ConfigProvider from 'antd/es/config-provider';

import { WIDGET_CONFIG_QUERY } from '../../constants';
import { getAccentColor } from '../../modules/utils';
import COLOUR from '../../constants/colour';
import PageLayout from '../../components/PageLayout';

// TODO remove
// example of the iframe:
{/* <iframe
        id="widget"
        src={
          "http://localhost:3000/app/booking/123/456/12?data=eyJhY2NlbnRDb2xvciI6IiNGRjUzNjYifQ=="
        }
    ></iframe>
*/}

const BookingOutlet: React.FC = () => {
    const [searchParams] = useSearchParams();
    
    // decode and parse the widget config
    const accentColor = useMemo(() => {
        const widgetConfig = searchParams.get(WIDGET_CONFIG_QUERY);
        const queryAccentColor = getAccentColor(widgetConfig);
        return queryAccentColor ?? COLOUR.PRIMARY;
    }, []);
    
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: accentColor,
                        algorithm: true,
                    },
                },
            }}
        >
            <PageLayout>
                <Outlet />
            </PageLayout>
        </ConfigProvider>
    );
};

export default BookingOutlet;
