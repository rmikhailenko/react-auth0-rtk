import { Auth0Provider } from "@auth0/auth0-react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
}
