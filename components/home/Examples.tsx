'use client';

import { useState } from 'react';
import { useTranslation } from '@/providers/language-provider';
import { 
  ArrowLeft, 
  ArrowRight, 
  Play, 
  Heart, 
  MessageSquare, 
  Copy, 
  ExternalLink 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Examples() {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  
  const examples = [
    {
      id: 1,
      title: "Let's check out that prompt adherence...",
      description: "The camera follows a delightful cat staring through a long room and out a window. As it ends, it stands on the top seat overlooking the neighborhood at an ice cream truck.",
      author: {
        name: "Nick McIntyre",
        username: "n1ck",
        avatar: "/avatars/nick.jpg"
      },
      likes: 124,
      comments: 12,
      date: "May 23, 2025",
      time: "4:54 AM"
    },
    {
      id: 2,
      title: "Veo 3 prompt: \"a person walks inside of a hi-tech futuristic city.\"",
      description: "The person comments out loud on what he sees, and what surprises him the most. Cars fly by in the background, tall buildings, beautiful weather.",
      author: {
        name: "Herman Narvalez",
        username: "herman",
        avatar: "/avatars/herman.jpg"
      },
      likes: 217,
      comments: 24,
      date: "May 24, 2025",
      time: "8:21 AM"
    },
    {
      id: 3,
      title: "Pushing further blurs the lines between reality and imagination with audio.",
      description: "We push further blurs the lines between reality and imagination with audio, stronger text adherence, and richer visual details.",
      author: {
        name: "Vanz_M42",
        username: "vanz",
        avatar: "/avatars/vanz.jpg"
      },
      likes: 95,
      comments: 8,
      date: "May 21, 2025",
      time: "5:32 AM"
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? examples.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === examples.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-orange-500">
            {t('examples.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('examples.description')}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Mobile view (vertical stack) */}
          <div className="md:hidden space-y-6">
            {examples.map((example) => (
              <ExampleCard key={example.id} example={example} />
            ))}
          </div>

          {/* Desktop view (carousel) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <div 
                key={example.id} 
                className={`transition-all duration-300 ${
                  index === activeSlide 
                    ? 'opacity-100 scale-105 z-10' 
                    : 'opacity-70 scale-95'
                }`}
              >
                <ExampleCard example={example} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 -mx-12">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md" 
              onClick={handlePrev}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md" 
              onClick={handleNext}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExampleCard({ example }: { example: any }) {
  const { t } = useTranslation();
  
  return (
    <Card className="overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="p-4 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={example.author.avatar} alt={example.author.name} />
              <AvatarFallback>{example.author.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{example.author.name}</div>
              <div className="text-xs text-muted-foreground">@{example.author.username}</div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="pt-4 px-4">
          <h3 className="font-semibold text-sm mb-2">{example.title}</h3>
          <p className="text-xs text-muted-foreground mb-4 line-clamp-3">{example.description}</p>
        </div>
        <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
          {/* Video player placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              variant="default" 
              size="icon" 
              className="h-12 w-12 rounded-full bg-orange-500 hover:bg-orange-600"
            >
              <Play className="h-6 w-6 text-white" />
            </Button>
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-white bg-black/60 px-2 py-1 rounded-md">
            {example.time}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" className="h-8 px-2 text-pink-500">
            <Heart className="h-4 w-4 mr-1" />
            <span className="text-xs">{example.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <MessageSquare className="h-4 w-4 mr-1" />
            <span className="text-xs">{example.comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="h-8 px-2">
          <Copy className="h-4 w-4 mr-1" />
          <span className="text-xs">{t('examples.copyLink')}</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
