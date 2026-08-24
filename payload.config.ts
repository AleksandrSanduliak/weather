import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import sharp from "sharp";

import { BrandsCollection } from "@/payload-modules/collections/brands";
import { CategoriesCollection } from "@/payload-modules/collections/categories";
import { MediaColection } from "@/payload-modules/collections/media";
import { ProductsCollection } from "@/payload-modules/collections/products";
import { UsersCollection } from "@/payload-modules/collections/users";

export default buildConfig({
  collections: [UsersCollection, ProductsCollection, CategoriesCollection,BrandsCollection, MediaColection],
  secret: process.env.PAYLOAD_SECRET || "",

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI, 
    },
  }),
  sharp,
});
