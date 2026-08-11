import { auth0 } from "@/lib/auth0";

export default async function Home() {
  //TODO: CONVERT TO COMPONENT

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <a href="/auth/login">Log in</a>
    </div>
  );
}
