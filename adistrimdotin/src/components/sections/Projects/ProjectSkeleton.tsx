import { Skeleton } from "@/components/ui/skeleton";

export function ProjectSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden flex flex-col h-full"
          >
            <div className="p-6 flex flex-col flex-grow">
              <Skeleton className="h-7 w-3/4 mb-3" />
              <div className="space-y-2 mb-5">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Skeleton key={i} className="h-6 w-16 rounded-md" />
                  ))}
              </div>

              <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-zinc-700 mt-auto">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-24" />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
