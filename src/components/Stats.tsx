import { stats } from "@/data/stats";
import Container from "./Container";

const Stats: React.FC = () => {
  return (
    <section id="stats" className="uniq-py-10 lg:uniq-py-20 uniq-bg-white">
      <Container>
        <div className="uniq-grid uniq-gap-10 sm:uniq-grid-cols-3 uniq-text-center sm:uniq-text-left">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="uniq-max-w-md sm:uniq-max-w-full uniq-mx-auto sm:uniq-mx-0"
            >
              <h3 className="uniq-mb-3 uniq-flex uniq-items-center uniq-justify-center sm:uniq-justify-start uniq-gap-2 uniq-text-3xl uniq-font-semibold uniq-text-foreground">
                {stat.icon}
                {stat.title}
              </h3>
              <p className="uniq-text-foreground-accent">{stat.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
