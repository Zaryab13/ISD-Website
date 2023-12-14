import MembersList from "./MembersList";

const TeamMembers = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full my-4">
      <h2 className="text-3xl font-semibold mb-32">Team Member</h2>
      <MembersList/>
    </section>
  );
};

export default TeamMembers;
