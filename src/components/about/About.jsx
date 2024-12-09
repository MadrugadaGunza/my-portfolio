// styles
import styles from './About.module.css'

const About = () => {
    return (
        <section className={styles.about}>
            <h1 className="title">
                Sobre mim
            </h1>
            <p>
                Olá! Sou Madrugada de Carvalho, um Desenvolvedor de Software FrontEnd
                apaixonado por criar interfaces dinâmicas, modernas e centradas no usuário.
                Trabalho com tecnologias como React.js, Angular, JavaScript, e TypeScript,
                construindo soluções funcionais e escaláveis para a web. Tenho experiência
                em criar APIs com Node.js e MongoDB, além de integrar sistemas que garantem
                performance e responsividade.
            </p>
            <p>
                Com um forte foco na entrega de resultados, procuro sempre traduzir ideias em
                projetos que agreguem valor ao cliente e ao usuário final. Seja desenvolvendo
                componentes independentes ou resolvendo problemas complexos, acredito que cada
                desafio é uma oportunidade de crescer como profissional.
            </p>
        </section>
    )
}

export default About
