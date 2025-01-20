const config = {
    DATABASE_URL: Deno.env.get("DATABASE_URL"),
    PORT: parseInt(Deno.env.get("PORT") || "8000"),
}

export default config;
