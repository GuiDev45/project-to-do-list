// import StyleGuide from "./StyleGuide";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WebRoutes from "./routes/WebRoutes";
import { Suspense } from "react";

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Carregando...</div>}>
          <WebRoutes />
        </Suspense>
      </QueryClientProvider>
      {/* <StyleGuide /> */}
    </div>
  );
}
