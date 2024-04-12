import { Select, Option } from "@material-tailwind/react";
import listClinic from "./../../data/department.json"
export function SelectClinic({ setClinic }) {

  return (
    <div className="">
      <Select
        shrink
        size="lg"
        label="Select a Clinic" onChange={(value) => {
          setClinic(value);
        }}>
        {listClinic.map(clinic => {
          return (<Option value={clinic} key={clinic.id}>{clinic.department}</Option>)
        })}
      </Select>
    </div>
  );
}