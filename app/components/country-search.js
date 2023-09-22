import { MdMap } from "react-icons/md";

export const CountrySearch = () => {
  return (
    <div className="space-y-4">
      <input
        className="p-2 border rounded-md shadow-md w-80"
        type="text"
        placeholder="Country name..."
      />
      <div className="p-4 boredr rounded-md shadow-md space-y-4">
        <div className="flex justify-between items-center">
          <p>Official Name</p>
          <p>Capital</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Common Name</p>
          <p>Currency</p>
        </div>
        <p>
          <MdMap className="h-6 w-6 ml-auto" />
        </p>
      </div>
    </div>
  );
};
