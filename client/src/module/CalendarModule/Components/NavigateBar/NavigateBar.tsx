

function NavigateBar(): JSX.Element {

    const rrr = ["A", "B", "C"]

    return (
        <div className=" w-full h-auto p-2 flex flex-col justify-center items-center gap-4">
            {
                rrr.map((item, key) =>
                    <div
                    className=" w-[40px] h-[40px] bg-black text-white rounded-[50%] flex items-center justify-center"
                        key={key}>
                        <h1> {item}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default NavigateBar;