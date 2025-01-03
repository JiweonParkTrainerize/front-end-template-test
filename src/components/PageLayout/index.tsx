import React, { PropsWithChildren } from 'react';

const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="layout__content">{children}</div>;
};

export default PageLayout;
