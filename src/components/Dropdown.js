import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';


const Dropdown = () => {
    const listMins = [20, 30, 10, 15, 18, 12, 34, 54, 32, 22, 12, 22, 19]
    const [mins, setMins] = useState(null)
    const [selectData, setSelectData] = React.useState('');
    // console.log("age", age);
    const discription = [
        "Reviewed patients medcial records",
        "Refilled patients (name of medication &  dose) to (pharmacy name).",
        "Ordered patients (name of labs)",
        "Free Text",
        "Ordered patient’s (name of imaging)",
        "Ordered patient’s (name of imaging)",
        "Referral sent on (Date of Service) to (Name of specialist)",
        "Scheduled patient for an appointment  for (input reason)",
        "Reconciled (name of medication), (what  was done)",
        "The (medication) was added to the  patient’s current medication list",
        "Refilled patients (name of medication &  dose) to (pharmacy name).",
        "Ordered patients (name of labs)",
        "Free Text",
    ]

    const allData = [
        { label: "Reviewed patient's chart" },
        { label: "Medication Refill" },
        { label: "Labs Ordered" },
        { label: "Vitals Reviewed - Normal (RPM)" },
        { label: "Vitals Reviewed - Abnormal (RPM)" },
        { label: "Imaging Ordered" },
        { label: "Referral Coordination" },
        { label: "Appt. (any type) Scheduled" },
        { label: "Medication, Reconciliation/Clarification/Prior  Authorization" },
        { label: "Appointment Reminders" },
        { label: "Lab/Imaging Results Reviewed " },
        { label: "Email/Mailing/or leaving documents at  front desk for Patient" },
        // { value: "Post Visit Follow Up Call/Text" },
        // { value: "Voicemail Left for Patient" },
        // { value: "Enrollment Process (Admin process,  follow-up introduction calls/message)" },
        // { value: "Daily/Weekly/Monthly Check-Ins" },
        // { value: "Consult Notes Retrieved" },
        // { value: "Daily/Weekly/Monthly Check-Ins" },
        // { value: "Consult Notes Retrieved" },
        // { value: "Consult notes Reviewed " },
        // { value: "Updated Problem List in EMR" },
        // { value: "Updated Medication List in EMR " }
    ]
    const handleChange = (event) => {
        console.log("event", event.target.key);
        setSelectData(event.target.value);
        allData.map((item, inde) => {
            if (item.label === event.target.value) {
                setMins(inde)
            }

        })

    };
    return (
        <div className='mt-5 ml-5'>
            <FormControl variant="filled" sx={{ mb: 4, minWidth: 400 }}>
                <InputLabel id="demo-simple-select-filled-label">Select Data</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={selectData}
                    onChange={handleChange}
                >
                    {allData.map((itm, ind) => {
                        console.log("ind", ind);
                        return (
                            <MenuItem key={ind} value={itm.label}>{itm.label}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <div className='mb-5'>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>Mintutes:</p>
                <input className='pl-2 p-1' style={{ width: "35vw" }} type="text" lable="mins" placeholder="mins" value={listMins[mins]}></input>
            </div>
            <div>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>Documentation:</p>
                <input className='pt-0 pl-3 pb-4' style={{ width: "65vw", height:"10vh" }} type="text" lable="Description" placeholder="Description" value={discription[mins]}></input>
            </div>
        </div>
    )
}

export default Dropdown