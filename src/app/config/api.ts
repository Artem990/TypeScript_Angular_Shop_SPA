import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'http://someUrl/...' : 'http://localhost:8080';
export const productsUrl = baseUrl + '/products';
export const cartUrl = baseUrl + '/cart';
export const addToCartUrl = baseUrl + '/tocart';
export const wishListUrl = baseUrl + '/wishlist';