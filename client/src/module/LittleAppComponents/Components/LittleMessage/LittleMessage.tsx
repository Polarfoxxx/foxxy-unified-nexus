import { connect } from "react-redux";
import { Type_RootState } from "../../../../redux";
import { Type_for_newMesssageFrom_DB } from "../../../MessageModule";

export type Type_for_LittleMessage = {
    allMessages: Type_for_newMesssageFrom_DB[]
};

function LittleMessage({ allMessages }: Type_for_LittleMessage): JSX.Element {
    return (
        <div className=" w-[100%] h-[100%] flex items-center justify-center flex-col bg-slate-400">
            <div className=" w-[full] h-[full] flex items-center justify-center">
                <h1>
                    YOU MESSAGE
                </h1>
            </div>
            <div className=" w-[full] h-[full] flex items-center justify-center">
                <div>
                    <h3>
                        Your valid tasks:
                    </h3>
                </div>
                <div>
                    <h1>
                        {allMessages.filter(item => item.status === true).length}
                    </h1>
                </div>
            </div>
            <div className=" w-[full] h-[full] flex items-center justify-center">
                <div>
                    <h3>
                        Your invalid tasks:
                    </h3>
                </div>
                <div>
                    {allMessages.filter(item => item.status === false).length}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: Type_RootState) => ({
    allMessages: state.allMessages,
});

export default connect(mapStateToProps)(LittleMessage);
