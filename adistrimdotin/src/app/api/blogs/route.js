import 'dotenv/config';

const GET_USER_ARTICLES = `
query Publication {
  publication(host: "adistrim.hashnode.dev") {
    isTeam
    title
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

async function gql(query, variables = {}) {
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

  return response.json();
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '0';
    const variables = { page: parseInt(page, 10) };
    const { data } = await gql(GET_USER_ARTICLES, variables);

    if (!data || !data.publication) {
      return new Response(JSON.stringify({ error: 'Invalid API response structure' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const posts = data.publication.posts.edges.map(edge => edge.node);
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
