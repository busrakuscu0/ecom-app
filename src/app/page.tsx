import { auth0 } from "@/lib/auth0";

export default async function Home() {
  //TODO: CONVERT TO COMPONENT
  const session = await auth0.getSession();

  if (!session) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <a href="/auth/login">Log in</a>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black h-screen">
      <a href="/auth/logout">Log out</a>
    </div>
  );
}
