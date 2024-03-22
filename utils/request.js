import { revalidatePath } from 'next/cache';

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function fetchProperties() {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    revalidatePath(`${apiDomain}/properties`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchProperty(id) {
  if (!apiDomain) return null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`
    );

    if (!res.ok) throw new Error('Failed to fetch proerty');

    return res.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}
