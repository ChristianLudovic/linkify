import styles from "../../styles/footerSection.module.css";
import Image from "next/image";
import footerLogo from "../../assets/logo/newLogo.svg";
import Link from "next/link";

export default function FooterSection() {
    return (
        <>
            <div className={styles.footerSection}>
                <div className={styles.footerSectionContent} id="footerSectionContent">
                    <div className={styles.footerLinks} id="footerLinks">
                        <div className={styles.footerLogo}>
                            <Image src={footerLogo} width={100} height={30} alt="Linkify" />
                        </div>
                        
                        <div className={styles.footerLinksLeft}>
                            <Link legacyBehavior href="/">
                                <a style={{
                                    textDecoration: 'none', 
                                    fontFamily: 'grifter', 
                                    fontSize: '16px', 
                                    color: '#9D9D9D'
                                    }}>
                                    Football
                                </a>
                            </Link>
                            <Link legacyBehavior href="/">
                                <a style={{
                                    textDecoration: 'none', 
                                    fontFamily: 'grifter', 
                                    fontSize: '16px', 
                                    color: '#9D9D9D'
                                    }}>
                                    NBA
                                </a>
                            </Link>
                            <Link legacyBehavior href="/">
                                <a style={{
                                    textDecoration: 'none', 
                                    fontFamily: 'grifter', 
                                    fontSize: '16px', 
                                    color: '#9D9D9D'
                                    }}>
                                    NFL
                                </a>
                            </Link>
                        </div>
                        <div className={styles.mediaIcons}>
                            <Link legacyBehavior href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M8.53163 0.722382C6.35904 0.722382 6.08662 0.73159 5.23338 0.770522C4.38191 0.809389 3.80039 0.9446 3.29152 1.14237C2.76547 1.3468 2.31935 1.62034 1.87463 2.06506C1.42991 2.50978 1.15637 2.9559 0.951937 3.48195C0.754169 3.99079 0.618958 4.57231 0.580091 5.42378C0.541159 6.27702 0.531982 6.54944 0.531982 8.72203C0.531982 10.8946 0.541159 11.167 0.580091 12.0203C0.618958 12.8717 0.754169 13.4532 0.951937 13.9621C1.15637 14.4881 1.42991 14.9342 1.87463 15.379C2.31935 15.8237 2.76547 16.0973 3.29152 16.3017C3.80039 16.4994 4.38191 16.6347 5.23338 16.6735C6.08662 16.7124 6.35904 16.7216 8.53163 16.7216C10.7042 16.7216 10.9766 16.7124 11.8299 16.6735C12.6813 16.6347 13.2628 16.4994 13.7717 16.3017C14.2977 16.0973 14.7438 15.8237 15.1886 15.379C15.6333 14.9342 15.9069 14.4881 16.1113 13.9621C16.309 13.4532 16.4443 12.8717 16.4831 12.0203C16.522 11.167 16.5312 10.8946 16.5312 8.72203C16.5312 6.54944 16.522 6.27702 16.4831 5.42378C16.4443 4.57231 16.309 3.99079 16.1113 3.48195C15.9069 2.9559 15.6333 2.50978 15.1886 2.06506C14.7438 1.62034 14.2977 1.3468 13.7717 1.14237C13.2628 0.9446 12.6813 0.809389 11.8299 0.770522C10.9766 0.73159 10.7042 0.722382 8.53163 0.722382ZM8.53163 2.16379C10.6676 2.16379 10.9206 2.17191 11.7642 2.2104C12.5441 2.246 12.9677 2.37632 13.2496 2.48584C13.623 2.63096 13.8895 2.80434 14.1694 3.08426C14.4493 3.36417 14.6227 3.63069 14.7678 4.00406C14.8773 4.28594 15.0077 4.70952 15.0432 5.48948C15.0817 6.333 15.0899 6.58603 15.0899 8.72203C15.0899 10.858 15.0817 11.111 15.0432 11.9546C15.0077 12.7345 14.8773 13.1581 14.7678 13.44C14.6227 13.8134 14.4493 14.0799 14.1694 14.3598C13.8895 14.6397 13.623 14.8131 13.2496 14.9582C12.9677 15.0677 12.5441 15.1981 11.7642 15.2336C10.9207 15.2721 10.6678 15.2803 8.53163 15.2803C6.39547 15.2803 6.14251 15.2721 5.29908 15.2336C4.51912 15.1981 4.09555 15.0677 3.81366 14.9582C3.44026 14.8131 3.17377 14.6397 2.89383 14.3598C2.61391 14.0799 2.44053 13.8134 2.29544 13.44C2.18589 13.1581 2.05557 12.7345 2.01997 11.9546C1.98148 11.111 1.97335 10.858 1.97335 8.72203C1.97335 6.58603 1.98148 6.333 2.01997 5.48948C2.05557 4.70952 2.18589 4.28594 2.29544 4.00406C2.44053 3.63069 2.61391 3.36417 2.89383 3.08426C3.17377 2.80434 3.44026 2.63096 3.81366 2.48584C4.09555 2.37632 4.51912 2.246 5.29908 2.2104C6.14261 2.17191 6.39563 2.16379 8.53163 2.16379Z" fill="white"/>
                                    <path d="M8.53152 11.3886C7.0588 11.3886 5.86496 10.1947 5.86496 8.72202C5.86496 7.24931 7.0588 6.05546 8.53152 6.05546C10.0042 6.05546 11.198 7.24931 11.198 8.72202C11.198 10.1947 10.0042 11.3886 8.53152 11.3886ZM8.53152 4.61409C6.26275 4.61409 4.42358 6.45325 4.42358 8.72202C4.42358 10.9908 6.26275 12.8299 8.53152 12.8299C10.8003 12.8299 12.6394 10.9908 12.6394 8.72202C12.6394 6.45325 10.8003 4.61409 8.53152 4.61409Z" fill="white"/>
                                    <path d="M13.7617 4.45179C13.7617 4.98197 13.3319 5.41173 12.8017 5.41173C12.2716 5.41173 11.8418 4.98197 11.8418 4.45179C11.8418 3.92162 12.2716 3.49185 12.8017 3.49185C13.3319 3.49185 13.7617 3.92162 13.7617 4.45179Z" fill="white"/>
                                </svg>
                            </Link>
                            <Link legacyBehavior href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none">
                                    <path d="M16.8232 1.66935C16.2243 1.93558 15.5798 2.11516 14.9034 2.19552C15.594 1.78213 16.1235 1.12731 16.3731 0.346164C15.7273 0.729462 15.0122 1.00759 14.2506 1.15774C13.6411 0.508214 12.7723 0.102097 11.8109 0.102097C9.96521 0.102097 8.46873 1.59858 8.46873 3.44463C8.46873 3.70622 8.49817 3.9612 8.55538 4.20626C5.77738 4.0667 3.31421 2.73624 1.6656 0.713918C1.37788 1.20734 1.21318 1.78146 1.21318 2.39461C1.21318 3.5541 1.80318 4.57733 2.70008 5.17658C2.15241 5.15905 1.63683 5.00858 1.18606 4.75823C1.18573 4.77212 1.18573 4.78634 1.18573 4.80056C1.18573 6.41974 2.33794 7.77038 3.86717 8.07794C3.58672 8.154 3.29139 8.19501 2.98648 8.19501C2.77085 8.19501 2.56151 8.17418 2.35746 8.13482C2.78309 9.46264 4.01731 10.4293 5.47973 10.4561C4.33579 11.3527 2.89487 11.8871 1.3286 11.8871C1.05907 11.8871 0.792845 11.8712 0.53125 11.8401C2.01087 12.789 3.76762 13.3419 5.65501 13.3419C11.8033 13.3419 15.165 8.24892 15.165 3.8319C15.165 3.68704 15.1621 3.54252 15.1558 3.39899C15.8086 2.92871 16.3755 2.33971 16.8232 1.66935Z" fill="white"/>
                                </svg>
                            </Link>
                        </div>
                        
                       
                    </div> 
                    <div className={styles.copyright} id="copyright">
                        <p>copyrighgt linkify 2024, all rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}