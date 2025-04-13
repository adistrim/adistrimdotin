import 'dotenv/config';

const GET_USER_ARTICLES = `
query Publication {
  publication(host: "adistrim.hashnode.dev") {
    posts(first: 10) {
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

interface Article {
  title: string;
  subtitle: string | null;
  brief: string;
  url: string;
  readTimeInMinutes: number;
  publishedAt: string;
  coverImage: {
    url: string;
  };
}

interface GqlResponse<T> {
  data: T;
  errors?: { message: string }[];
}

async function gql<T>(query: string, variables: Record<string, any> = {}): Promise<GqlResponse<T>> {
  const response = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HASHNODE}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Hashnode API request failed with status ${response.status}: ${errorText}`);
  }

  const json = (await response.json()) as GqlResponse<T>;

  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  }

  return json;
}

export async function GET() {
  try {
    const gqlRes = await gql<{
      publication: {
        posts: {
          edges: { node: Article }[];
        };
      };
    }>(GET_USER_ARTICLES);

    const flatArticles = gqlRes.data.publication.posts.edges.map(edge => edge.node);

    return new Response(JSON.stringify(flatArticles), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
