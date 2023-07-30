import {
  totalDaysHolding,
  minScreenWidth,
  minScreenHeight,
} from "@/common/constants";

import moment from "moment/dist/moment";
import ru from "moment/dist/locale/ru";
moment.updateLocale("ru", ru);

export const isMobileOrSmallScreen =
  /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
    navigator.userAgent
  ) ||
  window.screen.width <= minScreenWidth ||
  window.screen.height <= minScreenHeight;

// data functions
export const currentDate = moment();

export const normalizeData = (date) => {
  return moment(date).format("D MMM YYYY");
};

export const isHoldingDateExpired = (date) => {
  let now = moment();
  let startHoldingDate = moment(date);
  return now.diff(startHoldingDate, "days") > totalDaysHolding ? true : false;
};

export const deadlineDate = (date = new Date()) => {
  let startHoldingDate = moment(date);
  return startHoldingDate.add(totalDaysHolding, "days").format("D MMM YYYY");
};
