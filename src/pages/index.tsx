import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { TodoList } from "@/components/TodoList";
import CustomizedSwitch from "@/components/CustomizedSwitch";

export default function Home() {
  const theme = useTheme();
  return (
    <Box width="360px" sx={{ margin: "24px auto" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomizedSwitch />
      </Box>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", color: theme.palette.text.primary }}
      >
        Jōtai
      </Typography>
      <TodoList />
    </Box>
  );
}
