import { ENV } from "@/config";
import { CONFIG, EXTERNAL_API } from "@/constants";

const GET_ARTICLES_QUERY = `
query Publication {
  publication(host: "${CONFIG.blogHost}") {
    posts(first: ${CONFIG.blogPostsCount}) {
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
`

export async function getBlogs() {
  const res = await fetch(EXTERNAL_API.hashnodeGql, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ENV.hashnodeApiKey}`
    },
    body: JSON.stringify({ query: GET_ARTICLES_QUERY, next: { revalidate: 86400 } })
  });

  const json = await res.json();
  return json.data.publication.posts.edges.map((e: any) => e.node);
}
