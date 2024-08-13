import { AccountFilter } from "./account-filter";

export const Filter = () => {
  return (
    <div className="flex flex-col lg:flow-row items-start gap-y-2 lg:gap-y-0 lg:gap-x-2">
      <AccountFilter />
    </div>
  );
};
