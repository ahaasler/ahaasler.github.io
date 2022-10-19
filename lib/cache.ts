import { ProjectType } from "@/types/projects"
import FsCache from "@/lib/cache.fs"
import RedisCache from "@/lib/cache.redis"

declare interface ProjectCache {
	projectNames(): Promise<string[] | undefined>
	projects(): Promise<ProjectType[] | undefined>
	project(name: string): Promise<ProjectType | undefined>
	set(projects: ProjectType[])
}

export function getCache(): ProjectCache {
	if (process.env.NODE_ENV === "production") {
		return new RedisCache()
	} else {
		return new FsCache()
	}
}

export default ProjectCache
