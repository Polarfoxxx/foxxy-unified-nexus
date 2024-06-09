import { Type_for_dayAndHoliday } from "../types";

function findNextHoliday(holidays: Type_for_dayAndHoliday[]): Type_for_dayAndHoliday | null {
    const today = new Date();

    if(holidays.length > 0) {
    // Preveďte dátumy sviatkov na objekty typu Date
    const holidayDates = holidays.map(holiday => ({
        ...holiday,
        date: new Date(holiday.date)
    }));

    // Filtrujte sviatky, ktoré sú po dnešnom dni
    const upcomingHolidays = holidayDates.filter(holiday => holiday.date > today);

    // Ak neexistujú žiadne sviatky po dnešnom dni, vráťte null
    if (upcomingHolidays.length === 0) {
        return null;
    }

    // Nájdite najbližší sviatok
    const nextHoliday = upcomingHolidays.reduce((closest, current) => {
        return current.date < closest.date ? current : closest;
    });

    return nextHoliday;
}
return null

}
export default findNextHoliday;