import { useNavigate } from "react-router-dom";
import "./NavigateBackButton.css";

function NavigateBackButton() {
  let navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="button">
      Go Back
    </button>
  );
}

export default NavigateBackButton;
