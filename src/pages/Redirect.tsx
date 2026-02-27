import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Redirect = () => {
  const [params] = useSearchParams();
  const url = params.get("url");

  useEffect(() => {
    if (url) {
      window.location.replace(url);
    }
  }, [url]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground font-body text-sm">Redirection en cours…</p>
    </div>
  );
};

export default Redirect;
