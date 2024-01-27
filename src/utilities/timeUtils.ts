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
