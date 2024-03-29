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

  validate(): boolean {
    const VALIDATE_DATE = services_changeStringToDateFormat(this.startDate) < services_changeStringToDateFormat(this.endDate);
    const VALIDATE_SET_EVENT = services_changeStringToDateFormat(this.startDate) > new Date();
    const VALIDATE_STRING = this.nameEvent.length > 3 && this.commentEvent.length > 3;
    
    if (VALIDATE_DATE && VALIDATE_STRING && VALIDATE_SET_EVENT) {
      return true
    } else
      return false
  };

  create(): Type_for_newEventFor_API | string {
    if (this.startDate && this.endDate && this.nameEvent && this.commentEvent) {
      if (this.validate()) {
        const RET_DATA = {
          event: {
            start: services_changeStringToDateFormat(this.startDate),
            end: services_changeStringToDateFormat(this.endDate),
            title: this.nameEvent,
            comment: this.commentEvent
          }
        };
        return RET_DATA;
      };
      return "The error the validate data";
    };
    return "The"
  }
};

export default NewRequest;
