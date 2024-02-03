import { createContext } from "react";

import defaultIconFetcher from "./DefaultIconFetcher";

export type IconFetcher = {
  fetchIcon: (name: string, path: string | undefined) => Promise<string | null>
};

export const PktIconContext = createContext<IconFetcher>(defaultIconFetcher);
