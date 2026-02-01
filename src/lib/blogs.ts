import { ENV } from "@/config";
import { CONFIG, EXTERNAL_API } from "@/constants";

function buildQuery(count: number) {
  return `
    query Publication {
      publication(host: "${CONFIG.blogHost}") {
        posts(first: ${count}) {
          edges {
            node {
              title
              subtitle
              brief
              url
              readTimeInMinutes
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;
}

export async function getBlogs(count: number = CONFIG.blogPostsCount) {
  const query = buildQuery(count);

  const res = await fetch(EXTERNAL_API.hashnodeGql, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ENV.hashnodeApiKey}`
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 86400 }
  });

  const json = await res.json();
  return json.data.publication.posts.edges.map((e: any) => e.node);
}

export async function getLatestBlogPost() {
  try {
    const blog = await getBlogs();
    return blog[0] || null;
  } catch {
    return null;
  }
}

