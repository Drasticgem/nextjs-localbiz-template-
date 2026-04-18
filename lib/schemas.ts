/**
 * Contact schema shape placeholder.
 * Install `zod` and replace this with `z.object(...)` in client projects.
 */
export interface ContactSchema {
  name: string;
  phone: string;
  email: string;
  message: string;
  service?: string;
}

export const contactSchemaFields: Record<keyof ContactSchema, string> = {
  name: "Name is required",
  phone: "Phone is required",
  email: "Valid email is required",
  message: "Please provide more details",
  service: "Optional service selection",
};
