function UserCard({ userData }) {
  const { firstName, lastName, email, company } = userData;
  return (
    <div
      className="bg-white min-w-[300px] mx-[20px] hover:bg-gray-400 hover:scale-105 
        transition-transform duration-300 transform border-[4px] rounded-[12px] my-[30px] cursor-pointer text-blue-900
        hover:text-blue-950"
    >
      <div className="p-[20px]">
        <div className="flex">
          <div className="font-bold">Name:</div> {firstName} {lastName}
        </div>
        <div className="flex">
          <div className="font-bold">Email:</div> {email}
        </div>
        <div className="flex">
          <div className="font-bold">Company Name:</div>{" "}
          {company.name.length > 14
            ? company.name.substring(0, 14)
            : company.name}
        </div>
        <div className="flex">
          <div className="font-bold">Department:</div>{" "}
          {company.department.length > 14
            ? company.department.substring(0, 14) + "..."
            : company.department}
        </div>
      </div>
    </div>
  );
}
export default UserCard;
