import React, { useState } from "react";

const TileStyle = {
    width: 450,
    height: 450,
};
const ImageStyle = {
    objectFit: "contain",
};
const LoaderStyle = {
    border: "1px solid black",
    display: "inline-block",
};

export const Memlist = (props) => {

    const MEMES = [
        {
            id: 1,
            title: "Mem1",
            upvotes: 6,
            downvotes: 0,
            img: "mem1.jpeg",
        },
        {
            id: 2,
            title: "Mem2",
            upvotes: 3,
            downvotes: 0,
            img: "mem2.jpeg",
        },
        {
            id: 3,
            title: "Mem3",
            upvotes: 4,
            downvotes: 0,
            img: "mem3.jpeg",
        },
        {
            id: 4,
            title: "Mem4",
            upvotes: 5,
            downvotes: 0,
            img: "mem4.jpeg",
        },
        {
            id: 5,
            title: "Mem5",
            upvotes: 0,
            downvotes: 0,
            img: "mem5.jpeg",
        },
        {
            id: 6,
            title: "Mem6",
            upvotes: 14,
            downvotes: 2,
            img: "mem6.jpeg",
        },
        {
            id: 7,
            title: "Mem7",
            upvotes: 1,
            downvotes: 25,
            img: "mem7.jpeg",
        },
        {
            id: 8,
            title: "Mem8",
            upvotes: 18,
            downvotes: 2,
            img: "mem8.jpeg",
        },
        {
            id: 9,
            title: "Mem9",
            upvotes: 1,
            downvotes: 10,
            img: "mem9.jpeg",
        },
        {
            id: 10,
            title: "Mem10",
            upvotes: 29,
            downvotes: 7,
            img: "mem10.jpeg",
        },
    ];
    const [Data, setData] = useState(MEMES);

    const incr = (id, type) => {
        const newData = [...Data];
        const index = newData.findIndex(item => item.id === id);
        console.log(index);
        if (type === "U") newData[index].upvotes = newData[index].upvotes + 1;
        else newData[index].downvotes = newData[index].downvotes + 1;
        setData(newData);
    };

    return (
        <div>

            {Data.filter(
                mems => 
                (mems.upvotes - mems.downvotes > 5 && props.page === "hot")
                    || 
                (mems.upvotes - mems.downvotes <= 5 && props.page === "regular")
            ).map((mem) => {
                return (
                    <div>
                        <img
                            src={process.env.PUBLIC_URL + '/' + mem.img} alt="logo"
                            style={{ ...TileStyle, ...ImageStyle, ...LoaderStyle }}
                        />
                        <div>
                            <button onClick={() => { incr(mem.id, "U") }}>
                                + {mem.upvotes}</button>
                            <button onClick={() => { incr(mem.id, "D") }}>
                                - {mem.downvotes}</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}




