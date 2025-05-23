import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  title,
  description,
  children,
}) => {
  return (
    <section id={id} className="uniq-py-10 lg:uniq-py-20">
      <SectionTitle>
        <h2 className="uniq-text-center uniq-mb-4">{title}</h2>
      </SectionTitle>
      <p className="uniq-mb-12 uniq-text-center">{description}</p>
      {children}
    </section>
  );
};

export default Section;
