import { Link } from '@tanstack/react-router';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-2xl font-semibold text-foreground mt-4 mb-8">
          Oops! Page Not Found
        </p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;