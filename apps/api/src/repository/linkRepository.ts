import { Link } from '@repo/db/client';
import { BaseRepository } from "./baseRepository";
import prisma from "../lib/db";

class LinkRepository extends BaseRepository<Link> {
    constructor() {
        super(prisma.link)
    }

    // Add any user-specific methods here

}

export { LinkRepository }
