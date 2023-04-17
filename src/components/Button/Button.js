import styles from './Button.module.scss';

const Button = props => {
    return (<input className={styles.button} placeholder ={props.placeholder} type= "text" />)
};

export default Button;