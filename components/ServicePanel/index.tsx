import React from "react";
import ServiceItem from '../ServiceItem';
import servicesData from '../../utils/services.json';
import { Service } from "../../utils/types";
import styles from './ServicePanel.module.css';

const services: Service[] = servicesData as Service[];

const ServicePanel: React.FC = () => {
    return (

        <div className={styles.panelContainer} data-testid="panel-container">
            <div className={styles.panelTitle}>Serviços Externos da Defensoria</div>
            {services.map((service) => (
                <div key={service.id} className={styles.itemContainer}>
                    <ServiceItem service={service} />
                </div>
            ))}
        </div>
    );
};

export default ServicePanel;
