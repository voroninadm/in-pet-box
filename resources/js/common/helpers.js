import {totalDaysHolding} from "@/common/constants";

import {addDays, differenceInDays, format, formatDistanceToNow} from 'date-fns';
import {ru} from 'date-fns/locale/index';

export const normalizeData = (date) => {
  return format(new Date(date), "do MMMM yyyy", {locale: ru});
};

export const isHoldingDateExpired = (date) => {
  let now = new Date();
  let startHoldingDate = new Date(date);
  return differenceInDays(now, startHoldingDate) > totalDaysHolding;
};

export const deadlineDate = (date = new Date()) => {
   let deadline = addDays(new Date(date), totalDaysHolding);
    return format(deadline, "do MMMM yyyy", {locale: ru});
};

export const daysFromCreate = (date) => {
    return formatDistanceToNow(new Date(date), {addSuffix: true, locale: ru});
};
