import Card from '../../components/Cards';
import './style.css';

export default function Experiences() {
    return (
        <>
            <div className="container">
                <h2>Experiences</h2>
                <div className="line"></div>
                <div className="cards-experiences">
				<Card 
                        position="Estágiario de Desenvolvimento de Software"
                        company="Ranor Software de Rastreamento"
                        time="05/2022 - Atualmente"
                        description={
						<p>
							· Desenvolvimento do site de uma das principais plataformas da empresa;
							<br></br>
							· Desenvolvimento de aplicações web em React, Node e PHP, com responsividade e fidelidade dos layouts;
							<br></br>
							· Identificar melhorias, reparos e necessidades dos projetos e solucioná-los.
							<br></br>
							· Responsável pelo desenvolvimento de um sistema de estoque;
							<br></br>
							· Responsável por solucionar as demandas que chegavam constantemente.
							<br></br>
							<br></br>
							Ferramentas, bibliotecas, frameworks e linguagens com os quais tive contato: HTML, CSS, 
							Javascript, React.js (Jest, Mock, Axios, Hooks, Router, etc.), Next.js, Styled Components, 
							Typescript, Bootstrap, MaterialUI, Jira, Scrum, Toggl, Slack, Figma, Canva, Gimp, Git, Github, 
							GitLab, Sequelize, Prisma.
						</p>
						}
                    />
                    <Card 
                        position="Operador de Logística"
                        company="Fortbras Autopeças"
                        time="07/2021 - 02/2022"
                        description={
							<p>
							· Responsável pela realização de operações no caixa
							<br></br>
							· Responsável pelo sistemas da empresa
							<br></br>
							· Responsável por cuidar da parte de expedição
							<br></br>
							· Atendimento ao cliente
							<br></br>
							</p>
							}
                    />
                </div>
            </div>
        </>
    );
}