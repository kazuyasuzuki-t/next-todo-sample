import * as React from "react";
import { Box, Typography } from "@mui/material";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <Box width="360px" sx={{ margin: "24px auto" }}>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        useState
      </Typography>
      <TodoList />
    </Box>
  );
}
