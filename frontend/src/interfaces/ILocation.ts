export interface ILocation {
  address: {
    addressCountry: string;
    addressLocality: string;
    addressRegion: string;
    streetAddress: string;
    postalCode: string;
    "@type": string;
  };
  geo: {
    latitude: string;
    "@type": string;
    longitude: string;
  };
  "@type": string;
  name: string;
}