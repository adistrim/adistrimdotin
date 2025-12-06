import { Now, NowDocument } from "@/models/now";
import { dbConnect } from "@/utils/db";

export const revalidate = 86400;

export async function getNow(): Promise<NowDocument | null> {
    try {
        await dbConnect();
        return await Now.findOne().lean<NowDocument>();
    } catch {
        return null;
    }
}
