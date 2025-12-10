"use client";

import { ReactNode, useState } from "react";
import {QueryClient, QueryClientProvider} from "react-query";

export default function QueryProvider({ children }: { children: ReactNode }) {
    const [client] = useState(() => new QueryClient());

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
