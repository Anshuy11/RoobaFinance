import React from "react";

const CollectivableCard = () => {
  return (
    <div className="bg-[#b9a0ff] h-[200px] rounded-lg w-[150px] p-3">
      <div className="card-header flex items-center justify-between">
        <div className="bg-black p-1 px-2 rounded-xl text-[7px] text-white">
          2024
        </div>
        <div className="text-[10px] ">By Pablo</div>
      </div>
      <div className="card-body ">
        <div className="text-xs my-2 text-center font-medium">
          Collectible Name
        </div>
        <img
          className="w-full h-[130px] bg-cover "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF63g8BlJpwHJ-YQvMnOa70YWk-suGXzjA_A&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
};

export default CollectivableCard;
