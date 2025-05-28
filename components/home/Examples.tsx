'use client';

import { useTranslation } from '@/providers/language-provider';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Examples() {
  const { t } = useTranslation();
  
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
    {
      id: 4,
      title: "Exploring the boundaries of AI-generated content",
      description: "A mesmerizing journey through an AI-generated landscape, where every frame tells a story. The seamless blend of reality and imagination creates an immersive experience that challenges our perception of what's possible.",
      author: {
        name: "Sarah Chen",
        username: "sarahchen",
        avatar: "/avatars/sarah.jpg"
      },
      likes: 342,
      comments: 45,
      date: "May 25, 2025",
      time: "2:15 PM"
    },
    {
      id: 5,
      title: "The future of storytelling",
      description: "Witness how AI transforms simple prompts into compelling narratives. From character development to scene composition, every element comes together to create a cohesive story.",
      author: {
        name: "Marcus Wong",
        username: "marcusw",
        avatar: "/avatars/marcus.jpg"
      },
      likes: 189,
      comments: 23,
      date: "May 24, 2025",
      time: "11:30 AM"
    },
    {
      id: 6,
      title: "Creative possibilities unleashed",
      description: "Breaking free from traditional constraints, we explore new dimensions of creativity. The results are nothing short of extraordinary.",
      author: {
        name: "Emma Rodriguez",
        username: "emmar",
        avatar: "/avatars/emma.jpg"
      },
      likes: 276,
      comments: 31,
      date: "May 23, 2025",
      time: "9:45 AM"
    },
    {
      id: 7,
      title: "A day in the life of an AI artist",
      description: "Follow along as we document the creative process behind AI-generated art. From concept to final render, see how technology enhances human creativity.",
      author: {
        name: "David Kim",
        username: "davidk",
        avatar: "/avatars/david.jpg"
      },
      likes: 156,
      comments: 19,
      date: "May 22, 2025",
      time: "3:20 PM"
    },
    {
      id: 8,
      title: "The evolution of digital storytelling",
      description: "How AI is revolutionizing the way we tell stories. Experience the perfect blend of technology and creativity in this groundbreaking demonstration.",
      author: {
        name: "Lisa Patel",
        username: "lisap",
        avatar: "/avatars/lisa.jpg"
      },
      likes: 203,
      comments: 27,
      date: "May 21, 2025",
      time: "1:10 PM"
    },
    {
      id: 9,
      title: "Breaking new ground in visual effects",
      description: "Pushing the boundaries of what's possible with AI-generated visual effects. The results are stunning, realistic, and completely generated from text prompts.",
      author: {
        name: "Alex Thompson",
        username: "alext",
        avatar: "/avatars/alex.jpg"
      },
      likes: 289,
      comments: 34,
      date: "May 20, 2025",
      time: "10:30 AM"
    }
  ];

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

        <div className="max-w-7xl mx-auto">
          {/* Mobile view (single column) */}
          <div className="md:hidden space-y-6">
            {examples.map((example) => (
              <div key={example.id} className="w-full">
                <ExampleCard example={example} />
              </div>
            ))}
          </div>

          {/* Desktop view (grid) */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((example) => (
              <div key={example.id} className="w-full">
                <ExampleCard example={example} />
              </div>
            ))}
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
      <CardHeader className="p-4">
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
      </CardHeader>
      <CardContent className="p-0">
        <div className="px-4 pb-4">
          <h3 className="font-semibold text-sm mb-4">{example.title}</h3>
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
        <div className="px-4 pt-4 pb-4">
          <p className="text-xs text-muted-foreground">{example.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
