import Link from "next/link";
import styles from '@/app/components/header/header.module.css'
import { cookies } from "next/headers";

export default function Header() {
  const isSignedIn = cookies().get('Authorization')
    return (
      <header className={styles.header}>
        <div className={`container ${styles.container}`}>
          <Link className="logo" href="/"><img src="/images/Silicon Logotype - Light Mode.svg" alt=""/></Link>

          <nav className={styles.nav}>
            <Link href="/overview">Overview</Link>
            <Link href="/features">Features</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className={styles.accountButtons}>

            {isSignedIn ? (
              <div className="profile">
                <div className="profile-image">
                  <Link href="/account/details">
                    <img src="/images/uploads/profiles/avatar.jpg" />
                  </Link>
                </div>
              </div>
            )
            : (
              <>
                <Link className="btn btn-gray" href="/signin"><i className="btn-icon fa-solid fa-arrow-right-to-bracket"></i></Link>
                <Link className="btn btn-theme" href="/signup"><i className="btn-icon fa-regular fa-user"></i></Link>
              </>
            )
            }
          </div>
        </div>
      </header>
  );
}
