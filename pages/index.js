import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a software developer based in Colombia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jorge León
          </Heading>
          <p>Software Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jorsch.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a <text style={{ color: '#ff63c3' }}>Software Developer</text>{' '}
          who specializes in JavaScript Technologies. Building complete web
          applications with backend API Systems. Full of passion for tech and
          the web, ready for the challenges of the industry.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Working as a Software Developer at Triagons.
        </BioSection>

        <BioSection>
          <BioYear>2020</BioYear>
          Call Center Representative at Teleperformance.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Software Developer at Supermetales.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Technical Support Specialist at Supermetales.
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2024</BioYear>
          IBM Back-end JavaScript Developer.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Software Analysis and Development at SENA.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Foreign Languages at University of Cartagena.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Systems Engineering at University of Cartagena.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Coding, <text style={{ color: '#ff63c3' }}>Food</text>, Art, Music,
          Playing Guitar, <text style={{ color: '#ff63c3' }}>Gaming</text>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Jorzch" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Jorzch
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/Jorzch/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Jorzch
              </Button>
            </Link>
          </ListItem>
        </List>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/Jorge%20Leon%20-%20CV.pdf"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            target="_blank"
            download
          >
            Download Resume
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
// export { getServerSideProps } from '../components/chakra'
