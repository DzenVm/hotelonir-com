import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="uniq-grid uniq-gap-14 uniq-max-w-lg uniq-w-full uniq-mx-auto lg:uniq-gap-8 lg:uniq-grid-cols-3 lg:uniq-max-w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="uniq-flex uniq-flex-col uniq-items-center lg:uniq-items-start uniq-text-center lg:uniq-text-left"
                >
                    <div className="uniq-flex uniq-items-center uniq-mb-4 uniq-w-full uniq-justify-center lg:uniq-justify-start">
                        <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            width={50}
                            height={50}
                            className="uniq-rounded-full uniq-shadow-md"
                        />
                        <div className="uniq-ml-4">
                            <h3 className="uniq-text-lg uniq-font-semibold uniq-text-secondary">
                                {testimonial.name}
                            </h3>
                            <p className="uniq-text-sm uniq-text-foreground-accent">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>
                    <p className="uniq-text-foreground-accent">
                        &quot;{testimonial.message}&quot;
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
