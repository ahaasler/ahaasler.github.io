import ProjectCache from "@/lib/cache"
import { ProjectType } from "@/types/projects"
import Redis from "ioredis"

const EXPIRATION_IN_MILLIS = 6 * 60 * 60 * 1_000; // 6 hours
const MS_TOKEN = "PX";

export default class RedisCache implements ProjectCache {

	redis = new Redis(`${process.env.REDIS_PATH}`)

	async project(name: string): Promise<ProjectType | undefined> {
		try {
			const data = await this.redis.get(`project-${name}`)
			return data == null ? undefined : JSON.parse(data as unknown as string) as ProjectType
		} catch (error) {
			return undefined
		}
	}

	async projectNames(): Promise<string[] | undefined> {
		try {
			const keys = await this.redis.keys("project-*")
			return keys.length > 0 ? keys : undefined
		} catch (error) {
			return undefined
		}
	}

	async projects(): Promise<ProjectType[] | undefined> {
		try {
			const data = await this.redis.get("projects")
			return data == null ? undefined : JSON.parse(data as unknown as string) as ProjectType[]
		} catch (error) {
			return undefined
		}
	}

	async set(projects: ProjectType[]) {
		this.redis.set("projects", JSON.stringify(projects), MS_TOKEN, EXPIRATION_IN_MILLIS)
		projects.map(p => {
			this.redis.set(`project-${p.name}`, JSON.stringify(p), MS_TOKEN, EXPIRATION_IN_MILLIS)
		})
	}

}