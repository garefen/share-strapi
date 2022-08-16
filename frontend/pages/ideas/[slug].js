import styles from '../../styles/Idea.module.scss'
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export default function Idea({ idea }) {
    return (
      <div className={styles.idea}>
        <a href={`/users/${idea.attributes.user.data.attributes.slug}`} className={styles.idea__user}>
          <div className={styles.idea__user_image}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNEn_i80w8Yq2-2zgXi9Om8l6J3-Bkkoe1QJdaanNFu8Cg0294IaOxcGVqQJWK_21Voc&usqp=CAU" alt="" />
          </div>
          <div className={styles.idea__user_info}>
            <div className={styles.idea__user_name}>{idea.attributes.user.data.attributes.username}</div>
            <div className={styles.idea__date}>{idea.attributes.publishedAt}</div>
          </div>
        </a>
        <div className={styles.idea__title}>{idea.attributes.title}</div>
        <div className={styles.idea__description}>{idea.attributes.description}</div>
        <div className={styles.idea__text}>
          <ReactMarkdown escapeHtml={false}>
            {idea.attributes.content}
          </ReactMarkdown>
        </div>
      </div>
    )
}

export async function getStaticPaths() {
  const res = await fetch("https://strapi-heroku-share.herokuapp.com/api/ideas?populate=%2A");
  const ideas =  await res.json();

  const paths = ideas.data.map((idea) => ({
    params: { slug: idea.attributes.slug }
  }));

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const { slug } = params;

  const res = await fetch(`https://strapi-heroku-share.herokuapp.com/api/ideas?populate=%2A&filters[slug]=${slug}`);
  const data = await res.json();
  const idea = data.data[0];

  return {
    props: {
      idea
    }
  }
}
