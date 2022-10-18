export class DateHelper {
    static toHourAndMinutesString(): string {
        const date = new Date();
        const hours = this.toLeadingZeroString(date.getHours());
        const minutes = this.toLeadingZeroString(date.getMinutes());

        return `${hours}:${minutes}`;
    }

    private static toLeadingZeroString(value: number): string {
        if (value < 10) return `0${value}`;

        return value.toString();
    }
}