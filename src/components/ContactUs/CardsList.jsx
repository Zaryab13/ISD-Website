import {styles} from '../../styles';
import {ContactInfo } from "../../constants/ContactInfo";
import InfoCard from "./InfoCard";

const CardsList = () => {
  console.log(ContactInfo)
  return (
    <section className={`${styles.paddingX} pt-20 flex justify-center gap-6`}>
      {ContactInfo.map((info) => (
        <InfoCard
          key={info.title}
          title={info.title}
          description={info.description}
          icon={info.icon}
        />
      ))}
    </section>
  );
};

export default CardsList;
