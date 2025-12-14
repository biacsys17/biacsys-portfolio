import services from "../data/services.json";
import ServiceDisplayCard from "./Ui/service-display-card";

const Card: any = ServiceDisplayCard;

export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 ">
      {services.map(service => (
        <Card radius="10px" key={service.id} padding="20px">
          <img  src={service.icon} alt={service.title} className="ml-auto mr-auto size-8 mb-3 bg-teal-200 p-0" />

          <h2 className=" mt-5 text-xl font-bold text-gray-700">
            {service.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {service.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
