import React, { useContext } from "react";
import { Skeleton, Box, Grid } from "@chakra-ui/react";
import { Context } from "../Auth/Context";

const ShopSkeleton = () => {
    const {data} =useContext(Context)
  return (
    <Box className="walls">
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4}>
        {data.map((_, index) => (
          <Box key={index} className="child">
            <Skeleton height="350px" width="100%" />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopSkeleton;
