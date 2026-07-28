export interface Supporter {
  displayName: string;
  id: string;
  imagePath: `/supporters/${string}.${"avif" | "webp"}`;
  sortOrder: number;
}

export function validateSupporters(
  entries: readonly Supporter[],
): readonly Supporter[] {
  const ids = new Set<string>();
  const imagePaths = new Set<string>();
  const sortOrders = new Set<number>();

  function addUnique<T>(values: Set<T>, value: T, label: string) {
    if (values.has(value)) {
      throw new Error(`Duplicate supporter ${label}: ${value}`);
    }

    values.add(value);
  }

  for (const entry of entries) {
    if (!entry.id.trim() || !entry.displayName.trim()) {
      throw new Error("Supporter IDs and display names must not be empty.");
    }

    addUnique(ids, entry.id, "ID");
    addUnique(imagePaths, entry.imagePath, "image path");
    addUnique(sortOrders, entry.sortOrder, "sort order");
  }

  return entries;
}

// Entries are added only after the owner has verified publication permission
// for both the display name and image.
export const supporters = validateSupporters([] satisfies Supporter[]);
