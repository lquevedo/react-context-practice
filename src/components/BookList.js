import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>book one</li>
        <li style={{ background: theme.ui }}>book two</li>
        <li style={{ background: theme.ui }}>book three</li>
      </ul>
    </div>
  );
};

export default BookList;
