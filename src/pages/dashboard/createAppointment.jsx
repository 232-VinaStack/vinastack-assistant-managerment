import { Button, ButtonGroup, Card, CardBody, CardFooter, Checkbox, Input, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import DatePickerCustom from '../../widgets/form/datePicker'
import { SelectDoctor } from '../../widgets/form/selectDoctor'
import SelectSymptoms from '../../widgets/form/selectSymptom'
import { SelectClinic } from '../../widgets/form/selectClinic'
import SelectHour from '../../widgets/form/selectHour'
import { format } from 'date-fns'

const CreateAppointment = () => {
  const [clinic, setClinic] = useState()
  const [symptoms, setSymptoms] = useState([])
  const [doctor, setDoctor] = useState()
  const [date, setDate] = useState();
  const [time, setTime] = useState()

  const onSubmit = (e) => {
    e.preventDefault();
    const symptomsValue = symptoms.map((symptom, index) => {
      return {
        id: symptom.index,
        name: symptom.name
      };
    })


    const formValue = {
      clinic,
      doctor_id: doctor,
      patient_name: e.target[0].value,
      patient_phone: e.target[1].value,
      room: e.target[3].value,
      appointment_date: format(date, 'PP'),
      start_time: time.hour,
      symptoms: symptomsValue
    }
    console.log(formValue);

  };
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <Typography variant="h5" color="blue-gray" className="mb-1">
            Create new appointment
          </Typography>
          <form onSubmit={onSubmit} className="mt-8 mb-2 ">
            <div className="flex flex-row gap-6">
              <div className="basis-1/2 mb-1 flex flex-col gap-6">
                <Input
                  size="lg"
                  placeholder="Nguyễn Văn A"
                  label='Patient Name'
                  shrink={true}

                />
              </div>
              <div className="basis-1/2 mb-1 flex flex-col gap-6">
                <Input
                  size="lg"
                  placeholder="0905 123 456"
                  shrink={true}
                  label="Patient Phone"
                />
              </div>
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <div className="flex flex-row gap-6 mt-5">
                <div className="basis-1/2 mb-1 flex flex-col gap-6">
                  <SelectClinic setClinic={setClinic} />
                </div>
                <div className="basis-1/2 mb-1 flex flex-col gap-6">
                  <Input
                    size="lg"
                    shrink={true}
                    placeholder="1"
                    label="Room"
                  />
                </div>
              </div>
              <SelectSymptoms clinic={clinic} setSymptoms={setSymptoms} symptoms={symptoms} />
              <SelectDoctor setDoctor={setDoctor} />
              <DatePickerCustom date={date} setDate={setDate} />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Pick a time
              </Typography>
              <SelectHour choose={time} setChoose={setTime} />

            </div>

            <Button variant="gradient" type='submit' className='mt-5'>
              Create new appointment
            </Button>
          </form>
        </CardBody>

      </Card>
    </>
  )
}

export default CreateAppointment