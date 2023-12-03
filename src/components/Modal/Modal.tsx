/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import styles from "./Modal.module.scss";

interface IModalProps {
  title: string | React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
}

export const Modal = ({ title, onCancel, onConfirm }: IModalProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons}>
        <button
          key="cancel"
          className={styles.buttonCancel}
          onClick={() => onCancel?.()}
        >
          Cancel
        </button>
        <button
          key="confirm"
          className={styles.buttonConfirm}
          onClick={() => onConfirm?.()}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};
