import { Counter, ProfileCard } from "@/app/components";
import Todos from "@/app/components/todos";
import { CountrySearch } from "./components/country-search";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center space-y-72">
      <div className="flex space-x-72">
        <Counter />
        <Todos />
      </div>
      <div className="flex space-x-72">
        <ProfileCard />
        <CountrySearch />
      </div>
    </div>
  );
}
