import styles from './Test.module.css';

console.log('styles object:', styles);

const Test = () => <div className={styles.hello}>CSS Modules work!</div>;

export default Test;
