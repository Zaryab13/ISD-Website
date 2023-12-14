import {styles} from '../../styles'
import OurMission from "./OurMission";
import TeamMembers from "./TeamMembers";

const About = () => {
  return (
    <main className={`${styles.paddingX}`}>
      <OurMission />
      <TeamMembers />
    </main>
  );
};
export default About;
