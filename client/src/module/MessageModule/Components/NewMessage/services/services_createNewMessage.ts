

class CreateMessageData {
    constructor(
        public user: string = "",
        public message: string = "",
        public createDate: string = "",
        public alertDate: string = ""
    ) {}
}

function createNewMessage(): CreateMessageData {
    return new CreateMessageData();
}

export default createNewMessage;
