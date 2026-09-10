import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { isAdmin } from "@/lib/auth0";
import { UserCircleIcon } from "lucide-react";
import Link from "next/link";

export function DropdownMenuBasic() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="User dropdown menu"
        render={
          <UserCircleIcon
            size={28}
            className="cursor-pointer"
            aria-hidden="true"
          />
        }
      />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Orders</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {!!isAdmin ? (
          <DropdownMenuItem>
            <Link href="/admin">Admin Panel</Link>
          </DropdownMenuItem>
        ) : null}
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          render={<Link href="/auth/logout">Logout</Link>}
        ></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
