// CarDialogContent.tsx

import { Car } from "../types";
import { DialogContent, TextField, Stack } from "@mui/material";
type DialogFormProps = {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CarDialogContent({car, handleChange }: DialogFormProps) {
  return(
    <>
      <DialogContent>
<Stack spacing={2} sx={{ mt: 1 }}> 
        <TextField label="Brand" name="brand" value={car.brand} onChange={handleChange} variant="standard" />
        <TextField label="Model" name="model" value={car.model} onChange={handleChange} variant="standard" />
        <TextField label="Color" name="color" value={car.color} onChange={handleChange} variant="standard" />
        <TextField label="Registration Number" name="registrationNumber" value={car.registrationNumber} onChange={handleChange} variant="standard" />
        <TextField type="number" label="Model Year" name="modelYear" value={car.modelYear} onChange={handleChange} variant="standard" />
        <TextField type="number" label="Price" name="price" value={car.price} onChange={handleChange} variant="standard" />
      </Stack>
      </DialogContent>    
    </>
  )
}