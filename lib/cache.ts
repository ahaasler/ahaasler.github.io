import { ProjectType } from "@/types/projects"
import FsCache from "@/lib/cache.fs"

declare interface ProjectCache {
	projectNames(): Promise<string[] | undefined>
	projects(): Promise<ProjectType[] | undefined>
	project(name: string): Promise<ProjectType | undefined>
	set(projects: ProjectType[])
}

export function getCache(): ProjectCache {
	return new FsCache()
}

export default ProjectCache
