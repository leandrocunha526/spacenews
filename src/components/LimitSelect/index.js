import { Select } from "./style";

export default function LimitSelect({items, setItems}){
    return (
    <Select
        name="limit"
        id="limit"
        value={items}
        onChange={(event) =>
          setItems(Number(event.target.value))}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </Select>
    )
}