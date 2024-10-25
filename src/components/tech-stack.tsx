import { IconData, fields } from "../../data";
import Arrow from "./arrow";
import { Icon } from "./icon";
import Section from "./section";
import Star from "./star";

type ItemProps = {
  data: IconData[];
  field: "BACKEND" | "FRONTEND" | "TOOLS & DEVOPS";
};

function Item({ data, field }: ItemProps) {
  const colors = {
    BACKEND: "#CBCD68",
    FRONTEND: "#3BBDC6",
    "TOOLS & DEVOPS": "#D44DD7",
  };
  const toLeft = field == "FRONTEND";

  return (
    <Section>
      <div className="space-y-16">
        <div className="flex items-center gap-10">
          {field == "BACKEND" && <Arrow />}
          {field == "TOOLS & DEVOPS" && <Star />}
          <h2
            className={`animate text-6xl font-extrabold font-syne opacity-0 ${toLeft ? "-" : ""}translate-x-2/3`}
          >
            {field}
          </h2>
          {toLeft && <Arrow toLeft />}
        </div>
        <div className="w-full flex gap-4">
          {/* TODO : make icon change color when hovered */}
          {data.map((item) => (
            <Icon key={item.name} item={item} color={colors[field]} />
          ))}
        </div>
      </div>
    </Section>
  );
}
export default function TechStack() {
  return (
    <>
      <Item data={fields[0].data} field="BACKEND" />
      <Item data={fields[1].data} field="FRONTEND" />
      <Item data={fields[2].data} field="TOOLS & DEVOPS" />
    </>
  );
}
