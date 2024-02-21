function UserInfo({ data }) {
  if (!data) {
    return <div>Data is undefined</div>;
  }
  const { firstName, image, lastName, age, email, address, bank, company } =
    data;
  return (
    <div className="p-[50px] flex">
      <div className="h-[100%] border-r-[4px] border-r-black w-[40%] flex flex-wrap justify-center">
        <div>
          <img
            className="w-[300px] h-[300px] rounded-[50%] border-[4px] border-black"
            src={image}
            alt=""
          />
        </div>
        <div className="w-[100%]">
          <div className="flex justify-center text-[30px] font-bold">
            {firstName} {lastName}
          </div>
        </div>
        <div className="w-[100%]">
          <div className="flex justify-center text-[30px]">Age: {age}</div>
        </div>
        <div className="w-[100%]">
          <div className="flex justify-center text-[30px]">Email: {email}</div>
        </div>
        <div className="w-[100%]">
          <div className="flex justify-center items-center text-[30px]">
            <div>
              Address: {address.address} {address.city}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[60%] px-[20px] text-[35px]">
        <div className="border-[4px] border-black rounded-[24px]">
          <div className="p-[10px]">
            <div className="font-bold">Bank Info</div>
            <div>
              <div>Card Number: {bank.cardNumber}</div>
              <div>Card Type: {bank.cardType}</div>
              <div>Card Expire: {bank.cardExpire}</div>
            </div>
          </div>
        </div>
        <div className="border-[4px] border-black rounded-[24px] mt-[10px]">
          <div className="p-[10px]">
            <div className="font-bold">Company Info</div>
            <div>
              <div>Company Name: {company.name}</div>
              <div>
                Company Address: {company.address.address}{" "}
                {company.address.city}
              </div>
              <div>Department: {company.department}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserInfo;
