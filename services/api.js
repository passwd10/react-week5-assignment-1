export async function fetchRestaurantRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  return await response.json();
}

//TODO : delete this
export function xxx() {
  //
}