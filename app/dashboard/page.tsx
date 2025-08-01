import OverviewCards from "../components/Overviewcards";
import ChartsSection from "../components/ChartsSection";
import DashboardWidget from "../components/DashboardWidget";
import DataTable from "../components/DataTable";

export default function dashboard() {
  return (
    <main className="px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        
      </h1>

      <OverviewCards />
      <ChartsSection />
      <DashboardWidget />
      <DataTable />
    </main>
  );
}
