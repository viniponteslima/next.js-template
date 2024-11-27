import styles from './ItemCarousel.module.css';

export default function ItemCarousel({ children }) {
  return (
      <div className={styles.itemCarousel} > 
        {children}
      </div>
  );
}