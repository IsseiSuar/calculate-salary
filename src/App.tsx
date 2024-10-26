import { useState } from 'react'

import './App.css'
import { Box, Button, InputAdornment } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { CustomTextField } from './components/custom-text-field';
import { DatesArray, MultipleDates } from './components/multiselect-calendar';
import CalculateIcon from '@mui/icons-material/Calculate';

function App() {
  const [weeklyHours, setWeeklyHours] = useState(0);
  const [amount, setAmount] = useState(0);
  const [dailyHours, setDailyHours] = useState(0)
  const [lateDays, setLateDays] = useState<DatesArray[]>([]);
  const [total, setTotal] = useState(0);

  const monthlyHours = weeklyHours * 4.33
  const hourPrice = amount / monthlyHours;
  const disabledButton = weeklyHours !== 0 && amount !== 0 && dailyHours !== 0;

  const calculateSalary = () => {
    const weeklySalary = weeklyHours * hourPrice;
    const extra = extraHours();
    const late = lateEntriesValue();
    ;
    setTotal(weeklySalary + extra - late)

  }

  const extraHours = () => {
    if (weeklyHours > 45) {
      const difference = weeklyHours - 45
      return hourPrice * 1.5 * difference
    }
    else return 0
  }

  const lateEntriesValue = () => {
    if (lateDays.length > 0) {
      return lateDays.length * (hourPrice / 2)
    } else {
      return 0
    }
  }

  return (
    <Box className={"container center-items"}>
      <Box className={"form"}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Box className={"title-container"}>
              <h2>Calcula tu <b>salario</b></h2>
            </Box>
          </Grid>
          <Grid size={9}>
            <CustomTextField
              label="Salario mensual"
              fullWidth

              onChange={(e) => setAmount(+e.target.value)}
              type='number'
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <b>Q</b>
                    </InputAdornment>
                  )
                }
              }}
              id="custom-css-outlined-input" />
          </Grid>
          <Grid size={3}>
            <CustomTextField
              onChange={(e) => setWeeklyHours(+e.target.value)}
              inputMode='numeric'
              type='number'
              label="Horas semanales"
            />
          </Grid>
          <Grid size={6}>
            <CustomTextField
              onChange={(e) => setDailyHours(+e.target.value)}
              inputMode='numeric'
              type='number'
              label="Horas diarias"
            />
          </Grid>
          <Grid size={12}>
            <MultipleDates getDates={setLateDays}></MultipleDates>
          </Grid>
          <Grid size={12} className={"center-items"} marginTop={10}>
            <Button
              onClick={calculateSalary}
              disabled={!disabledButton}
              variant="outlined"
              sx={{ backgroundColor: !disabledButton ? "#604760" : "#E1B5FF", width: "60%" }}
              startIcon={<CalculateIcon sx={{ width: 45, height: 45, color: "#090F1D" }} />}>
              <h3>Calcular</h3>
            </Button>
          </Grid>
          <Grid size={12}>
            <h2>Su salario mensual es de: <b>Q. {total.toFixed(2)}</b></h2>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default App

//https://www.omnicalculator.com/es/finanzas/salario-por-hora
