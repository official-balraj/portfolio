import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import {
  Button,
  ButtonGroup,
  Container,
  Desc,
  Image,
  Label,
  Member,
  MemberImage,
  MemberName,
  Members,
  Tag,
  Tags,
  Title,
  Wrapper,
} from "./styled";
import { Dispatch, FC, SetStateAction } from "react";

type Props = {
  openModal: { state: boolean; project: Project | null };
  setOpenModal: Dispatch<
    SetStateAction<{
      state: boolean;
      project: null;
    }>
  >;
};

export type Project = {
  image: string;
  title: string;
  date: string;
  tags: [];
  description: string;
  member: Member[];
  github: string;
  webapp: string;
};

export type Member = {
  img: string;
  name: string;
  github: string;
  linkedin: string;
};

const ProjectDetails: FC<Props> = ({ openModal, setOpenModal }) => {
  const project: Project | null = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project?.date}</Date>
          <Tags>{project?.tags.map((tag) => <Tag>{tag}</Tag>)}</Tags>
          <Desc>{project?.description}</Desc>
          {project?.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member) => (
                  <Member>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a
                      href={member.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              View Code
            </Button>
            <Button href={project?.webapp} target="new">
              View Live App
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;
