import styles from '@/app/services/services.module.css';
import { serviceReasonList, starIcon } from '@/data/services';
import Image from 'next/image';

function ServiceReasonList() {
  return (
    <>
      {serviceReasonList ? serviceReasonList.map((serviceReason) => (
        <div className={styles.services__item} key={serviceReason.title}>
          <Image data-hide-on-theme='light' className={styles.services__icon__dark} src={starIcon.iconDark} alt={starIcon.alt} sizes='32x32' width={32} height={32} />
          <Image data-hide-on-theme='dark' className={styles.services__icon__light} src={starIcon.iconLight} alt={starIcon.alt} sizes='32x32' width={32} height={32} />
          <p><span>{serviceReason.title}</span> - {serviceReason.text}</p>
        </div>
      )) : null}
    </>
  );
}

export default ServiceReasonList;