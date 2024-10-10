import { skills } from "../../data/constants";
import {
  Container,
  Desc,
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillsContainer,
  SkillTitle,
  Title,
  Wrapper,
} from "./styled";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my recent skills</Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
