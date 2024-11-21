import { useNavigate } from "react-router-dom";
import deleteOffer from "../../../public/images/icon-remove.svg";

const Component = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/job-details/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error deleting offer:", errorData);
        alert(`Failed to delete: ${errorData.error}`);
        return;
      }

      alert("Offer deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error during deletion:", error);
      alert("An error occurred while deleting the offer.");
    }
  };
  return (
    <button onClick={handleDelete}>
      <img
        src={deleteOffer}
        alt="Delete offer"
        className="bg-torchRed self-center rounded-full p-3"
      />
    </button>
  );
};

export default Component;
