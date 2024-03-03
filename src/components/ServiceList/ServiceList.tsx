import { lato } from '@/app/font';
import styles from '@/app/services/services.module.css';
import { rocketIcon, serviceList, starIcon } from '@/data/services';
import type { Service } from '@/types/types';
import Image from 'next/image';

const ServiceList = () => {
  return (
    <>
      {serviceList ? serviceList.map((service: Service) => (
        <div className={styles.services__card} key={service.title}>
          <h4 className={lato.className}>{service.title}</h4>
          <p>
            <Image className={styles.services__icon__dark} src={starIcon.iconDark} alt={starIcon.alt} sizes='2vw' width={0} height={0} />
            <Image className={styles.services__icon__light} src={starIcon.iconLight} alt={starIcon.alt} sizes='2vw' width={0} height={0} />
            {service.text1}</p>
          <p>
            <Image className={styles.services__icon__dark} src={rocketIcon.iconDark} alt={rocketIcon.alt} sizes='2vw' width={0} height={0} />
            <Image className={styles.services__icon__light} src={rocketIcon.iconLight} alt={rocketIcon.alt} sizes='2vw' width={0} height={0} />
            {service.text2}
          </p>
        </div>)) : null}
    </>
  );
};

export default ServiceList;