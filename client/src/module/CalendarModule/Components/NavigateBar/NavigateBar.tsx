

function NavigateBar(): JSX.Element {

    const rrr = ["A", "B", "C"]

    return (
        <div className=" w-full h-auto p-2 flex flex-col justify-center items-center">
            {
                rrr.map((item, key) =>
                    <div
                        key={key}>
                        <h1> {item}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default NavigateBar;