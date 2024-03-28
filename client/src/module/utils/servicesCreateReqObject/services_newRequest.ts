import type { Type_for_newEventFor_API, } from "../../CalendarModule";
import { services_changeStringToDateFormat } from "../../CalendarModule";


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
  };

  create(): Type_for_newEventFor_API | undefined {
    if (this.startDate && this.endDate && this.nameEvent && this.commentEvent) {
      const RET_DATA = {
        event: {
          startDate: services_changeStringToDateFormat(this.startDate),
          endDate: services_changeStringToDateFormat(this.endDate),
          nameEvent: this.nameEvent,
          commentEvent: this.commentEvent
        }
      };
      return RET_DATA;
    };
    return undefined;
  };
};

export default NewRequest;
