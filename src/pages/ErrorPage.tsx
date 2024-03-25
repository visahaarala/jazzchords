import styles from './ErrorPage.module.scss';
import Navigation from '../components/navigation/Navigation';

const ErrorPage = () => {
  return (
    <div className='container'>
      <main>
        <h2>top secret</h2>
        <div className={styles.secret}>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Chi è fuori è fuori, chi è dentro è dentro.</p>
          <p>Just kidding. Bad URL.</p>
        </div>
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
};

export default ErrorPage;
