import styles from "..styles/Form.module.css"

const Form = () => {
  return (
    <div className={styles.form}> 
 <h1>Войти</h1>
        <input type="text" placeholder="имя" />

    </div>
  )
}

export default Form