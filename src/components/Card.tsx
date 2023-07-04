import { Box, Flex, Text } from "@mantine/core";
import "./Card.css";
import { NavLink } from "react-router-dom";

type cardProps = {
    shopGaleryPicture: string;
    shopGaleryPictureHover: string;
    id: string;
};

const Card = (props: cardProps) => {
    return (
        <NavLink to={"/" + props.id} className="card_wrapper">
            <img
                className="Image_Card"
                src={props.shopGaleryPicture}
                width="100%"
                height="100%"
            />
            <img
                className="Image_Card_Hover"
                src={props.shopGaleryPictureHover}
                width="100%"
                height="100%"
            />

            <Flex
                direction={"column"}
                align={"center"}
                justify={"center"}
                className="Image_text"
                gap={"md"}
            >
                <Text size={13}>Ajout Rapide</Text>
                <Flex direction={"row"} gap={40}>
                    <Text>S</Text>
                    <Text>M</Text>
                    <Text>L</Text>
                </Flex>
            </Flex>
        </NavLink>
    );
};

export default Card;
