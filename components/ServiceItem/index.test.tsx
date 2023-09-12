import React from 'react';
import {render} from '@testing-library/react';
import ServiceItem from './index';
import {Service} from '../../utils/types';

describe('ServiceItem Component', () => {
    it('should render service name and status', () => {
        const mockService: Service = {
            id: 1,
            service: 'SERPRO',
            status: 'up',
        };

        const {getByText, getByTitle} = render(<ServiceItem service={mockService}/>);

        expect(getByText('SERPRO')).toBeInTheDocument();
        expect(getByTitle('Up')).toBeInTheDocument();
    });

    it('should render service name and error status', () => {
        const mockService: Service = {
            id: 1,
            service: 'SERPRO',
            status: 'error',
        };

        const {getByText, getByTitle} = render(<ServiceItem service={mockService}/>);

        expect(getByText('SERPRO')).toBeInTheDocument();
        expect(getByTitle('Error')).toBeInTheDocument();
    });

    it('should render service name with "Warning" status', () => {
        const mockService: Service = {
            id: 1,
            service: 'SERPRO',
            status: 'warning',
        };

        const {getByText, getByTitle} = render(<ServiceItem service={mockService}/>);

        expect(getByText('SERPRO')).toBeInTheDocument();
        expect(getByTitle('Warning')).toBeInTheDocument();
    });
    it('should render service name with "Loading error" icon for unexpected status values', () => {
        const mockService: Service = {
            id: 1,
            service: 'SERPRO',
            status: 'unexpectedStatus',
        };

        const {getByText, getByTitle} = render(<ServiceItem service={mockService}/>);

        expect(getByText('SERPRO')).toBeInTheDocument();
        expect(getByTitle('Loading error')).toBeInTheDocument();
    });
});