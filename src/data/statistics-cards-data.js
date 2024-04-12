import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import authorsTableData from "./authors-table-data";

import { isBefore, isSameDay } from 'date-fns';

const countAppointment = () => {
  let history = 0, now = 0, incoming = 0;
  const today = new Date();

  authorsTableData.map(item => {
    const startTime = new Date(item.start_time);
    if (isSameDay(startTime, today)) {
      now++;
    } else if (isBefore(startTime, today)) {
      history++;
    } else {
      incoming++;
    }
  });

  return { history, now, incoming };
};


export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Total Appointment",
    value: authorsTableData.length,
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "green",
    icon: UsersIcon,
    title: "Today's Appointment",
    value: countAppointment().now,
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "orange",
    icon: UserPlusIcon,
    title: "New Appointment",
    value: countAppointment().incoming,
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "blue-gray",
    icon: ChartBarIcon,
    title: "Appointment History",
    value: countAppointment().history,
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
