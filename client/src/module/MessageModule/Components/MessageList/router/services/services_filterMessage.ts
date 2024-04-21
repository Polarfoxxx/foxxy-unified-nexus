import { Type_for_newMesssageFrom_DB } from "../../types";

export type Type_for_servicesFilterMessage<T> = {
    TYPE_FILTER: string,
    MESSAGE_DATA: T[]
}

function services_filterMessage<T extends Type_for_newMesssageFrom_DB>(props: Type_for_servicesFilterMessage<T>): T[] {
    const { TYPE_FILTER, MESSAGE_DATA } = props;

    const FIL_ALL_DATA = MESSAGE_DATA.filter((item) => item.title_message === TYPE_FILTER)
    return FIL_ALL_DATA;
}

export default services_filterMessage;
