import Header from "@/components/header";
import React from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-40">
        <div>{children}</div>
      </main>
    </>
  );
};

export default Dashboard;
