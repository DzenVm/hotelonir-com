import BenefitSection from "./BenefitSection"
import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <section id="features" className="uniq-py-20 uniq-bg-gray-50">
            {/* Скрытый заголовок для доступности */}
            <h2 className="uniq-sr-only">Our Core Features</h2>

            <div className="uniq-space-y-16">
                {benefits.map((item, index) => (
                    <BenefitSection
                        key={index}
                        benefit={item}
                        imageAtRight={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    )
}

export default Benefits
