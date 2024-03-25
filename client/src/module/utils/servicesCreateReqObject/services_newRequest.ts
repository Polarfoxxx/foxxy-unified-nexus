import type { Type_for_newEventData } from "../../CalendarModule/Components/NewEvent/type";

class NewRequest {
  startDate: string;
  endDate: string;
  nameEvent: string;
  commentEvent: string;

  constructor(startDate?: string, endDate?: string, nameEvent?: string, commentEvent?: string) {
    this.startDate = startDate || '';
    this.endDate = endDate || '';
    this.nameEvent = nameEvent || '';
    this.commentEvent = commentEvent || '';
  }

  create(): Type_for_newEventData | undefined {
    if (this.startDate && this.endDate && this.nameEvent && this.commentEvent) {
      const RET_DATA = {
        event: {
          startDate: this.startDate,
          endDate: this.endDate,
          nameEvent: this.nameEvent,
          commentEvent: this.commentEvent
        }
      };
      return RET_DATA;
    }
    return undefined;
  }
}

export default NewRequest;
