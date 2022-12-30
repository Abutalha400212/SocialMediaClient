import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import {  FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { toast } from "react-hot-toast";
import { AxiosInstance } from "../../../utilis/AxiosInstance";
import { ModalBox } from "../../Styled/Style";
import { AuthContext } from "../../Auth/Context/AuthProvider";
export default function ProfileModal({profile}) {
  console.log(profile)
  const { register, handleSubmit, reset } = useForm();
  const { open, setOpen, user } = useContext(AuthContext);
  const handleClose = () => setOpen(false);
  const handleProfileUpdate = (data) => {
    AxiosInstance.put(`users/${user?.email}`, { data: data }).then(function (
      response
    ) {
      if (response.data.acknowledged) {
        toast.success("Profiel updated");
        reset();
      }
    });
  };
  return (
    <Box sx={{
    
      }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox sx={{
            backgroundColor: "background.paper",
        }}>
          <Typography sx={{fontWeight:600}} color="primary" align="center">
            Update Your Profile
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleProfileUpdate)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              defaultValue={user?.displayName}
              margin="normal"
              required
              fullWidth
              id="text"
              label="Name"
              name="name"
              {...register("name")}
            />
            <TextField
            disabled
              defaultValue={user?.email}
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              {...register("email")}
            />
            <TextField
            defaultValue={profile?.phone}
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone"
              type="tel"
              id="phone"
              {...register("phone")}
            />
            <TextField
              margin="normal"
              defaultValue={profile?.university}
              required
              fullWidth
              name="university"
              label="University/College"
              type="text"
              id="university"
              {...register("university")}
            />
            <TextField
            defaultValue={profile?.school}
              margin="normal"
              required
              fullWidth
              name="school"
              label="School"
              type="text"
              id="school"
              {...register("school")}
            />
            <TextField
            defaultValue={profile?.address}
              margin="normal"
              required
              fullWidth
              name="address"
              label="Address"
              type="text"
              id="address"
              {...register("address")}
            />
            <FormControl margin="normal" fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
              defaultValue={profile?.gender}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Gender"
                {...register('gender')}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel id="demo-simple-select-label">Married Status</InputLabel>
              <Select
              defaultValue={profile?.marriedStatus}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Married Status"
                {...register('marriedStatus')}
              >
                <MenuItem value={"Unmarried"}>Unmarried</MenuItem>
                <MenuItem value={"Married"}>Married</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{ mt: 3, mb: 2 }}
              type="submit"
              fullWidth
              variant="contained"
            >
              Update
            </Button>
          </Box>
        </ModalBox>
      </Modal>
    </Box>
  );
}
