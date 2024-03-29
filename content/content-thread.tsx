import React, { useState, useEffect, createContext } from "react";
import { Thread } from "@/types/threads";
import { generateThreads } from "@/utils/generate-dommy-data";

export const ThreadsContext = createContext<Thread[]>([]);
// ThreadsContext.
export const ThreadProvider = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const [threads, setThreads] = useState<Thread[]>([]);

  useEffect(() => {
    setThreads(generateThreads());
  }, []);
  return (
    <ThreadsContext.Provider value={threads}>
      {children}
    </ThreadsContext.Provider>
  );
};
