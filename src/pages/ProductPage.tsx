import { Flex } from "@mantine/core";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
const pb = new PocketBase("https://louisrvl.fr/pocketbase");
import { useParams } from "react-router-dom";

const ProductPage = () => {
    let { HomepageId } = useParams<string>();
    const [productData, setProductData] = useState<Record<string, JSON>>();
    let getProductDetails = async () => {
        if (!HomepageId) {
            return;
        } else if (typeof HomepageId === "string") {
            const record = await pb
                .collection("centre_commercial_products")
                .getOne(HomepageId);
            setProductData(record);
        }
        useEffect(() => {
            getProductDetails();
        }, []);
    };

    return <Flex>
        {productData && productData.map(()=> {

        })}
    </Flex>;
};

export default ProductPage;
