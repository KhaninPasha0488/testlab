import styles from "./Footer.module.css"
import cn from "classnames";
import {FooterProps} from "./Footer.props";
import {format} from "date-fns";
export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className,styles.footer)} {...props}>
            <div className={styles.container}>
                Copyright  © 2012 - {format(new Date(), 'yyyy')} ID Finance
            </div>

        </footer>
    )
};