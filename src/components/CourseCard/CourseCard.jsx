import styles from './CourseCard.module.css';
import eyeLogo from '../../assets/logo/eyeLogo.svg';
const MAX_VISIBLE_AVATARS = 3;

const CourseCard = ({ course }) => {
  const visibleAvatars = course.avatars?.slice(0, MAX_VISIBLE_AVATARS) ?? [];
  const extraCount = (course.avatars?.length ?? 0) - MAX_VISIBLE_AVATARS;

  return (
    <div className={styles.card}>
      <div className={styles.infoSection}>
        <div className={styles.iconWrapper}>
          <img src={eyeLogo} alt="Course icon" className={styles.icon} />
        </div>

        <div className={styles.titleBlock}>
          <h4 className={styles.title}>{course.title}</h4>
          <span className={styles.type}>{course.type}</span>
        </div>
      </div>

      {/* RIGHT SECTION: Stats and Avatars */}
      <div className={styles.statsSection}>
        <div className={styles.statBlock}>
          <p className={styles.statLabel}>Category</p>
          <span className={styles.statValue}>{course.category}</span>
        </div>

        <div className={styles.statBlock}>
          <p className={styles.statLabel}>Number of Students</p>
          <span className={styles.statValue}>
            {course.studentsCount ?? 'Unknown'}
          </span>
        </div>

        <div className={styles.statBlock}>
          <p className={styles.statLabel}>Passed education</p>
          <span className={styles.statValue}>
            {course.passedCount ?? 'Unknown'}
          </span>
        </div>

        <div className={styles.avatars}>
          {visibleAvatars.map((url, i) => (
            <img
              key={i}
              src={url}
              alt="student avatar"
              className={styles.avatar}
            />
          ))}
          {extraCount > 0 && (
            <div className={styles.avatarExtra}>+{extraCount}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
