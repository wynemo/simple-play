"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [progress, setProgress] = useState([30]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Simple Music Player</CardTitle>
          <CardDescription>Next.js + FastAPI + shadcn/ui</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Album Art Placeholder */}
          <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <p className="text-white text-6xl">♪</p>
          </div>

          {/* Track Info */}
          <div className="text-center space-y-1">
            <h3 className="font-semibold text-lg">Song Title</h3>
            <p className="text-sm text-muted-foreground">Artist Name</p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1:23</span>
              <span>3:45</span>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="ghost" size="icon">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="h-12 w-12"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-3">
            <Volume2 className="h-5 w-5 text-muted-foreground" />
            <Slider
              value={volume}
              onValueChange={setVolume}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground w-10 text-right">
              {volume[0]}%
            </span>
          </div>

          {/* API Status */}
          <div className="pt-4 border-t">
            <p className="text-xs text-center text-muted-foreground">
              Backend API: <span className="text-green-500">●</span> Ready at
              localhost:8000
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
