import { stats } from "@/data/stats";
import Container from "./Container";

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-10 lg:py-20 bg-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3 text-center sm:text-left">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="max-w-md sm:max-w-full mx-auto sm:mx-0"
            >
              <h3 className="mb-3 flex items-center justify-center sm:justify-start gap-2 text-3xl font-semibold text-foreground">
                {stat.icon}
                {stat.title}
              </h3>
              <p className="text-foreground-accent">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
