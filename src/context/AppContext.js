import { createContext, useState } from "react";
import { blogPost } from "../data/blogpost";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [blog, setBlog] = useState(blogPost);

  const value = {
    blog,
    setBlog,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
