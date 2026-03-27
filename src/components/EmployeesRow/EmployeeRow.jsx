import { useState } from 'react';
import styles from './EmployeeRow.module.css';

const EmployeeRow = ({ employee }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr className={styles.employeeRow}>
        <td className={styles.employeeCell}>
          <div className={styles.userInfo}>
            <img
              src={employee.avatar}
              alt={employee.name}
              className={styles.avatar}
            />
            <span className={styles.name}>{employee.name}</span>
          </div>
        </td>
        <td className={styles.employeeCell}>
          <span className={styles.jobTitle}>{employee.jobTitle}</span>
        </td>
        <td className={styles.employeeCell} />
        <td className={styles.employeeCell} />
        <td className={styles.employeeCell} />
        <td className={styles.employeeCell} />
        <td className={styles.employeeCell}>
          <button
            className={styles.toggleBtn}
            onClick={() => setIsOpen((o) => !o)}
          >
            {isOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
          </button>
        </td>
      </tr>

      {isOpen &&
        employee.courses.map((course) => (
          <tr key={course.id} className={styles.courseRow}>
            <td className={styles.courseCell} />
            <td className={styles.courseCell} />
            <td className={styles.courseCell}>
              <div className={styles.courseTitle}>
                <div className={styles.courseIcon}>
                  <svg
                    className={styles.courseIconSvg}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 9h6M9 12h6M9 15h4" />
                  </svg>
                </div>
                {course.title}
              </div>
            </td>
            <td className={styles.courseCell}>
              {course.timeTaken ? (
                <span className={styles.timeTaken}>
                  {course.timeTaken.min}
                  <span className={styles.timeUnit}> min </span>
                  {course.timeTaken.sec}
                  <span className={styles.timeUnit}> sec</span>
                </span>
              ) : (
                <span className={styles.dash}>—</span>
              )}
            </td>
            <td className={styles.courseCell}>
              {course.attempts ?? <span className={styles.dash}>—</span>}
            </td>
            <td className={styles.courseCell}>
              {course.grade ?? <span className={styles.dash}>—</span>}
            </td>
            <td className={styles.courseCell} />
          </tr>
        ))}
    </>
  );
};

export default EmployeeRow;
