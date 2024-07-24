import React, { useState, useEffect } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkReact from 'remark-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slideshow = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch('/src/ai-origins.md')
      .then((response) => response.text())
      .then((text) => {
        const slideContents = text.split('---').map((slide) => slide.trim());
        const processedSlides = slideContents.map((content) =>
          unified().use(remarkParse).use(remarkReact).processSync(content).result
        );
        setSlides(processedSlides);
      });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-3xl h-[60vh] flex flex-col">
        <CardContent className="flex-grow overflow-auto p-6">
          {slides[currentSlide]}
        </CardContent>
        <div className="flex justify-between items-center p-4 border-t">
          <Button onClick={prevSlide} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button onClick={nextSlide} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Slideshow;