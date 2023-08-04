import * as React from "react";
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  useTheme,
} from "@mui/material";

export const Filter = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ textAlign: "center" }}>
      <FormControl>
        <RadioGroup
          row
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
          sx={{ color: theme.palette.text.primary }}
        >
          <FormControlLabel value="All" control={<Radio />} label="All" />
          <FormControlLabel
            value="Completed"
            control={<Radio />}
            label="Completed"
          />
          <FormControlLabel
            value="Incompleted"
            control={<Radio />}
            label="Incompleted"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
