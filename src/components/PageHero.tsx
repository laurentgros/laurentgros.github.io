import React from "react";

type PageHeroProps = {
  title: string;
  image?: string;
};

const PageHero: React.FC<PageHeroProps> = ({
  title,
  image = "/images/hero/solar-roof.jpg",
}) => {
  return (
    <section
      className="inner-hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{title}</h1>
    </section>
  );
};

export default PageHero;
