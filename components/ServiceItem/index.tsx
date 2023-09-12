import React from "react";
import { Service } from '../../utils/types';
import { FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';
import styles from './ServiceItem.module.css';

type ServiceItemProps = {
    service: Service;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ service }) => {
    let icon;
    let tooltip;

    switch (service.status) {
        case 'up':
            icon = <FaCheckCircle className={styles.upIcon} />;
            tooltip = "Up";
            break;
        case 'warning':
            icon = <FaExclamationTriangle className={styles.warningIcon} />;
            tooltip = "Warning";
            break;
        case 'error':
            icon = <FaExclamationCircle className={styles.errorIcon} />;
            tooltip = "Error";
            break;
        default:
            icon = <FaTimesCircle className={styles.loadErrorIcon} />;
            tooltip = "Loading error";
            break;
    }

    return (
        <div className={styles.serviceItem} data-testid="service-item">
            <span className={styles.serviceName}>{service.service}</span>
            <span className={styles.statusIcon} title={tooltip}>
                {icon}
            </span>
        </div>
    );
};

export default ServiceItem;
