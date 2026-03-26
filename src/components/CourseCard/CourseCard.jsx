import styles from './CourseCard.module.css';

const MAX_VISIBLE_AVATARS = 3;

const CourseCard = ({ course }) => {
  const visibleAvatars = course.avatars?.slice(0, MAX_VISIBLE_AVATARS) ?? [];
  const extraCount = (course.avatars?.length ?? 0) - MAX_VISIBLE_AVATARS;

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      <div className={styles.titleBlock}>
        <h4 className={styles.title}>{course.title}</h4>
        <span className={styles.type}>{course.type}</span>
      </div>

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
  );
};

export default CourseCard;
