import React from 'react';
import { render } from '@testing-library/react';
import ServicePanel from './index';

import servicesData from '../../utils/services.json';

describe('ServicePanel Component', () => {
    it('should render the ServicePanel component', () => {
        const { getByTestId } = render(<ServicePanel />);
        const panelContainer = getByTestId('panel-container');

        expect(panelContainer).toHaveClass('panelContainer');
    });

    it('should render the panel title', () => {
        const { getByText } = render(<ServicePanel />);
        expect(getByText('Serviços Externos da Defensoria')).toBeInTheDocument();
    });

    it('should render a ServiceItem for each service', () => {
        const { getAllByTestId } = render(<ServicePanel />);
        const serviceItems = getAllByTestId('service-item');
        expect(serviceItems.length).toBe(servicesData.length);
    });

    it('should render a ServiceItem with correct content for the first service', () => {
        const firstService = servicesData[0];
        const { getByText } = render(<ServicePanel />);
        expect(getByText(firstService.service)).toBeInTheDocument();
    });
});
