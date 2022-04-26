interface IDateProvider {
  compareInHours(startDate: string, endDate: Date): number;
  generateDateAndConvertToLocalTime(): string;
}

export { IDateProvider };
