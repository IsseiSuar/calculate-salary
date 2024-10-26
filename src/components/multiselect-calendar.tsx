import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid2';
import { IconButton, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DateValidationError, PickerChangeHandlerContext } from '@mui/x-date-pickers';

export interface IMultipleDate {
    getDates: (dates: DatesArray[]) => void;
}
export interface DatesArray {
    date: dayjs.Dayjs,
    index: number
}

const StyledDatePicker = styled(DatePicker)({
    '& label': {
        color: '#504C66',
    },
    '& label.Mui-focused': {
        color: '#FFF',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#504C66',
        },
        '&:hover fieldset': {
            borderColor: '#504C66',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#504C66',
        },
        '& .MuiInputBase-input': {
            color: '#FFF',
        },
    },
    width: "80%"
});

export interface IDatePicker {
    onSelect: (value: dayjs.Dayjs | null, context: PickerChangeHandlerContext<DateValidationError>) => void
}

export const BasicDatePicker: React.FC<IDatePicker> = ({ onSelect }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} sx={{ color: "#fff" }}>
                <StyledDatePicker

                    onChange={onSelect}
                    slotProps={{
                        openPickerButton: {
                            sx: { color: "#E1B5FF" }
                        }

                    }} label="Fecha de ingreso tarde" />
            </DemoContainer>
        </LocalizationProvider>
    );
}


export const MultipleDates: React.FC<IMultipleDate> = ({ getDates }) => {
    const [counter, setCounter] = useState(1);
    const [days, setDays] = useState<DatesArray[]>([]);


    const handleSelectDate = (value: dayjs.Dayjs | null, index: number) => {
        if (value) {
            let newDays = [...days]
            const alreadyExists = days.findIndex(day => day.index === index)
            if (alreadyExists && alreadyExists !== -1) {
                newDays[alreadyExists].date = value
            } else {
                newDays = [...days, { date: value, index: index }]
            }
            setDays(newDays)
            getDates(newDays)
        }
    }

    const handleRemoveDate = (index: number) => {
        setCounter(counter - 1);
        const copyDays = [...days]
        copyDays.splice(index, 1);
        setDays(copyDays);
        getDates(copyDays);
    }
    return (
        Array.from({ length: counter }, (_, i) => i).map((item, i) => (
            <Grid key={item} container spacing={1} justifyContent={"center"} alignItems={"center"}>
                <Grid size={8}>
                    <BasicDatePicker onSelect={(value) => handleSelectDate(value, i)} />
                </Grid>
                <Grid size={2}>
                    <IconButton aria-label="add" onClick={() => setCounter(counter + 1)}>
                        <AddCircleOutlineIcon sx={{ color: "#E1B5FF" }} />
                    </IconButton>
                </Grid>
                <Grid size={2}>
                    {i !== 0 &&
                        <IconButton aria-label="delete" onClick={() => handleRemoveDate(i)}>
                            <DeleteIcon sx={{ color: "#E1B5FF" }} />
                        </IconButton>
                    }
                </Grid>
            </Grid>
        ))
    )
}   