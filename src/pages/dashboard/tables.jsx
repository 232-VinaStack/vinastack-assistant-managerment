import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Button,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import { Link } from "react-router-dom";
import { format, isBefore, isSameDay } from 'date-fns';

const listImg = ["/img/team-1.jpeg", "/img/team-2.jpeg", "/img/team-3.jpeg", "/img/team-4.jpeg", "/img/bruce-mars.jpeg",]
function getRandomNumber() {
  return Math.floor(Math.random() * 5); // Sinh số ngẫu nhiên từ 0 đến 4
}


export function Tables() {

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader floated={false} variant="gradient" color="gray" className="mb-8 p-6 flex justify-between items-center">
          <Typography variant="h6" color="white">
            List Appointment
          </Typography>
          <Link to={"/dashboard/create-appointment"}>
            <Button variant="outlined" size="sm" color="white">
              Add appointment
            </Button>
          </Link>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["id", "patient","doctor", "symptoms", "status", "date", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ id = "", user_name = "", user_phone = "", doctor_id, clinic, symptoms, online = true, start_time = "" }, key) => {
                  const className = `py-3 px-5 ${key === authorsTableData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                    }`;
                  const img = listImg[getRandomNumber()];

                  const startTime = new Date(start_time);
                  const today = new Date();
                  
                  const isBeforeToday = isBefore(startTime, today);
                  const isToday = isSameDay(startTime, today);
                  
                  const statusColor = isBeforeToday ? "blue-gray" : isToday ? "green" : "orange";
                  const status = isBeforeToday ? "Done" : isToday ? "Now" : "Incoming";
                  
                  return (
                    <tr key={name}>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {id}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={img} alt={name} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {user_name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {user_phone}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          #{doctor_id.id}: {doctor_id.name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {clinic}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                        {symptoms?.map((item, index) => `${item?.name}${index != symptoms.length - 1 ? ', ' : ''}`)}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={statusColor}
                          value={status}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {start_time}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          Edit
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

    </div>
  );
}

export default Tables;
