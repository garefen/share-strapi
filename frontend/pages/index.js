import Link from 'next/link';
import styles from '../styles/Home.module.scss'

import Card from '../components/Card';

export default function Home({ ideas }) {
  return (
    <div className={styles.home}>
      <div className={styles.home__main}>
        {ideas && ideas.data.map((idea, i) => <Card data={idea.attributes} key={i}/>)}
      </div>
      <div className={styles.home__side}>
        <div className={styles.home__search}>
          <input
            value={""}
            type="text"
            className={styles.home__search_input}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={""}/>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://strapi-heroku-share.herokuapp.com/api/ideas?populate=%2A");
  const ideas = await res.json();
  return {
    props: { ideas },
  };
}
