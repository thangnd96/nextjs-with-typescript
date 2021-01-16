import React from 'react';

// CSS
import styles from '@Styles/Home.module.scss';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to&nbsp;
          <a href="/">Web app</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
