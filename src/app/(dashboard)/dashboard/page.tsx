import Calendar from "@/assets/images/icons/dashboard-calendar.png";
import EditIcon from "@/assets/images/icons/editing.png";
import HappyFace from "@/assets/images/icons/happy-face.png";
import LinkIcon from "@/assets/images/icons/link.png";
import DashboardCard from "../_components/DashboardCard";
import PieChart from "../_components/PieChart";
import DashboardTable from "../_components/DashboardTable";

const items = [
  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },
  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },

  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },
  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },

  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },
  {
    name: "name",
    price: "price",
    type: "type",
    category: "category",
    payment: "payment",
    status: "status",
    renewalDate: "renewal date",
  },
];

const DashboardCards = [
  {
    id: 1,
    image: HappyFace,
    title: "Navidreza",
    subtitle: "navidrezaabbaszadeh89@gmail.com",
    icon: EditIcon,
    href: "/dashboard/profile",
  },
  {
    id: 2,
    image: Calendar,
    title: "Upcoming Events",
    subtitle: "Check your schedule",
    icon: LinkIcon,
    href: "/dashboard/events",
  },
];

export default function DashboardPage() {
  return (
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
  );
}
