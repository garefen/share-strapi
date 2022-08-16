import styles from '../../styles/User.module.scss';
import Image from 'next/image';

import Card from '../../components/Card';

export default function User({ user }) {
    return (
      <div className={styles.user}>
        <div className={styles.user__wrapper}>
          <div className={styles.user__hero}>
            <div className={styles.user__image_wrapper}>
              <img className={styles.user__image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNEn_i80w8Yq2-2zgXi9Om8l6J3-Bkkoe1QJdaanNFu8Cg0294IaOxcGVqQJWK_21Voc&usqp=CAU" alt="" />
            </div>
            <div className={styles.user__info}>
              <div className={styles.user__name}>
                {user.username}
              </div>
              <div className={styles.user__bio}>{user.bio}</div>
            </div>
          </div>
          <div className={styles.user__ideas}>
            {user.ideas && user.ideas.length > 0 && (
              <>
                <div className={styles.user__main}>
                  {user.ideas.map((idea, i) => <Card data={idea} key={i} />)}
                </div>
                <div className={styles.user__side}>
                </div>
              </>
            )}
            {user.ideas && user.ideas.length == 0 && (
              <div>nenhuma ideia</div>
            )}
          </div>
        </div>
      </div>
    )
}

export async function getStaticPaths() {
  const res = await fetch("https://strapi-heroku-share.herokuapp.com/api/users");
  const users =  await res.json();

  const paths = users.map((user) => ({
    params: { slug: user.slug }
  }));

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const { slug } = params;

  const res = await fetch(`https://strapi-heroku-share.herokuapp.com/api/users?populate=%2A&filters[slug]=${slug}`);
  const data = await res.json();
  const user = data[0];

  return {
    props: {
      user
    }
  }
}
