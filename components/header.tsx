import styles from "../styles/Home.module.css";

export default function Header() {
    return (<header className={styles.header}>
        <a href="/"> 910051's Blog</a>
        <nav>
            <a href="#main">Home</a>
            <a href=""> Skills</a>
            <a href=""> Projects</a>
            <a href=""> Contacts</a>
        </nav>
    </header>
    )};
