import MainLayout from '../MainLayout';
import OurMission from "./OurMission";
import TeamMembers from "./TeamMembers";

const About = () => {
  return (
    <MainLayout padding = "True">
      <OurMission />
      <TeamMembers />
    </MainLayout>
  );
};
export default About;
