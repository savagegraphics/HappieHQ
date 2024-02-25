import React from "react";
import {Select, SelectItem} from "@nextui-org/react";
import {animals} from "./data";

export default function App() {
  const [value, setValue] = React.useState<string>("");

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Favorite Animal"
        variant="bordered"
        placeholder="Select an animal"
        selectedKeys={[value]}
        className="max-w-xs"
        onChange={handleSelectionChange}
      >
        {animals.map((animal) => (
          <SelectItem key={animal.value} value={animal.value}>
            {animal.label}
          </SelectItem>
        ))}
      </Select>
      <p className="text-small text-default-500">Selected: {value}</p>
    </div>
  );
}
