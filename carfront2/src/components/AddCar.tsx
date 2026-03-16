import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material"
import { Car } from "../types"
import { useState } from "react"
import { addCar } from "../api/carapi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CarDialogContent from "./CarDialogContent";

export default function AddCar() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(['cars']);
    },
    onError: (err) => console.log(err),
  });




  const [ open, setOpen ] = useState(false);
  const [ car, setCar ] = useState<Car>({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0
  });
  
  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setCar({...car, [event.target.name]: event.target.value})
  }

  const handleSave = () => {
    mutate(car);    // carapi에 있는 addCar() 함수에 해당
    setCar({
    brand: '',
    model: '',
    color: '',
    registrationNumber: '',
    modelYear: 0,
    price: 0
    })
    handleClickClose();
  }


  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>New Car</Button>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle>New Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange} />
        <DialogActions>
          <Button onClick={handleClickClose} color="error">취소</Button>
          <Button onClick={handleSave} variant="contained" color="primary">저장</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}