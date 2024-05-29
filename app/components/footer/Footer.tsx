import styles from './Footer.module.css'

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={`container ${styles.contianer}`}>
            <div className={styles.soicalMedia}>
                <a className="btn btn-social" href="#"><i className="fa-brands fa-facebook"></i></a>
                <a className="btn btn-social" href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                <a className="btn btn-social" href="#"><i className="fa-brands fa-instagram"></i></a>
                <a className="btn btn-social" href="#"><i className="fa-brands fa-youtube"></i></a>
            </div>
            <div className={styles.copyright}>
                &copy; Silicon. All right reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.
            </div>
        </div>
      </footer>
    );
}
