import { oxygen } from '@/app/font';
import styles from '@/app/services/services.module.css';
import { rocketIcon, serviceList, starIcon } from '@/data/services';
import type { Service } from '@/types/types';
import Image from 'next/image';

const ServiceList = () => {
  return (
    <>
      {serviceList ? serviceList.map((service: Service) => (
        <div className={styles.services__card} key={service.title}>
          <h4 className={oxygen.className}>{service.title}</h4>
          <p>
            <Image data-hide-on-theme='light' className={styles.services__icon__dark} src={starIcon.iconDark} alt={starIcon.alt} sizes='32x32' width={32} height={32} />
            <Image data-hide-on-theme='dark' className={styles.services__icon__light} src={starIcon.iconLight} alt={starIcon.alt} sizes='32x32' width={32} height={32} />
            {service.text1}</p>
          <p>
            <Image data-hide-on-theme='light' className={styles.services__icon__dark} src={rocketIcon.iconDark} alt={rocketIcon.alt} sizes='32x32' width={32} height={32} />
            <Image data-hide-on-theme='dark' className={styles.services__icon__light} src={rocketIcon.iconLight} alt={rocketIcon.alt} sizes='32x32' width={32} height={32} />
            {service.text2}
          </p>
        </div>)) : null}
    </>
  );
};

export default ServiceList;