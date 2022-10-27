import { createFunction } from "inngest";

export default createFunction("Section Function", "demo/ok.yeah", () => {
  return {
    message: "Hello Inngest!",
  };
});
