import { Skeleton } from "@/components/ui/skeleton";

export default function BlogSkeleton() {
  return (
    <div className="p-4 md:space-x-4 border rounded-lg shadow-md flex flex-col md:flex-row h-full">
      <div className="flex-1 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
        <div className="space-y-2 pt-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
      <Skeleton className="md:w-64 h-40 md:h-auto mt-4 md:mt-0" />
    </div>
  );
}
