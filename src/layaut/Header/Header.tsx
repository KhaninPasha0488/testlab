import styles from "./Header.module.css"
import cn from "classnames";
import {HeaderProps} from "./Header.props";
import  Logo from "../../logo/Logo.png"

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            <header className={cn(className,styles.header)} {...props}>

                <img className={styles.headerLogo} src={Logo} alt={'logo'}/>


            </header>
        </div>
    )
};