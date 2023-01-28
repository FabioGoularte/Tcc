import Card from '../../components/Cards';
import SkillBar from '../../components/SkillBar';
import './style.css';

export default function Skills() {
  return (
    <div className="container">
      <h2>Courses</h2>
      <div className="line"></div>
      <ul className="courses-container">
        <li>
          <h4>Trabalho de Conclusão de Curso</h4>
          <h5>Etec João Baptista de Lima Figueiredo</h5>
          <p><span>Reforma da fiação elétrica e reorganização e montagem dos servidores rack de uma sala de aula
          da Etec João Baptista de Lima Figueiredo, em
          Mococa, para conclusão do TCC (aprovado em 2018); </span></p>
        </li>

        <li>
          <h4>Fundamentos de Python para Análise de Dados</h4>
          <h5>Data Science Academy</h5>
          <p><span>Os conceitos básicos e fundamentos da linguagem de programação Python. Através de uma 
          experiência prática, com exemplos, quizzes, exercícios e projetos, foi possível testar meus 
          conhecimentos e aplicá-los em projetos de Data Science.</span></p>
        </li>

        <li>
          <h4>Grupo de Estudos</h4>
          <h5>IF Sul de Minas;</h5>
          <p><span>Grupo de estudo onde aprendemos a programar com python, utilizar suas bibliotecas para a 
          mineração de dados e refinamento de dados brutos</span>16.5h</p>
        </li>
        
      </ul>
      <h2>My Skills</h2>
      <div className="line"></div>
      <h3>Hard Skills</h3>
      <div className="skills">
        <SkillBar
          name="ReactJS"
          size="80"
        />
        <SkillBar
          name="C"
          size="80"
        />
        <SkillBar
          name="HTML"
          size="80"
        />
        <SkillBar
          name="CSS"
          size="80"
        />
        <SkillBar
          name="Python"
          size="80"
        />
        <SkillBar
          name="JavaScript"
          size="80"
        />
        <SkillBar
          name="Java"
          size="70"
        />
        <SkillBar
          name="PHP"
          size="70"
        />
        <SkillBar
          name="Git/Github/Gitlab"
          size="70"
        />
        <SkillBar
          name="Laravel"
          size="70"
        />
        <SkillBar
          name="Redes"
          size="70"
        />
        <SkillBar
          name="Bootstrap"
          size="60"
        />
        <SkillBar
          name="Next.js"
          size="60"
        />
        <SkillBar
          name="Linux"
          size="60"
        />
        <SkillBar
          name="TypeScript"
          size="50"
        />
      </div>
      <br />
      <h3>Soft Skills</h3>
      <ul className="skills">
        <li >Empatia</li>
        <li>Resolução de problemas</li>
        <li>Ética</li>
        <li>Flexibilidade</li>
        <li>Criatividade</li>
        <li>Comunicação escrita</li>
        <li>Curiosidade</li>
        <li>Foco</li>
        <li>Resiliência</li>
        <li>Colaboração</li>
        <li>Liderança</li>
        <li>Organização</li>
        <li>Autonomia</li>
        <li>Auto gestão</li>
        <li>Negociação</li>

      </ul>
    </div>
  );
}