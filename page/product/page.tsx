import { Stack } from "@mui/material";
import { ProductTag } from "./_components/Product.Tag";
import { ProductType } from "./_components/Product.Type";
import ProductNameSection from "./_components/Product.Name.Section";
import ProductImageSection from "./_components/Product.Image.Section";
import { ProductTotalPrice } from "./_components/Product.Total.Price";
import ProductGeneralCategory from "./_components/Product.General.Category";

export default function Home() {
  return (
    <Stack direction={"row"} width={"100%"}>
      <Stack gap={3} width={"50%"}>
        <ProductNameSection />
        <ProductImageSection />
        <ProductTotalPrice />
      </Stack>
      <Stack gap={3} width={"50%"}>
        <ProductGeneralCategory />
        <ProductType />
        <ProductTag />
      </Stack>
    </Stack>
  );
}
