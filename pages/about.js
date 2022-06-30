import Head from "next/head";
import {
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import Banner from "../components/Banner";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Oh My Darkness</title>
      </Head>
      <Banner
        src="/images/web/Final-Fantasy-XIV-1080-Main.jpg"
        width={1920}
        height={1080}
        title="About Us"
        subtitle="Because reasons"
      />
      <Flex flexDirection="column" gap="1rem" p={5}>
        <Heading>How We Started</Heading>
        <Text>
          Oh My Darkness started as an idea between a few friends that were
          unhappy with the road their previous free company was taking. Though a
          focus of raiding progression was agreed, the more important goal was
          to foster an accepting community that promoted positive values.
          Because of this idea, a few friends decided to break away and form
          their path.
        </Text>
        <Heading>Our Community Goals</Heading>
        <Text>Building a community with a focus on raiding.</Text>
        <OrderedList>
          <ListItem>Suck</ListItem>
          <ListItem>meh</ListItem>
          <ListItem>Thumb?</ListItem>
        </OrderedList>
        <Text>
          Building an open and welcoming community that accepts all types of ppl
          and dicks.
        </Text>
        <Heading>Our Members and Peak Times</Heading>
        <Text>
          The majority of our group is based on the east coast, and generally
          active in the evenings during the week and various times during the
          weekend.
        </Text>
        <Heading>Weekly and Seasonal Events</Heading>
        <Text>
          As our community grows we are interested in adding more activities as
          a group. Currently maps and raid groups.
        </Text>
        <UnorderedList>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
          <ListItem>Three</ListItem>
          <ListItem>Four</ListItem>
        </UnorderedList>
        <Heading>Housing</Heading>
        <Text>
          We recently moved to a larger FC house in the Kugane area. Ask
          Frenchie.
        </Text>
        <UnorderedList>
          <ListItem>One</ListItem>
          <ListItem>Two</ListItem>
          <ListItem>Three</ListItem>
          <ListItem>Four</ListItem>
        </UnorderedList>
        <Heading>FC Chest</Heading>
        <Text>
          As a general rule the chest is open to other players as long as
          everyone contributes to replenishing what is there. We have several
          crafters in our group currently so crystals and crafting materials are
          considered at a premium: generally you can use what is there but
          please be considerate of the other member's needs.
        </Text>
        <Text></Text>
        <UnorderedList>
          <ListItem>
            For consummable usage, please ask an officer before withdrawing
            large stacks.
          </ListItem>
          <ListItem>Gil withdrawals are restricted to officer use.</ListItem>
          <ListItem>
            Restricted items in later tabs are available with an officer's
            approval. Please communicate this in the Discord server or in FC
            chat.
          </ListItem>
        </UnorderedList>
        <Heading>Raiding</Heading>
        <Text>
          We have one static raid group and working on expanding with more
          members for both subtitutions and additional raid groups. Common
          courtesy rules apply when discussing raid topics and during events: we
          make sure to have fun while raiding but maintain focus on making
          progression.
        </Text>
        <UnorderedList>
          <ListItem>Raid nights are at least twice a week.</ListItem>
          <ListItem>
            Subtitute players are recommended to be able to flex within two
            different raid roles (ex. healer, tank, ranged DPS, etc.)
          </ListItem>
          <ListItem>
            Streaming terms of service rules apply during raid times.
          </ListItem>
          <ListItem>Four</ListItem>
        </UnorderedList>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          nibh tellus molestie nunc non blandit massa. Convallis tellus id
          interdum velit laoreet id. Tortor pretium viverra suspendisse potenti
          nullam ac tortor vitae. Diam quam nulla porttitor massa id neque. Dui
          ut ornare lectus sit amet est placerat. Gravida in fermentum et
          sollicitudin. Ante metus dictum at tempor commodo ullamcorper a lacus.
          Iaculis nunc sed augue lacus viverra vitae congue. Eget felis eget
          nunc lobortis mattis. Id neque aliquam vestibulum morbi blandit cursus
          risus at ultrices.
        </Text>
      </Flex>
      <Footer />
    </>
  );
};
export default AboutPage;
