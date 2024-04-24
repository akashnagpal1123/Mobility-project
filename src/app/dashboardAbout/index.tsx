"use client";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Text,
  Flex,
  Heading,
  Image,
  Box,
  IconButton,
  Container,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Input,
} from "@chakra-ui/react";

export default function DashboardSeventeenPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      {/* dashboard container section */}
      <Flex
        pb={{ md: "128px", base: "20px" }}
        gap="32px"
        bg="gray.50"
        w="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* header section */}
        <Flex
          borderColor="gray.200"
          borderBottomWidth="1px"
          borderStyle="solid"
          bg="white.A700"
          alignSelf="stretch"
          justifyContent="center"
          alignItems="center"
          py={{ base: "20px", sm: "24px" }}
          as="header"
        >
          <Container
            display="flex"
            justifyContent="space-between"
            gap="20px"
            px="0px"
            flexDirection={{ md: "row", base: "column" }}
            p={{ md: "", base: "20px" }}
          >
            <Image src="images/img_header_logo.png" h="48px" w={{ md: "13%", base: "100%" }} />
            <Flex
              w={{ md: "81%", base: "100%" }}
              justifyContent="space-between"
              gap="20px"
              flexDirection={{ base: "column", sm: "row" }}
            >
              <InputGroup w={{ base: "100%", sm: "29%" }}>
                <InputLeftElement>
                  <Image src="images/img_rewind.svg" w="24px" h="24px" />
                </InputLeftElement>
                <Input
                  placeholder={`Search by company name...`}
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e.target.value)}
                  color="gray.500"
                  pr={{ base: "20px", sm: "35px" }}
                  gap="8px"
                  borderColor="gray.400"
                  borderWidth="1px"
                  bg="white.A700"
                  h="48px"
                  borderRadius="8px"
                />
                <InputRightElement>
                  {searchBarValue?.length > 0 ? <CloseIcon onClick={() => setSearchBarValue("")} /> : null}
                </InputRightElement>
              </InputGroup>
              <Flex gap="16px" w={{ base: "100%", sm: "25%" }} justifyContent="center">
                <IconButton
                  icon={<Image src="images/img_notifications.svg" />}
                  aria-label="1:167-notifications"
                  h="48px"
                  bg="green.50_7f"
                  w="48px"
                  borderRadius="24px"
                />
                <Flex gap="8px" flex={1} justifyContent="center" alignItems="center">
                  <Image src="images/img_frame_159360.png" borderRadius="50%" h="48px" w="48px" />
                  <Flex gap="5px" flexDirection="column" alignItems="start">
                    <Heading size="s" as="h6">
                      Shailesh Vickram
                    </Heading>
                    <Text color="gray.800_01">Investor</Text>
                  </Flex>
                  <Image src="images/img_arrow_down.svg" h="24px" w="24px" />
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Flex>

        {/* main content section */}
        <Container display="flex" px="0px" p={{ md: "", base: "20px" }}>
          <Flex gap="24px" w="100%" alignItems="start" flexDirection={{ md: "row", base: "column" }}>
            {/* syndicate section */}
            <Flex flex={1} flexDirection="column" alignSelf="stretch">
              <Flex alignItems="center" flexWrap="wrap">
                <Text textTransform="uppercase" textAlign="center" alignSelf="end" textDecoration="underline">
                  ALL SYNDICATES
                </Text>
                <Image src="images/img_arrow_right.svg" h="16px" w="16px" />
                <Heading size="xs" as="h1" color="teal.900" textTransform="uppercase" textAlign="center">
                  GoMassive syndicate
                </Heading>
              </Flex>
              <Flex mt="24px" gap="16px" flexDirection="column">
                <Flex alignSelf="start">
                  <Flex gap="11px" alignItems="center">
                    <IconButton
                      icon={<Image src="images/img_frame_159825.png" />}
                      aria-label="1:13-iconbutton"
                      h="64px"
                      borderColor="gray.200"
                      borderWidth="1px"
                      borderStyle="solid"
                      bg="white.A700"
                      w="64px"
                      borderRadius="32px"
                    />
                    <Flex gap="3px" flexDirection="column" alignItems="start" justifyContent="center">
                      <Heading size="lg" color="gray.900" fontFamily="Montserrat" fontSize="24px">
                        GoMassive syndicate
                      </Heading>
                      <Text>June 2023</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Box h="1px" bg="gray.400" />
              </Flex>

              {/* about section */}
              <Flex mt="23px" gap="16px" flexDirection="column" alignItems="start">
                <Heading size="lg" as="h3" color="gray.900" fontFamily="Montserrat" fontSize="24px">
                  About
                </Heading>
                <Text size="s" fontWeight={400} lineHeight="20px">
                  Lorem ipsum dolor sit amet consectetur. Lorem dolor et feugiat id dignissim urna gravida nibh diam.
                  Risus facilisi eu euismod odio enim. Sed blandit velit enim tincidunt aliquam sapien viverra. Maecenas
                  orci ultrices venenatis sit et odio feugiat. Aliquam eget lacus non enim urna eget quis vivamus sed.
                  Mauris in viverra nisl volutpat ut arcu. Tellus magnis purus eget gravida molestie suspendisse diam.
                  Vestibulum proin nunc vulputate imperdiet. Dignissim sed porta nascetur porttitor in etiam consectetur
                  tortor rhoncus.{" "}
                </Text>
              </Flex>

              {/* team profiles section */}
              <Flex mt="64px" gap={{ base: "32px", sm: "64px" }} flexDirection="column">
                <Flex gap="17px" flexDirection="column" alignItems="start">
                  <Heading size="lg" as="h4" color="gray.900" fontFamily="Montserrat" fontSize="24px">
                    Team Profile
                  </Heading>
                  <Flex gap="24px" alignSelf="stretch" flexDirection={{ md: "row", base: "column" }}>
                    <Flex gap="12px" w="100%" alignItems="center">
                      <Image src="images/img_ellipse_3.png" borderRadius="50%" h="96px" w="96px" />
                      <Flex gap="8px" flex={1} flexDirection="column" alignItems="start">
                        <Flex gap="5px" flexDirection="column" alignItems="start" justifyContent="center">
                          <Heading as="h5">Priya Kapoor</Heading>
                          <Text fontWeight={500}>Syndicate lead</Text>
                        </Flex>
                        <IconButton
                          icon={<Image src="images/img_devicon_linkedin_light_blue_800.svg" />}
                          aria-label="1:34-devicon_one"
                          h="32px"
                          w="32px"
                        />
                      </Flex>
                    </Flex>
                    <Flex gap="12px" w="100%" alignItems="center">
                      <Image src="images/img_ellipse_3_96x96.png" borderRadius="50%" h="96px" w="96px" />
                      <Flex gap="8px" flex={1} flexDirection="column" alignItems="start">
                        <Flex gap="4px" flexDirection="column" alignItems="start">
                          <Heading as="h6">Courtney Boyd</Heading>
                          <Text fontWeight={500}>Admin</Text>
                        </Flex>
                        <Image src="images/img_devicon_linkedin_light_blue_800.svg" h="32px" w="32px" />
                      </Flex>
                    </Flex>
                    <Flex gap="12px" w="100%" alignItems="center">
                      <Image src="images/img_ellipse_3_1.png" borderRadius="50%" h="96px" w="96px" />
                      <Flex gap="8px" flex={1} flexDirection="column" alignItems="start">
                        <Flex gap="6px" flexDirection="column" alignItems="start" justifyContent="center">
                          <Heading as="h6">Clint Eastwood</Heading>
                          <Text fontWeight={500}>Admin</Text>
                        </Flex>
                        <Image src="images/img_devicon_linkedin_light_blue_800.svg" h="32px" w="32px" />
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>

                {/* investment opportunities section */}
                <Flex gap="16px" flexDirection="column" alignItems="start">
                  <Heading size="lg" as="h4" color="gray.900" fontFamily="Montserrat" fontSize="24px">
                    Investments
                  </Heading>
                  <Flex gap="32px" alignSelf="stretch" flexDirection="column">
                    <Flex alignItems="center" flexDirection={{ md: "row", base: "column" }}>
                      <Box
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white.A700"
                        w={{ md: "7%", base: "100%" }}
                        borderRadius="32px"
                      >
                        <Image src="images/img_image_150.png" borderRadius="50%" h="64px" w="64px" />
                      </Box>
                      <Flex
                        ml={{ md: "12px", base: "0px" }}
                        gap="3px"
                        flex={1}
                        flexDirection="column"
                        alignItems="start"
                        alignSelf="stretch"
                      >
                        <Heading as="h6">Ace Green Recycling</Heading>
                        <Flex gap="3px" flexDirection="column" alignItems="start">
                          <Text>Battery Recycling</Text>
                          <Flex gap="4px" alignItems="center" flexWrap="wrap">
                            <Text alignSelf="end">Bengaluru</Text>
                            <Text alignSelf="end">|</Text>
                            <Text alignSelf="start">2023</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Box
                        ml={{ md: "24px", base: "0px" }}
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white.A700"
                        w={{ md: "7%", base: "100%" }}
                        borderRadius="32px"
                      >
                        <Image src="images/img_image_150.png" borderRadius="50%" h="64px" w="64px" />
                      </Box>
                      <Flex
                        ml={{ md: "12px", base: "0px" }}
                        gap="3px"
                        flex={1}
                        flexDirection="column"
                        alignItems="start"
                        alignSelf="stretch"
                      >
                        <Heading as="h6">Ace Green Recycling</Heading>
                        <Flex gap="3px" flexDirection="column" alignItems="start">
                          <Text>Battery Recycling</Text>
                          <Flex gap="4px" alignItems="center" flexWrap="wrap">
                            <Text alignSelf="end">Bengaluru</Text>
                            <Text alignSelf="end">|</Text>
                            <Text alignSelf="start">2023</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Box
                        ml={{ md: "24px", base: "0px" }}
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white.A700"
                        w={{ md: "7%", base: "100%" }}
                        borderRadius="32px"
                      >
                        <Image src="images/img_image_150.png" borderRadius="50%" h="64px" w="64px" />
                      </Box>
                      <Flex
                        ml={{ md: "12px", base: "0px" }}
                        gap="3px"
                        flex={1}
                        flexDirection="column"
                        alignItems="start"
                        alignSelf="stretch"
                      >
                        <Heading as="h6">Ace Green Recycling</Heading>
                        <Flex gap="3px" flexDirection="column" alignItems="start">
                          <Text>Battery Recycling</Text>
                          <Flex gap="4px" alignItems="center" flexWrap="wrap">
                            <Text alignSelf="end">Bengaluru</Text>
                            <Text alignSelf="end">|</Text>
                            <Text alignSelf="start">2023</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex
                      w={{ md: "66%", base: "100%" }}
                      alignItems="center"
                      flexDirection={{ md: "row", base: "column" }}
                    >
                      <Box
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white.A700"
                        w={{ md: "10%", base: "100%" }}
                        borderRadius="32px"
                      >
                        <Image src="images/img_image_150.png" borderRadius="50%" h="64px" w="64px" />
                      </Box>
                      <Flex
                        ml={{ md: "12px", base: "0px" }}
                        gap="3px"
                        flex={1}
                        flexDirection="column"
                        alignItems="start"
                        alignSelf="stretch"
                      >
                        <Heading as="h6">Ace Green Recycling</Heading>
                        <Flex gap="3px" flexDirection="column" alignItems="start">
                          <Text>Battery Recycling</Text>
                          <Flex gap="4px" alignItems="center" flexWrap="wrap">
                            <Text alignSelf="end">Bengaluru</Text>
                            <Text alignSelf="end">|</Text>
                            <Text alignSelf="start">2023</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Box
                        ml={{ md: "24px", base: "0px" }}
                        borderColor="gray.200"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="white.A700"
                        w={{ md: "10%", base: "100%" }}
                        borderRadius="32px"
                      >
                        <Image src="images/img_image_150.png" borderRadius="50%" h="64px" w="64px" />
                      </Box>
                      <Flex
                        ml={{ md: "12px", base: "0px" }}
                        gap="3px"
                        flex={1}
                        flexDirection="column"
                        alignItems="start"
                        alignSelf="stretch"
                      >
                        <Heading as="h6">Ace Green Recycling</Heading>
                        <Flex gap="3px" flexDirection="column" alignItems="start">
                          <Text>Battery Recycling</Text>
                          <Flex gap="4px" alignItems="center" flexWrap="wrap">
                            <Text alignSelf="end">Bengaluru</Text>
                            <Text alignSelf="end">|</Text>
                            <Text alignSelf="start">2023</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            {/* syndicate statistics section */}
            <Flex
              gap="24px"
              borderColor="gray.400"
              borderWidth="1px"
              borderStyle="solid"
              bg="white.A700"
              w={{ md: "24%", base: "100%" }}
              flexDirection="column"
              p="16px"
              borderRadius="12px"
            >
              <Flex mt="8px" gap="11px" flexDirection="column" alignItems="start">
                <Heading as="h6" color="gray.900">
                  Syndicate stats
                </Heading>
                <Flex gap="8px" alignSelf="stretch" flexDirection="column">
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>Total investors</Text>
                    <Text size="s" h="20px">
                      112
                    </Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>Total startups invested in</Text>
                    <Text size="s">15</Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>Live Deals</Text>
                    <Text size="s" h="20px">
                      02
                    </Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>Deals in past 12 months</Text>
                    <Text size="s" h="20px">
                      05
                    </Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text alignSelf="start">Invested amount</Text>
                    <Text size="s" alignSelf="start">
                      ₹14,50,00,600
                    </Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>Carry</Text>
                    <Text size="s">20%</Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="center"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text alignSelf="start">Min. Investment</Text>
                    <Text size="s" alignSelf="start">
                      ₹2,00,000
                    </Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>TVPI</Text>
                    <Text size="s">0.85</Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>DPI</Text>
                    <Text size="s">0.85</Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>IRR</Text>
                    <Text size="s">0.85</Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>Stage</Text>
                    <Text size="s">Seed</Text>
                  </Flex>
                  <Flex
                    borderColor="gray.200"
                    borderBottomWidth="1px"
                    borderStyle="solid"
                    justifyContent="space-between"
                    alignItems="start"
                    flexWrap="wrap"
                    gap="20px"
                  >
                    <Text>Industry</Text>
                    <Text size="s">Climate Tech</Text>
                  </Flex>
                  <Flex justifyContent="space-between" alignItems="start" flexWrap="wrap" gap="20px">
                    <Text>Date created</Text>
                    <Text size="s">27/05/2023</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Button
                color="white.A700"
                mb="36px"
                letterSpacing="1.25px"
                textTransform="uppercase"
                fontWeight={600}
                bg="teal.800"
                h="48px"
                w="100%"
                px={{ base: "20px", sm: "35px" }}
                borderRadius="8px"
              >
                JOIN SYNDICATE
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
