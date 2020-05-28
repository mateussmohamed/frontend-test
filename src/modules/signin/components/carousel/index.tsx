import React from "react";
import { Box, Text, Heading, Image, Flex } from "rebass/styled-components";

import SlideImage from "@b8/assets/images/slide.png";

import { Dots, Dot, Container } from "./styled";

const items = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum eget risus ut scelerisque.",
    image: SlideImage,
  },
  {
    title: "Cras eu sem id turpis fringilla tempus egestas a eros.",
    description:
      "Phasellus suscipit, ante sit amet porttitor sollicitudin, ante metus cursus quam, ac euismod risus ligula nec mauris.",
    image: SlideImage,
  },
  {
    title: "Etiam et molestie risus, vitae malesuada nulla.",
    description:
      "Proin dapibus eros eget dui malesuada tristique. Phasellus malesuada sagittis orci sit amet mattis.",
    image: SlideImage,
  },
];

function Carousel(): JSX.Element {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: Dots,
    customPaging: Dot,
  };

  return (
    <Flex>
      <Box pt={6}>
        <Container {...settings}>
          {items.map((item, index) => (
            <Box px={6} key={index}>
              <Heading color="white" lineHeight="32px" fontSize={6} mb={3}>
                {item.title}
              </Heading>
              <Text color="white" opacity={0.7} lineHeight="24px" mb={5}>
                {item.description}
              </Text>
              <Image src={item.image} />
            </Box>
          ))}
        </Container>
      </Box>
    </Flex>
  );
}

export default Carousel;
