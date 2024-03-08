import styles from '@/components/Navbar/Navbar.module.css';
function LanguageToogle() {
  return (
    <select className={styles.navbar__language} name="language" id="language">
      <option value="EN">EN</option>
      <option value="FR">FR</option>
    </select>
  );
}

export default LanguageToogle;