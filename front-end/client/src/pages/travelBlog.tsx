/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Image from "next/image";
import { StoryType } from "../../util/types";

import {
  CardHeader,
  Flex,
  Avatar,
  Heading,
  IconButton,
  CardBody,
  CardFooter,
  Box,
  Button,
  Card,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

export default function TravelBlog(): JSX.Element {
  const [stories, setStories] = useState<StoryType[]>([]);
  const [userData, setUserData] = useState([]);
  let userName = "";
  let userImage = "";

  console.log("dasd", { userData });

  try {
    useEffect(() => {
      // if (!localStorage.getItem("userId")) return;

      getFetchdata();
      getUserFetch();
    }, []);

    const logUser = localStorage.getItem("userId");

    const getFetchdata = async (): Promise<void> => {
      const travels = await axios.get("http://localhost:3009/miniStory/get");
      const disp = travels.data;
      setStories(disp);
    };

    const getUserFetch = async (): Promise<void> => {
      const user = await axios.get(`http://localhost:3009/allUsers/profile`);
      const currentUser = user.data;
      setUserData(currentUser);
    };

    if (logUser) {
      userData
        .filter(
          (user: { _id: string; username: string; image: string }) =>
            user._id === logUser
        )
        .map((user: { username: string; image: string }) => {
          userName = user.username;
          userImage = user.image;
        });
    } else {
      console.log("Error user not found");
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <div className="flex justify-center content-center p-5">
        <div className="gap-3 grid">
          <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 relative ">
            {stories.map((story) => (
              <div key={story._id}>
                <Card maxW="md">
                  <CardHeader>
                    <Flex>
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Avatar name="Segun Adebayo" src={story.title} />

                        <Box>
                          <Heading size="sm">{story.title}</Heading>
                          <text>Creator,</text>
                        </Box>
                      </Flex>
                      <IconButton
                        variant="ghost"
                        colorScheme="gray"
                        aria-label="See menu"
                        icon={<BsThreeDotsVertical />}
                      />
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <text>{story.sentence.slice(0, 50)}...</text>
                  </CardBody>
                  <Image
                    objectFit="cover"
                    src={story.image}
                    width={500}
                    height={500}
                    alt="Chakra UI"
                  />

                  <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    sx={{
                      "& > button": {
                        minW: "136px",
                      },
                    }}
                  >
                    <Button flex="1" variant="ghost" leftIcon={<MdModeEdit />}>
                      Like
                    </Button>
                    <Button flex="1" variant="ghost" leftIcon={<MdModeEdit />}>
                      Share
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * Stories to link profile component
 */
