import styles from '@/app/services/services.module.css';

function ServiceBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.line}>
        <span>Introductory Rates</span>
      </div>
      <div className={styles.line}>
        <span>for First</span>
      </div>
      <div className={styles.line}>
        <span>New Clients</span>
      </div>
    </div>
  );
}

export default ServiceBanner;