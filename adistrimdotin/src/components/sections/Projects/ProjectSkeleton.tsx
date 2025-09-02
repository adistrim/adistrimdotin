import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export function ProjectSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <Card key={index} className="h-full flex flex-col">
            <CardHeader>
              <Skeleton className="h-7 w-3/4" />
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              <div className="flex flex-wrap gap-2">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16 rounded-full" />
                  ))}
              </div>
            </CardContent>

            <CardFooter className="border-t pt-4 flex justify-between">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-24" />
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
