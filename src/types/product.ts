export enum ProductCategory {
  LIVING_ROOM = "Living Room",
  BEDROOM = "Bedroom",
  KITCHEN = "Kitchen",
  LIGHTING = "Lighting",
  TEXTILES = "Textiles",
}

export const PRODUCT_CATEGORY_OPTIONS: {
  value: ProductCategory;
  label: string;
}[] = [
  { value: ProductCategory.LIVING_ROOM, label: "Living Room" },
  { value: ProductCategory.BEDROOM, label: "Bedroom" },
  { value: ProductCategory.KITCHEN, label: "Kitchen & Dining" },
  { value: ProductCategory.LIGHTING, label: "Lighting" },
  { value: ProductCategory.TEXTILES, label: "Textiles" },
] as const;

export const PRODUCT_CATEGORY_FILTER_OPTIONS: {
  value: ProductCategory | "all";
  label: string;
}[] = [{ value: "all", label: "All categories" }, ...PRODUCT_CATEGORY_OPTIONS];

export function isProductCategory(value: string): value is ProductCategory {
  return Object.values(ProductCategory).includes(value as ProductCategory);
}

export function formatCategoryLabel(category: ProductCategory): string {
  const option = PRODUCT_CATEGORY_OPTIONS.find(
    (item) => item.value === category,
  );
  return option?.label ?? category;
}

export enum ProductSort {
  NAME_ASC = "Name (A–Z)",
  NAME_DESC = "Name (Z–A)",
  PRICE_ASC = "Price (low to high)",
  PRICE_DESC = "Price (high to low)",
}

export const PRODUCT_SORT_OPTIONS: {
  value: ProductSort;
  label: string;
}[] = [
  { value: ProductSort.NAME_ASC, label: "Name (A–Z)" },
  { value: ProductSort.NAME_DESC, label: "Name (Z–A)" },
  { value: ProductSort.PRICE_ASC, label: "Price (low to high)" },
  { value: ProductSort.PRICE_DESC, label: "Price (high to low)" },
];

export function isProductSort(value: string): value is ProductSort {
  return Object.values(ProductSort).includes(value as ProductSort);
}
