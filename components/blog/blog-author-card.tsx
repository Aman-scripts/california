import Image from "next/image";
import { CheckCheck, Clock3, Leaf, Stethoscope } from "lucide-react";

import { formatBlogDate, formatBlogDateLong, type BlogPost, } from "@/lib/blog-data";
export function BlogAuthorCard({ post }: { post: BlogPost }) {
  return (
    <aside className="mt-14 w-full">
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        About the Author
      </h2>

      <div className="relative z-10 border-2 mt-6 w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-emerald-50 via-background to-amber-50/60 p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
          {/* Left image */}
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-3xl border-4 border-white shadow-[0_8px_25px_rgba(0,0,0,0.18)] sm:h-48 sm:w-48">
            {post.authorImage ? (
              <Image
                src={post.authorImage}
                alt={post.author}
                fill
                sizes="192px"
                className="object-cover"
              />
            ) : null}
          </div>

          {/* Right content */}
          <div className="min-w-0 flex-1 text-left">
            <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {post.author}
            </h3>
            <p className="mt-2 text-base font-semibold text-primary">
              {post.authorRole}
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-muted-foreground">
              {post.authorBio ||
                `${post.author} is a healthcare professional and experienced medical writer who creates clear, evidence-based content designed to help readers better understand important health topics.`}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
// function AuthorPerson({
//   label,
//   name,
//   role,
//   image,
//   fallback,
//   reviewerSpecialist,
//   specialist,
// }: {
//   label: string;
//   name: string;
//   role?: string;
//   image?: string;
//   fallback: "writer" | "reviewer";
//   reviewerSpecialist?: string;
//   specialist?: string;
// }) {
//   return (
//     <div className="flex min-w-0 flex-1 items-center gap-3">
//       <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-emerald-50 ring-2 ring-primary/20 sm:size-14">
//         {image ? (
//           <Image
//             src={image}
//             alt={name}
//             fill
//             sizes="56px"
//             className="object-cover"
//           />
//         ) : fallback === "writer" ? (
//           <Image
//             src="/mmca-logo.svg"
//             alt=""
//             fill
//             sizes="56px"
//             className="object-contain p-2.5"
//           />
//         ) : (
//           <span className="flex size-full items-center justify-center text-primary">
//             <Stethoscope className="size-6" aria-hidden="true" />
//           </span>
//         )}
//       </div>
//       <div className="min-w-0">
//         <p className="text-xs text-muted-foreground">{label}</p>
//         <p className="font-heading text-base font-semibold tracking-tight text-foreground">
//           {name}
//         </p>
//         {role ? <p className="text-sm text-muted-foreground">{role}</p> : null}
//         {reviewerSpecialist && <p className="text-sm text-primary">{reviewerSpecialist}</p>}
//         {specialist && <p className="text-sm text-primary">{specialist}</p>}
//       </div>
//     </div>
//   );
// }
