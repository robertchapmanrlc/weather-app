export const calculateTimeOfDay = (): string => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else if (hour >= 18 && hour < 21) {
    return "evening";
  } else {
    return "night";
  }
};

export const getTimeOfDayGradientClass = (timeOfDay: string): string => {
  switch (timeOfDay) {
    case "morning":
      return "bg-gradient-morning";
    case 'afternoon':
      return "bg-gradient-afternoon";
    case "evening":
      return "bg-gradient-evening";
    case 'night':
      return "bg-gradient-night";
    default:
      return '';
  }
};

export function convertToAmPm(date: string) {

  let hours = Number(date.substring(11, 13));
  let period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return hours + ":00 " + period;
}
