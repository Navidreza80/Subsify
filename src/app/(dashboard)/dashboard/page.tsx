import Calendar from "@/assets/images/icons/dashboard-calendar.png";
import EditIcon from "@/assets/images/icons/editing.png";
import HappyFace from "@/assets/images/icons/happy-face.png";
import LinkIcon from "@/assets/images/icons/link.png";
import DashboardCard from "../_components/DashboardCard";
import PieChart from "../_components/PieChart";
import DashboardTable from "../_components/DashboardTable";
import Header from "../_components/Header";

const items = [
  {
    name: "Netflix Premium",
    price: "49",
    type: "Monthly",
    category: "entertainment",
    payment: "credit card",
    status: "active",
    renewalDate: "2025-09-08",
  },
  {
    name: "Netflix Premium",
    price: "49",
    type: "Monthly",
    category: "entertainment",
    payment: "credit card",
    status: "active",
    renewalDate: "2025-09-08",
  },
  {
    name: "Netflix Premium",
    price: "49",
    type: "Monthly",
    category: "entertainment",
    payment: "credit card",
    status: "active",
    renewalDate: "2025-09-08",
  },
];

const DashboardCards = [
  {
    id: 1,
    image: HappyFace.src,
    title: "Navidreza",
    subtitle: "navidrezaabbaszadeh89@gmail.com",
    icon: EditIcon.src,
    href: "/dashboard/profile",
  },
  {
    id: 2,
    image: Calendar.src,
    title: "Upcoming Events",
    subtitle: "Check your schedule",
    icon: LinkIcon.src,
    href: "/dashboard/events",
  },
];

export default function DashboardPage() {
  return (
    <>
      <Header />
      <div className="flex justify-between w-full mt-6 flex-wrap gap-y-4">
        <PieChart />
        {DashboardCards.map((card) => (
          <DashboardCard
            href={card.href}
            key={card.id}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            icon={card.icon}
          />
        ))}
        <DashboardTable
          title="Subscriptions"
          contentItems={items}
          headerItems={[
            "name",
            "price",
            "type",
            "category",
            "payment",
            "status",
            "renewal date",
            "",
          ]}
        />
      </div>
    </>
  );
}
