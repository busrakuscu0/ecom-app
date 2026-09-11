import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Customers",
};

export default function AdminCustomersPage() {
  return (
    <main className="space-y-6 p-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Customers
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage store customers and admin accounts.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Coming soon</CardTitle>
          <CardDescription>
            Customer management will be added in a future lesson.
          </CardDescription>
        </CardHeader>
      </Card>
    </main>
  );
}
