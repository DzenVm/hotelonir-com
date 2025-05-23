import BenefitSection from "./BenefitSection"
import { benefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-gray-50">
            {/* Скрытый заголовок для доступности */}
            <h2 className="sr-only">Our Core Features</h2>

            <div className="space-y-16">
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
