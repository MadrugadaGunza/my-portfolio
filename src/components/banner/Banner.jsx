// styles
import styles from './Banner.module.css';
// images
import MyImage from './../../assets/images/imag-copy.png';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div>
                <h1 className='title'>
                    Olá, sou Madrugada de Carvalho <br /> Desenvolvedor Web
                </h1>
                <p>
                    Sou um Desenvolvedor Web dedicado, especializado em criar interfaces web
                    modernas e intuitivas que transformam ideias em experiências digitais incríveis.
                    Com sólida experiência em React.js e habilidades na construção de APIs com Node.js
                    e MongoDB, desenvolvo aplicações funcionais, responsivas e centradas no usuário,
                    sempre priorizando a performance e a acessibilidade.
                </p>
                <p>
                    Minha jornada no desenvolvimento de software é marcada por desafios e aprendizado
                    constante. Adoro resolver problemas complexos e transformar conceitos em projetos
                    funcionais, colaborando em equipes ágeis e garantindo que cada detalhe atenda às
                    expectativas de clientes e usuários.
                </p>
                <div className={styles.blockBtn}>
                    <a href="#" className={`${styles.btn} ${styles.btnContact}`}>
                        <i className={`fa-solid fa-envelope icon ${styles.contact}`}></i>
                        Contactar
                    </a>
                    <a href="#" className={`${styles.btn} ${styles.btnCV}`}>
                        <i className={`fa-solid fa-download icon ${styles.download}`}></i>
                        Baixar CV
                    </a>
                </div>

                {/* <div className={styles.blockIcon}>
                    <i className={`fab fa-js icon ${styles.javascript}`}></i>
                    <i className={`fab fa-react icon ${styles.react}`}></i>
                    <i className={`fab fa-angular icon ${styles.angular}`}></i>
                    <i className={`fab fa-node-js icon ${styles.node}`}></i>
                </div> */}
            </div>
            <img src={MyImage} alt="minha imagem" />
        </section>
    )
}

export default Banner
