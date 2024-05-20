import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3, // React Query will retry 3 more times if the first request failed
            cacheTime: 86_400_000, // Data will be refreshed after 1 day or if the broqser is closed and chache data is removed
            staleTime: 86_400_000,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            refetchOnMount: true, // Resources will be fetched when the component mounts for a first time
        },
    },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
