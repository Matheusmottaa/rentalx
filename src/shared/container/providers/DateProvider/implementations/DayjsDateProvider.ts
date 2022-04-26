import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateProvider } from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  compareInHours(startDate: string, endDate: Date): number {
    return dayjs(endDate).diff(dayjs(startDate), "hours");
  }
  generateDateAndConvertToLocalTime(): string {
    return dayjs.utc().local().format();
  }
}

export { DayjsDateProvider };
