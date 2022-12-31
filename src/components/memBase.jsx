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
const MEMES = [
    {
        title: "Mem1",
        upvotes: 6,
        downvotes: 0,
        img: "mem1.jpeg",
    },
    {
        title: "Mem2",
        upvotes: 3,
        downvotes: 0,
        img: "mem2.jpeg",
    },
    {
        title: "Mem3",
        upvotes: 4,
        downvotes: 0,
        img: "mem3.jpeg",
    },
    {
        title: "Mem4",
        upvotes: 5,
        downvotes: 0,
        img: "mem4.jpeg",
    },
    {
        title: "Mem5",
        upvotes: 0,
        downvotes: 0,
        img: "mem5.jpeg",
    },
    {
        title: "Mem6",
        upvotes: 14,
        downvotes: 2,
        img: "mem6.jpeg",
    },
    {
        title: "Mem7",
        upvotes: 1,
        downvotes: 25,
        img: "mem7.jpeg",
    },
    {
        title: "Mem8",
        upvotes: 18,
        downvotes: 2,
        img: "mem8.jpeg",
    },
    {
        title: "Mem9",
        upvotes: 1,
        downvotes: 10,
        img: "mem9.jpeg",
    },
    {
        title: "Mem10",
        upvotes: 29,
        downvotes: 7,
        img: "mem10.jpeg",
    },
];

export const Memlist = (props) => {
    return (
        <div>

            {MEMES.filter(
                mems => (mems.upvotes - mems.downvotes > 5 && props.page === "hot")
                    || (mems.upvotes - mems.downvotes <= 5 && props.page === "regular")
            ).map((mem) => {
                return (
                    <div>
                        <img
                            src={process.env.PUBLIC_URL + '/' + mem.img} alt="logo"
                            style={{ ...TileStyle, ...ImageStyle, ...LoaderStyle }}
                        />
                        <div>
                            <button onClick={''}>+ {mem.upvotes}</button>
                            <button onClick={''}>- {mem.downvotes}</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}



