import React from 'react'
import Card from './card';

const CardList = () => {
      const dummyData = [
        {
        img: <span>BK</span>,
        name: "Bibek Kaka",
        address: "Dhaijan Chowk, Mechinagar",
        bloodGroup: "A+",
        },
        {
        img: <span>PR</span>,
        name: "Prakash Rai",
        address: "Birtamod-3, Jhapa",
        bloodGroup: "O-",
        },
        {
        img: <span>PR</span>,
        name: "Prakash Rai",
        address: "Birtamod-3, Jhapa",
        bloodGroup: "O-",
        },
        {
        img: <span>PR</span>,
        name: "Prakash Rai",
        address: "Birtamod-3, Jhapa",
        bloodGroup: "O-",
        },
        {
        img: <span>ST</span>,
        name: "Santoshi Thapa",
        address: "Damak-5, Jhapa",
        bloodGroup: "B+",
        },
        {
        img: <span>NK</span>,
        name: "Nirajan Kharel",
        address: "Kakarvitta, Mechinagar",
        bloodGroup: "AB+",
        },
    ];
  return (
    <div>
        <div className="flex flex-col gap-4 items-center">
            {dummyData.map((data, index) => (
                <Card
                key={index}
                img={data.img}
                name={data.name}
                address={data.address}
                bloodGroup={data.bloodGroup}
                />
            ))}
        </div>
    </div>
  )
}

export default CardList