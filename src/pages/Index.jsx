import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-6">AI Origins Slideshow</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Explore the fascinating history of Artificial Intelligence through our interactive slideshow.
      </p>
      <Button asChild>
        <Link to="/ai-origins">Start Slideshow</Link>
      </Button>
    </div>
  );
};

export default Index;