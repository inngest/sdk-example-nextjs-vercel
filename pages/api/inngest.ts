import { serve } from "inngest/next";
import helloWorld from "../../inngest/helloWorld";

export default serve("My Next.js App", [helloWorld]);
