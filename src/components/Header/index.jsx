import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

export function Header () {
  return(
    <div className={styles.businessLogo}>
      <img src={logo} alt="logo da empresa"></img>
      <strong> todo </strong>
    </div>
  )
}