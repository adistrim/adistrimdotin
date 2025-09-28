"use client";
import { useState, useEffect } from "react";
import { Github } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function GitHubStats() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const USERNAME = "adistrim";

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const THEME = isDark ? 'github_dark' : 'default';
  const BG_COLOR = isDark ? '0d1117' : 'ffffff';
  const TITLE_COLOR = isDark ? 'f0f6fc' : '24292f';
  const TEXT_COLOR = isDark ? '8d96a0' : '656d76';
  const ICON_COLOR = isDark ? '79c0ff' : '0969da';

  const API_URL = `https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=${THEME}&hide_border=true&bg_color=${BG_COLOR}&title_color=${TITLE_COLOR}&text_color=${TEXT_COLOR}&icon_color=${ICON_COLOR}&rank_icon=percentile`;

  return (
    <Card className="w-fit">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Github className="h-4 w-4" />
          <span>GitHub Stats</span>
        </div>
        
        <div className="space-y-3">
          <div className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={API_URL}
              alt="GitHub Stats"
              width={350}
              height={180}
              className="w-full h-auto rounded-lg"
              onLoad={() => setImageLoaded(true)}
              unoptimized
            />
          </div>
          
          {!imageLoaded && (
            <Skeleton className="h-32 w-full rounded-lg" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
