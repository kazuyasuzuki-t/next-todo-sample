import * as React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Checkbox,
  TextField,
  useTheme,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { Filter } from "@/components/Filter";
import { Todo } from "@/types";

export const TodoList = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (!text) return;
    if (todos.some((todo) => todo.title === text)) {
      alert("This todo is already exist.");
      setText("");
      return;
    }
    setTodos([...todos, { title: text, completed: false }]);
    setText("");
  };

  const removeTodo = (todoToRemove: Todo) => {
    setTodos(todos.filter((todo) => todo !== todoToRemove));
  };

  const completeTodo = (todoToComplete: Todo) => {
    setTodos(
      todos.map((todo) => {
        if (todo === todoToComplete) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  const filteredTodos = todos.filter((todo) => {
    return filter === "All"
      ? true
      : filter === "Completed"
      ? todo.completed
      : !todo.completed;
  });

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Filter filter={filter} setFilter={setFilter} />
        <TextField
          variant="outlined"
          fullWidth
          value={text}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
        />
      </Box>
      {filteredTodos.map((todo) => (
        <Box key={todo.title} sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            checked={todo.completed}
            onClick={() => completeTodo(todo)}
          />
          <Typography
            sx={{
              textDecoration: todo.completed ? "line-through" : "none",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: theme.palette.text.primary,
            }}
          >
            {todo.title}
          </Typography>
          <Button
            variant="text"
            size="small"
            onClick={() => removeTodo(todo)}
            sx={{ marginLeft: "auto" }}
          >
            <Close />
          </Button>
        </Box>
      ))}
    </>
  );
};
