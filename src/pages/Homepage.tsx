import PocketBase, { Record } from "pocketbase";
const pb = new PocketBase("https://louisrvl.fr/pocketbase");
pb.autoCancellation(false);

import { useEffect, useState } from "react";
import { Flex } from "@mantine/core";
import Card from "../components/Card";
import { Outlet } from "react-router-dom";

const Homepage = () => {
    const [data, setData] = useState<Record[]>([]);
    let getProductsData = async () => {
        const records = await pb
            .collection("centre_commercial_products")
            .getFullList({
                sort: "-created",
            });
        setData(records);
    };

    useEffect(() => {
        getProductsData();
    }, []);
    return (
        <>
            <Flex>
                {data &&
                    data.map((el, key) => {
                        return (
                            <Card
                                id={el.id}
                                key={key}
                                shopGaleryPicture={pb.files.getUrl(
                                    el,
                                    el.shopGaleryPicture
                                )}
                                shopGaleryPictureHover={pb.files.getUrl(
                                    el,
                                    el.shopGaleryPictureHover
                                )}
                            />
                        );
                    })}
            </Flex>
            <Outlet />
        </>
    );
};

export default Homepage;
