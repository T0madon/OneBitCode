import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useStock from "../hooks/useStock";

DeleteButton.propTypes = {
  itemId: PropTypes.number.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default function DeleteButton({ itemId, itemName }) {
  const { deleteItem } = useStock();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja exluir ${itemName} ?`)) {
      deleteItem(itemId);
      navigate("/items");
    }
  };

  return (
    <button className="button is-danger is-small" onClick={handleDelete}>
      Excluir
    </button>
  );
}
