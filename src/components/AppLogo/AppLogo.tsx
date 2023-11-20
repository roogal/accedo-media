/*
 * @author BSG <dev@bsgroup.eu>
 * @copyright Better Software Group S.A.
 * @version: 1.0
 */
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

import styles from "./AppLogo.module.scss";

interface IAppLogoProps {
  noMargin?: boolean;
}

export const AppLogo = ({ noMargin = false }: IAppLogoProps) => {
  const headerClassName = noMargin ? styles.headerNoMargin : styles.header;

  return (
    <div className={headerClassName}>
      <Link to={ROUTES.HOME}>
        <img className={styles.logo} src="/logo.webp" alt="Accedo media" />
      </Link>
    </div>
  );
};
