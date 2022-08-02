import Link from 'next/link';
import styles from '../styles/Card.module.scss';

function Card({data}) {
  return (
    <Link href={`/ideas/${data.slug}`} >
      <a className={styles.card}>
        <div className={styles.card__wrapper}>
            <div className={styles.card__title}>
                <div className={styles.card__title_text}>
                    {data.title}
                </div>
                <span className={styles.card__lights}>
                <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.46023 25.9874C5.46023 26.3476 5.56341 26.699 5.76045 26.9993L6.73432 28.4689C7.03261 28.9193 7.70989 29.2857 8.24796 29.2857H11.7519C12.2882 29.2857 12.9656 28.9196 13.2639 28.4689L14.2343 26.9999C14.4012 26.746 14.5382 26.2923 14.5382 25.9874L14.5455 23.745H5.45455L5.46023 25.9874ZM10 0C4.20568 0.0183222 0 4.74614 0 10.0163C0 12.5549 0.934091 14.8694 2.475 16.6404C3.4142 17.7181 4.88068 19.9713 5.44205 21.8716C5.44382 21.8859 5.44738 21.9012 5.44915 21.9164H14.5514C14.5532 21.9012 14.5568 21.8868 14.5585 21.8716C15.1196 19.9713 16.5864 17.7181 17.5256 16.6404C19.0682 14.9186 20 12.6076 20 10.0163C20 4.50761 15.5227 0.000223092 10 0ZM15.4773 14.8785C14.5875 15.8996 13.4864 17.527 12.6903 19.2197H7.31477C6.51875 17.527 5.41761 15.8996 4.52841 14.8791C3.36591 13.5457 2.72727 11.7896 2.72727 10.0163C2.72727 6.48111 5.46023 2.76005 9.94886 2.74575C14.0114 2.74575 17.2727 6.02921 17.2727 10.0163C17.2727 11.7896 16.6364 13.5457 15.4773 14.8785ZM9.09091 4.57625C6.58523 4.57625 4.54545 6.62984 4.54545 9.1525C4.54545 9.65841 4.95205 10.0678 5.45455 10.0678C5.95705 10.0678 6.36364 9.65589 6.36364 9.1525C6.36364 7.63833 7.58693 6.40675 9.09091 6.40675C9.59341 6.40675 10 5.99786 10 5.49207C10 4.98628 9.59091 4.57625 9.09091 4.57625Z" fill="#01CC60"/>
                </svg>
                {data.lights}
                </span>
            </div>
            <div className={styles.card__description}>
                {data.description}
            </div>
            <div className={styles.card__author}>
                <span>
                    {data.user.data.attributes.username} •
                </span>
                <span className={styles.card__category}> {data.category}</span>
            </div>
        </div>
        <div className={styles.card__image}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNEn_i80w8Yq2-2zgXi9Om8l6J3-Bkkoe1QJdaanNFu8Cg0294IaOxcGVqQJWK_21Voc&usqp=CAU" alt="" />
        </div>
      </a>
    </Link>
  );
}

export default Card;
