# [adistrim.me](https://adistrim.me)

This is the source code of my personal/portfolio website. 

Created with the following tools and frameworks:

1. [Next.js](https://nextjs.org/)
2. [TypeScript](https://www.typescriptlang.org/)
3. [Tailwindcss](https://tailwindcss.com/)
4. [Cloudflare](https://www.cloudflare.com/)
5. [MongoDB](https://www.mongodb.com/)
6. [Vercel](https://vercel.com/)

Deployment URL: [www.adistrim.me](https://adistrim.me)

### Recent Update: [Blog Page](https://adistrim.me/blog) [THE COOLEST-SECTION]
The recent addition to the website is a blog page that fetches blogs from Hashnode using Hashnode's GraphQL API. This feature enables users to access my latest blog posts directly on the website.

### [Changelog](https://adistrim.me/changelog) [THE SECOND COOLEST-SECTION]

The changelog section provides a list of all changes and updates made to the website. It includes details about new features, bug fixes, optimizations, and any other modifications.

## Docker Image

```bash
docker build -t adistrim .      
```
_builds the docker image_

```bash
docker run -d -p 3000:3000 adistrim
```
_runs the docker container_

## Contributing

Contributions to the website are welcome! If you find any issues, have suggestions for improvements, or would like to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://www.mit.edu/~amini/LICENSE.md).
