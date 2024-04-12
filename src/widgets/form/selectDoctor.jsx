import { Select, Option } from "@material-tailwind/react";
import { listDoctor as listDoctorData } from "../../data/doctor-data";
import { useEffect, useState } from "react";
import axios from "axios";

export function SelectDoctor({setDoctor}) {
  const [listDoctor, setListDoctor] = useState(listDoctorData)
  useEffect(() => {
    // Hàm fetchApiData sử dụng Axios để gửi yêu cầu GET đến API
    const fetchApiData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/doctor');
        if (response?.data) {
          setListDoctor(response?.data);
        }
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Gọi hàm fetchApiData khi component được mount
    fetchApiData();
  }, []); // [] đảm bảo useEffect chỉ chạy một lần khi component được mount
  return (
    <div className="">
      <Select label="Select a Doctor" onChange={(value) => {
        setDoctor(value)
      }}>
        {listDoctor.map(item => (
          <Option key={item.id} value={item.id}>{item.name}</Option>
        ))}
      </Select>
    </div>
  );
}