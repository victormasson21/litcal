import { MonthName, Day } from '@/app/types/types';
import { DatabaseService } from './database';
import { getDayPath, getNextMonth, getPreviousMonth } from './helpers';

export interface NavigationItem {
  url: string;
  text: string;
}

export interface Navigation {
  left: NavigationItem;
  center: NavigationItem;
  right: NavigationItem;
}

export class NavigationService {
  /**
   * Build navigation object for a specific day
   */
  static async buildNavigation(
    monthName: MonthName, 
    day: Day, 
    availableDays: Array<{day: number, month: string}>
  ): Promise<Navigation> {
    const navigation: Navigation = {
      left: { url: "", text: "Previous" },
      center: { url: `/${monthName}`, text: monthName },
      right: { url: "", text: "Next" },
    };

    // Find the current day's position
    const currentDayIndex = availableDays.findIndex((d) => d.day === day);

    // Determine previous day
    if (currentDayIndex > 0) {
      // Previous day is in the same month
      navigation.left.url = getDayPath(
        monthName,
        availableDays[currentDayIndex - 1].day
      );
    } else {
      // Need to check the previous month
      const prevMonthName = getPreviousMonth(monthName);
      const prevMonthLastDay = await DatabaseService.getLastQuoteDayOfMonth(prevMonthName);

      if (prevMonthLastDay) {
        navigation.left.url = getDayPath(prevMonthName, prevMonthLastDay.day);
      }
    }

    // Determine next day
    if (currentDayIndex < availableDays.length - 1) {
      // Next day is in the same month
      navigation.right.url = getDayPath(
        monthName,
        availableDays[currentDayIndex + 1].day
      );
    } else {
      // Need to check the next month
      const nextMonthName = getNextMonth(monthName);
      const nextMonthFirstDay = await DatabaseService.getFirstQuoteDayOfMonth(nextMonthName);

      if (nextMonthFirstDay) {
        navigation.right.url = getDayPath(nextMonthName, nextMonthFirstDay.day);
      }
    }

    return navigation;
  }
}
