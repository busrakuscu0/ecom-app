"use client";

import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { useState } from "react";
import { toast } from "sonner";
import { profileSchema } from "@/lib/validation";

export default function ProfilePage() {
  const { user, isLoading } = useUser();
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  const handleSave = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const validation = profileSchema.safeParse(data);

    if (!validation.success) {
      const flattenedErrors = validation.error.flatten();

      setErrors(flattenedErrors.fieldErrors);

      setIsSaving(false);
      return;
    }

    setErrors({});

    try {
      const response = await fetch("/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validation.data),
      });

      if (response.ok) {
        toast.success("Profile updated successfully!");
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
    );
  }

  return (
    <div className="max-2xl md:max-w-3xl mx-auto py-6 px-2 md:py-10 md:px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Account Settings
      </h1>

      <form onSubmit={handleSave}>
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Update your contact information and delivery address here.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  defaultValue={user?.name?.split(" ")[0] || ""}
                  placeholder="John"
                  aria-invalid={!!errors.firstName}
                  aria-describedby={
                    errors.firstName ? "firstName-error" : undefined
                  }
                />
                {errors.firstName && (
                  <p
                    id="firstName-error"
                    aria-live="polite"
                    className="text-xs text-destructive"
                  >
                    {errors.firstName}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  defaultValue={user?.name?.split(" ")[1] || ""}
                  placeholder="Doe"
                  aria-invalid={!!errors.lastName}
                  aria-describedby={
                    errors.lastName ? "lastName-error" : undefined
                  }
                />
                {errors.lastName && (
                  <p
                    id="lastName-error"
                    aria-live="polite"
                    className="text-xs text-destructive"
                  >
                    {errors.lastName}
                  </p>
                )}
              </Field>
              <Field className="md:col-span-2">
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={user?.email || ""}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    aria-live="polite"
                    className="text-xs text-destructive"
                  >
                    {errors.email}
                  </p>
                )}
              </Field>
            </FieldGroup>

            <FieldSet className="w-full">
              <FieldLegend className="text-lg font-medium mb-2 md:mb-4">
                Address Information
              </FieldLegend>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="street">Street Address</FieldLabel>
                  <Input
                    id="street"
                    name="street"
                    type="text"
                    placeholder="123 Main St"
                    aria-invalid={!!errors.street}
                    aria-describedby={
                      errors.street ? "street-error" : undefined
                    }
                  />
                  {errors.street && (
                    <p
                      id="street-error"
                      aria-live="polite"
                      className="text-xs text-destructive"
                    >
                      {errors.street}
                    </p>
                  )}
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="city">City</FieldLabel>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="New York"
                      aria-invalid={!!errors.city}
                      aria-describedby={errors.city ? "city-error" : undefined}
                    />
                    {errors.city && (
                      <p
                        id="city-error"
                        aria-live="polite"
                        className="text-xs text-destructive"
                      >
                        {errors.city}
                      </p>
                    )}
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
                    <Input
                      id="zip"
                      name="zip"
                      type="text"
                      placeholder="90502"
                      aria-invalid={!!errors.zip}
                      aria-describedby={errors.zip ? "zip-error" : undefined}
                    />
                    {errors.zip && (
                      <p
                        id="zip-error"
                        aria-live="polite"
                        className="text-xs text-destructive"
                      >
                        {errors.zip}
                      </p>
                    )}
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  aria-live="polite"
                  className="text-xs text-destructive"
                >
                  {errors.phone}
                </p>
              )}
            </FieldSet>
          </CardContent>

          <CardFooter className="flex justify-end border-t p-4 md:p-6">
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
