import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/rakzs/Footer";
import { Header } from "@/components/rakzs/Header";
import { themeInitScript } from "@/components/rakzs/ThemeToggle";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[78vh] items-center justify-center bg-background px-5 pt-28">
      <div className="max-w-xl text-center">
        <p className="section-kicker">Frame Not Found</p>
        <h1 className="mt-4 font-display text-8xl font-semibold text-foreground">404</h1>
        <p className="mt-5 text-base leading-8 text-muted-foreground">
          This story has moved beyond the frame. Return home or explore our portfolio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="gold">
            <Link to="/">Return Home</Link>
          </Button>
          <Button asChild variant="outlineGold">
            <Link to="/events">Explore Events</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-lg text-center">
        <p className="section-kicker">Something went wrong</p>
        <h1 className="mt-5 font-display text-5xl text-foreground">This page didn&apos;t load.</h1>
        <p className="mt-4 text-muted-foreground">Try again, or return to the studio home page.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Button
            variant="gold"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try Again
          </Button>
          <Button asChild variant="outlineGold">
            <Link to="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RAKZS STUDIO — Photography, Film & Editing" },
      {
        name: "description",
        content:
          "RAKZS STUDIO creates cinematic photography, films, and refined editing for celebrations, families, and brands.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/rakzs-camera-favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
