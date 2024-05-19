import "../../styles/EditScheduleForm.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const EditTimeForm = ({ onClose }) => {
  return (
    <div className="modal-container">
      <form>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker label="from" sx={{ width: "100%" }} />
          </DemoContainer>
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker label="to" sx={{ width: "100%" }} />
          </DemoContainer>
        </LocalizationProvider>
        <section>
          <button onClick={onClose} type="button">
            Cancel
          </button>
          <button className="btn-invert" type="button">
            Save
          </button>
        </section>
      </form>
    </div>
  );
};

export default EditTimeForm;
